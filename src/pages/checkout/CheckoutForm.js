import React, { useState } from 'react';
import { connect } from 'react-redux';
import { clearCart } from '../../actions/userCart';
import { useHistory } from 'react-router-dom';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#fff',
      "::placeholder": {
        color: "#aab7c4",
      },
      fontSize: '20px',
    },
    invalid: {},
  },
  hidePostalCode: true,
};

function CheckoutForm(props) {

  let history = useHistory(); 

  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [btnDisabled, setBtnDisable] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();

    const billingDetails = {
      name: props.orderCheckout.billing.first_name + " " + props.orderCheckout.billing.last_name,
      email: props.orderCheckout.billing.email,
      address: {
        city: props.orderCheckout.billing.city,
        line1: props.orderCheckout.billing.address_1,
        state: props.orderCheckout.billing.state,
        postal_code: props.orderCheckout.billing.postcode,
      },
    };

    if (!stripe || !elements) {
      setBtnDisable(true);
      return;
    };

    const cardElement = elements.getElement(CardElement);

    const paymentMethod = {
      payment_method: {
        card: cardElement,
        billing_details: billingDetails,
      },
      receipt_email: props.orderCheckout.billing.email,
    };

    try {
      const result = await stripe.confirmCardPayment(props.stripe.stripeClientSecret, paymentMethod);
      
      if (result.error) {
        throw new Error(result.error.message);
      }
      props.clearCart(props.userCart.cart_key)
      history.push(`/order-success`);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <form className="stripe-checkout" onSubmit={handleSubmit}>

      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <button 
        type="submit"
        className="stripe-submit-btn"
        disabled={!stripe}
      >
        PAY {`$${props.orderCheckout.total}`}
      </button>

    </form>
  )
}

const mapStateToProps = state => {
  if (state.currentUser.orderCheckout) {
    return {
      orderCheckout: state.currentUser.orderCheckout,
      stripe: state.currentUser.stripe,
      userCart: state.userCart
    }
  } else return {}
}

const mapDispatchToProps = dispatch => {
  return {
    clearCart: (cartKey) => dispatch(clearCart(cartKey))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);