import React from 'react';
import './Checkout.css';
import { connect } from 'react-redux';
import CheckoutForm from './CheckoutForm';

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`)

function CheckoutSummary(props) {

  const renderContent = () => {
    if (props.stripe && props.orderCheckout) {
      const options = { clientSecret: props.stripe.stripeClientSecret }
      return (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      )

    } else {
      return (
        <div className="invalid-checkout">
          You don't have a pending order. Please add items to your cart.
        </div>
      )
    }
  }

  return (
    <div className="checkout-container">
      {renderContent()}
    </div>
  )
}

const mapStateToProps = (state) => {
  if (state.currentUser.stripe && state.currentUser.orderCheckout) {
    return {
      stripe: state.currentUser.stripe,
      orderCheckout: state.currentUser.orderCheckout,
    }
  } else return {}
}

export default connect(mapStateToProps)(CheckoutSummary);