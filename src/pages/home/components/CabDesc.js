import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import "./WineDesc.css"

export default function CabDesc(props) {

  const renderText = () => {
    if (props.width > 768) {
      return (
        <>
          CABERNET <br /> SAUVIGNON
        </>
      )
    } else {
      return 'CABERNET SAUVIGNON'
    }
  }

  const [redirect, setRedirect] = useState(false);
  const redirectToWinePage = () => {
    if (redirect) {
      return <Redirect to="/wine" />
    }
  };

  return (
    <div className="wine-desc">
      
      <h1>{renderText()}</h1>

      <div>
        Our <span className="wine-desc-span-cab">2018 California Cabernet Sauvignon</span> boasts a deep ruby and purple hue with flavors of blueberry and cherry. Soft tannins round the full-bodied mouthfeel with a velvet finish.
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