import React from 'react';
import './WineMobile.css';

import { useState, useRef } from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated } from 'react-spring';
import { connect } from 'react-redux';
import { addSimpleItemToCart } from '../../actions/userCart';

import cab from '../../images/wine/cabernet.png';
import chard from '../../images/wine/chardonnay.png';



function WineMobile(props) {
  return (
    <div className="wine-mobile-cntr">
      
      <div className="wine-mobile-bottle-cntr">
        <img
          src={cab}
          alt="We The People Cabernet Sauvignon"
          className="wine-mobile-bottle-img"
        />

        <img
          src={chard}
          alt="We The People Chardonnay"
          className="wine-mobile-bottle-img"
        />
      </div>

      <div className="wine-mobile-vertical-lines"/>

      <div className="wine-mobile-btn-cntr">
        <button
          className="wine-mobile-btn-cab"
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