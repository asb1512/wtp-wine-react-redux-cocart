import React, { useState } from 'react';
import './Wine.css';
import { useSpring, animated } from 'react-spring';
import { connect } from 'react-redux';
import { addSimpleItemToCart } from '../../actions/userCart';

import cab from '../../images/wine/cabernet.png';
import chard from '../../images/wine/chardonnay.png';



function Wine(props) {



  const [showCabBg, setCabBg] = useState(false);
  const cabBgStyle = useSpring({
    opacity: showCabBg ? 1 : 0,
    config: { duration: 300 }
  })
  const [showCabTitle, setCabTitle] = useState(false);
  const cabTitleStyle = useSpring({
    transform: showCabTitle ? 'translate(0px,0px)' : 'translate(900px,0px)'
  })
  const [showCabDesc, setCabDesc] = useState(false)
  const cabDescStyle = useSpring({
    transform: showCabDesc ? 'translate(0px,0px)' : 'translate(-900px,0px)'
  })
  const [hideChard, setHideChard] = useState(false)
  const cabClickStyle = useSpring({
    opacity: hideChard ? 0 : 1
  })
  const handleCabMouseEnter = () => {
    setCabBg(true)
    setCabTitle(true)
  }
  const handleCabMouseLeave = () => {
    setCabBg(false)
    setCabTitle(false)
  }
  const handleCabClick = () => {
    setCabDesc(true)
    setHideChard(true)
    setCabTitle(true)
    setCabBg(true)
  }


  const [cabQuantity, setCabQuantity] = useState(1);
  const handleAddCabToCart = () => {
    const productId = 13;
    props.addSimpleItemToCart(productId, cabQuantity, props.cartKey)
  }
  const handlePlusCabQuantity = () => {
    if (cabQuantity >= 1) {
      let newValue = cabQuantity + 1;
      setCabQuantity(newValue);
    }
  }
  const handleMinusCabQuantity = () => {
    if (cabQuantity > 1) {
      let newValue = cabQuantity - 1;
      setCabQuantity(newValue);
    }
  }



  const [showChardBg, setChardBg] = useState(false);
  const chardBgStyle = useSpring({
    opacity: showChardBg ? 1 : 0,
    config: { duration: 300 }
  })
  const [showChardTitle, setChardTitle] = useState(false);
  const chardTitleStyle = useSpring({
    transform: showChardTitle ? 'translate(0px,0px)' : 'translate(-900px,0px)',
  })
  const handleChardMouseEnter = () => {
    setChardBg(true)
    setChardTitle(true)
  }
  const handleChardMouseLeave = () => {
    setChardBg(false)
    setChardTitle(false)
  }



  return (

    <div className="wine-cntr">

      <div className="wine-options">


        <img
          src={cab}
          alt="We The People 2018 Cabernet Sauvignon"
          className="wtp-cab"
          onMouseEnter={() => handleCabMouseEnter()}
          onMouseLeave={() => handleCabMouseLeave()}
          onClick={() => handleCabClick()}
        />
        <div className="cab-title-cntr">
          <animated.div
            className="cab-title"
            style={cabTitleStyle}
          >
            2018 CALIFORNIA CABERNET SAUVIGNON
            <div className="wine-subheading">BLUEBERRY | CHERRY | TANNIN | VELVET</div>
          </animated.div>
        </div>
        <div className="cab-desc-anchor">
          <animated.div className="cab-desc-cntr" style={cabDescStyle}>
            <div className="cab-price">
              $29.99
            </div>
            <div className="quantity-counter">
              <div 
                className="minus-sign"
                onClick={() => handleMinusCabQuantity()}
              >
                –
              </div>
              <div className="quantity-value">{cabQuantity}</div>
              <div 
                className="plus-sign"
                onClick={() => handlePlusCabQuantity()}
              >
                +
              </div>
            </div>
            <button 
              className="addtocart-btn"
              onClick={() => handleAddCabToCart()}
            >
              ADD TO CART
            </button>
          </animated.div>
        </div>


        <animated.img
          src={chard}
          alt="We The People 2019 Chardonnay"
          className="wtp-chard"
          style={cabClickStyle}
          onMouseEnter={() => handleChardMouseEnter()}
          onMouseLeave={() => handleChardMouseLeave()}
        />
        <div className="chard-title-cntr">
          <animated.div
            className="chard-title"
            style={chardTitleStyle}
          >
            2019 CALIFORNIA CHARDONNAY
            <div className="wine-subheading">STONE FRUIT | BAKED APPLES | FRESH ACIDITY</div>
          </animated.div>
        </div>


      </div>

      <animated.div className="cab-bg" style={cabBgStyle} />
      <animated.div className="chard-bg" style={chardBgStyle} />

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

export default connect(mapStateToProps, mapDispatchToProps)(Wine);