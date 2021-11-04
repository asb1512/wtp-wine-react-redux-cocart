import React from 'react';
import { useSpring, animated } from 'react-spring';

import './MiniCart.css';

export default function MiniCart(props) {

  const cartStyle = useSpring({
    right: props.toggle ? '0%' : '-30%'
  })

  return (
    <animated.div className="minicart-container" style={cartStyle}>
      <div className="minicart-title">YOUR CART</div>

      <div className="minicart-items">

      </div>

      <div className="minicart-total">SUBTOTAL :</div>
    </animated.div>
  )
}
