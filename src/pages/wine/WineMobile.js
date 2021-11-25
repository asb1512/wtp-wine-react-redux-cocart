import React, { useState } from 'react';
import './WineMobile.css';

import { useSpring, animated } from 'react-spring';
import { connect } from 'react-redux';
import { addSimpleItemToCart } from '../../actions/userCart';

import cab from '../../images/wine/cabernet.png';
import chard from '../../images/wine/chardonnay.png';



function WineMobile(props) {



  const [triggerCab, setCab] = useState(false);
  const [hideChard, setHideChard] = useState(false);
  const cabImgStyle = useSpring({
    height: triggerCab ? '100%' : '145%',
    left: triggerCab ? '37vw' : '7vw',
    opacity: hideCab ? 0 : 1,
  })

  const [triggerChard, setChard] = useState(false);
  const [hideCab, setHideCab] = useState(false);
  const chardImgStyle = useSpring({
    height: triggerCab ? '100%' : '145%',
    right: triggerChard ? '37vw' : '7vw',
    opacity: hideChard ? 0 : 1,
  })

  const handleCabClick = () => {
    setCab(true);
    setHideChard(true);
  }
  const handleChardClick = () => {
    setChard(true);
    setHideCab(true);
  }

  

  return (
    <div className="wine-mobile-cntr">
      
      <div className="wine-mobile-bottle-cntr">
        <animated.img
          src={cab}
          alt="We The People Cabernet Sauvignon"
          className="wine-mobile-bottle-cab"
          style={cabImgStyle}
        />

        <animated.img
          src={chard}
          alt="We The People Chardonnay"
          className="wine-mobile-bottle-chard"
          style={chardImgStyle}
        />
      </div>

      <div className="wine-mobile-vertical-lines"/>

      <div className="wine-mobile-btn-cntr">
        <button
          className="wine-mobile-btn-cab"
          onClick={handleCabClick}
        >
          CABERNET
        </button>

        <button
          className="wine-mobile-btn-chard"
        >
          CHARDONNAY
        </button>
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
    addSimpleItemToCart: (productId, quantity, cartKey = '') => dispatch(addSimpleItemToCart(productId, quantity, cartKey)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WineMobile);