import React, { useState } from 'react';
import './WineClubModal.css';
import { connect } from 'react-redux';
import { addVariableProductToCart } from '../../actions/userCart';

import diamond from '../../images/wine-club/diamond-icon.png';
import platinum from '../../images/wine-club/chain-link-icon.png';
import gold from '../../images/wine-club/gold-bar-icon.png';
import dpCab from '../../images/wine-club/dp-cab-2.png';
import dpChard from '../../images/wine-club/dp-chard.png';
import dpMix from '../../images/wine-club/dp-mix.png';
import ppCab from '../../images/wine-club/pp-cab.png';
import ppChard from '../../images/wine-club/pp-chard.png';
import ppMix from '../../images/wine-club/pp-mix.png';
import gpTwoCab from '../../images/wine-club/gp-2-cab.png';
import gpTwoChard from '../../images/wine-club/gp-2-chard.png';
import gpThreeCab from '../../images/wine-club/gp-3-cab.png';
import gpThreeChard from '../../images/wine-club/gp-3-chard.png';



function WineClubModal(props) {

  const renderWineImg = () => {
    switch (props.packageType) {
      case 'dpCab':
        return dpCab
      case 'dpChard':
        return dpChard
      case 'dpMix':
        return dpMix
      case 'ppCab':
        return ppCab
      case 'ppChard':
        return ppChard
      case 'ppMix':
        return ppMix
      case 'gpTwoCab':
        return gpTwoCab
      case 'gpTwoChard':
        return gpTwoChard
      case 'gpThreeCab':
        return gpThreeCab
      case 'gpThreeChard':
        return gpThreeChard
      default:
        return null
    }
  }

  const renderPackageLevel = () => {
    switch (props.packageLevel) {
      case 'Diamond':
        return 'DIAMOND PACKAGE'
      case 'Platinum':
        return 'PLATINUM PACKAGE'
      case 'Gold':
        return 'GOLD PACKAGE'
      default:
        return null
    }
  }

  const renderPackageIcon = () => {
    switch (props.packageLevel) {
      case 'Diamond':
        return diamond
      case 'Platinum':
        return platinum
      case 'Gold':
        return gold
      default:
        return null
    }
  }

  const [wineQuantity, setWineQuantity] = useState(1);

  const handlePlusWineQuantity = () => {
    if (wineQuantity >= 1) {
      let newValue = wineQuantity + 1;
      setWineQuantity(newValue);
    }
  }
  const handleMinusWineQuantity = () => {
    if (wineQuantity > 1) {
      let newValue = wineQuantity - 1;
      setWineQuantity(newValue);
    }
  }

  // handles form submit and select tag values
  const [frequencyValue, setFrequencyValue] = useState('default');

  const handleFrequencyChange = (event) => {
    setFrequencyValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addVariableProductToCart(props.productId, wineQuantity, frequencyValue);
  }


  const renderModalContent = () => {
    return (
      <div className="wcm-ctnt">
        <div
          className="wcm-close-btn"
          onClick={() => props.setModal(false)}
        >
          X
        </div>

        <img
          src={renderWineImg()}
          alt={`We The People Wine: ${props.altText} – ${props.packageQuantity} bottles`}
          className="wcm-img"
        />

        <div className="wcm-pkg-info">
          <div className="wcm-pkg-level">{renderPackageLevel()}
            <img
              src={renderPackageIcon()}
              alt={`We The People Wine Club: ${props.packageLevel} Packages`}
              className="wcm-icon"
            />
          </div>

          <div className="wcm-pkg-title">
            {props.wineTypeYear} <br /> <span>{props.wineTypeName}</span>
          </div>

          <div className="wcm-pkg-subheading">{props.packageQuantity} BOTTLES</div>

          <div className="wcm-pkg-price">
            ${props.packagePrice} <span>per delivery</span>
          </div>

          <form onSubmit={handleSubmit}>
            <select 
              className="wcm-select" 
              value={frequencyValue}
              onChange={handleFrequencyChange}
            >
              <option value="Default">Choose a frequency</option>
              <option value="Monthly">Monthly</option>
              <option value="Quarterly">Quarterly</option>
            </select>

            <div className="wcm-quantity-counter">
              <div
                className="minus-sign"
                onClick={() => handleMinusWineQuantity()}
              >
                –
              </div>
              <div className="quantity-value">{wineQuantity}</div>
              <div
                className="plus-sign"
                onClick={() => handlePlusWineQuantity()}
              >
                +
              </div>
            </div>
            <button
              className="wcm-addtocart-btn"
            >
              ADD TO CART
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div
      className="wcm-bg"
      style={props.showModal ? {} : { display: 'none' }}
    >
      <div className="wcm-cntr">
        {renderModalContent()}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  if (state.userCart) {
    return {
      cartKey: state.userCart.cart_key,
    }
  } else return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addVariableProductToCart: (id, quantity, frequency, cartKey) => dispatch(addVariableProductToCart(id, quantity, frequency, cartKey))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WineClubModal);