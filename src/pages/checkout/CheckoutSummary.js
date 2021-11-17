import React from 'react';
import './Checkout.css';
import { connect } from 'react-redux';
// import { useLocation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
// import Loader from '../../components/Loader';

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`)

function CheckoutSummary(props) {

  // need to find a way to verify that the user has been redirected from /order-summary vs. a user going straight to /checkout
  // const search = useLocation().search;
  // const cartHash = new URLSearchParams(search).get('cart');
  // console.log("URL Query Params:", cartHash)

  const renderContent = () => {
    if (props.stripe && props.orderCheckout) {

      const appearance = {
        style: {
          base: {
            color: '#fff',
          },
          invalid: {},
          complete: {},
        },
      }

      const options = { 
        client_secret: props.stripe.stripeClientSecret,
        appearance: appearance,
      }

      return (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      )

    } else {
      return (
        <div className="invalid-checkout">
          Your order hasn't been verified by our systems. <br /> Please checkout by opening your cart and clicking 'Checkout'.
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
  if (state.currentUser.stripe && state.currentUser.orderCheckout && state.userCart) {
    return {
      stripe: state.currentUser.stripe,
      orderCheckout: state.currentUser.orderCheckout,
      userCart: state.userCart,
      checkoutLoading: state.checkoutLoading,
    }
  } else return {}
}

export default connect(mapStateToProps)(CheckoutSummary);