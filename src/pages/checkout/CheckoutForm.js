import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

function CheckoutForm(props) {

  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [btnDisabled, setBtnDisable] = useState(false);

  useEffect(() => {
    if (!stripe || props.stripe.stripeClientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(props.stripe.stripeClientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe, props.stripe.stripeClientSecret]);


  const handleSubmit = async (event) => {
    console.log("handleSubmit was called!")
    event.preventDefault()

    const billingDetails = {
      name: props.orderCheckout.billing.first_name + " " + props.orderCheckout.billing.last_name,
      email: props.orderCheckout.billing.email,
      address: {
        city: props.orderCheckout.billing.city,
        line1: props.orderCheckout.billing.address_1,
        state: props.orderCheckout.billing.state,
        postal_code: props.orderCheckout.billing.postcode,
      },
    }

    if (!stripe || !elements) {
      setBtnDisable(true)
      return;
    }

    // if (!error) {

    // }

    const result = await stripe.confirmPayment(
      props.stripe.stripeClientSecret, 
      {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: billingDetails
        },
        confirmParams: {
          return_url: `http://localhost:3000/order-success`,
        },
      }
    )

    if (result.error) {
      renderStripeError(result.error.message)
      console.log("Stripe Error Message:", result.error.message)
    }
  }

  const renderStripeError = (errorMsg) => {
    return (
      <div className="stripe-error">
        {errorMsg}
      </div>
    )
  }

  return (
    <form className="stripe-checkout" onSubmit={handleSubmit}>

      <CardElement />
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
    }
  } else return {}
}

export default connect(mapStateToProps)(CheckoutForm);