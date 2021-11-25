import React from 'react';
import './GiftCards.css';

import giftCard from '../../images/gift-cards/wtp-wine-gift-card.png';



export default function GiftCards() {
  return (
    <div className="gift-cards-cntr">
      
      <h1 className="gift-cards-title">GIFT CARDS</h1>

      <div className="gift-cards-content">
        <img
          src={giftCard}
          alt="We The People Wine Gift Card"
          className="gift-cards-img"
        />

        <div className="gift-cards-options-cntr">
          <div>$50</div>
          <button>BUY</button>

          <div>$100</div>
          <button>BUY</button>

          <div>$200</div>
          <button>BUY</button>

          <div>ENTER AMOUNT</div>
          <button>BUY</button>
        </div>
      </div>

    </div>
  )
}
