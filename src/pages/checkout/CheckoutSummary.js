import React from 'react';
import './Checkout.css';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`)

export default function CheckoutSummary() {

  // const renderLoading = () => {
  //   return (

  //   )
  // }

  return (
    <div className="checkout-container">
      
    </div>
  )
}
