import React, { useState } from 'react';

import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

export default function CheckoutForm() {

  const stripe = useStripe();
  const elements = useElements();

  const [btnDisabled, setBtnDisable] = useState(true)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (stripe && elements) {
      setBtnDisable(false)
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `http://localhost:3000/order-success`,
      },
    })
  }

  return (
    <form className="stripe-checkout">

      <PaymentElement />
      <button 
        className="stripe-submit-btn"
        disabled={btnDisabled}
      >
        SUBMIT
      </button>

    </form>
  )
}
