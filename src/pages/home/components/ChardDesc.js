import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

export default function ChardDesc() {

  const [redirect, setRedirect] = useState(false);
  const redirectToWinePage = () => {
    if (redirect) {
      return <Redirect to="/wine" />
    }
  };

  return (
    <div className="wine-desc">

      <h1>CHARDONNAY</h1>
      
      <div>
        Our <span className="wine-desc-span-chard">2019 California Chardonnay</span> appears with gilded straw color and invites with aromas of white flowers. Stone fruit and baked apples drive the flavor profile while a medium body balances fresh acidity in its clean finish.
      </div>
      <button
        onClick={() => setRedirect(true)}
      >
        PURCHASE
      </button>

      {redirectToWinePage()}
    </div>
  )
}