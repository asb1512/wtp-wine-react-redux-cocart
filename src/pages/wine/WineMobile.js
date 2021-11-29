import React, { useState } from 'react';
import './WineMobile.css';

import { useSpring, animated } from 'react-spring';
import { connect } from 'react-redux';
import { addSimpleItemToCart } from '../../actions/userCart';

import cab from '../../images/wine/cabernet.png';
import chard from '../../images/wine/chardonnay.png';



function WineMobile(props) {



  const [triggerCab, setTriggerCab] = useState(false);
  const [hideChard, setHideChard] = useState(false);
  const [triggerChard, setTriggerChard] = useState(false);
  const [hideCab, setHideCab] = useState(false);
  const [hideBottom, setHideBottom] = useState(false);
  const [wineQuantity, setWineQuantity] = useState(1);


  const cabImgStyle = useSpring({
    height: triggerCab ? '100%' : '130%',
    left: triggerCab ? '37vw' : '9vw',
    opacity: hideCab ? 0 : 1,
    config: { duration: 600 }
  })
  const chardImgStyle = useSpring({
    height: triggerChard ? '100%' : '130%',
    right: triggerChard ? '37vw' : '9vw',
    opacity: hideChard ? 0 : 1,
    config: { duration: 600 }
  })
  const bottomStyle = useSpring({
    opacity: hideBottom ? 0 : 1,
  })
  const cabBgStyle = useSpring({
    height: triggerCab ? '90vh' : '0vh',
  })
  const chardBgStyle = useSpring({
    height: triggerChard ? '100vh' : '0vh',
  })
  const cabTitleStyle = useSpring({
    left: triggerCab ? '24vw' : '-100vw',
  })
  const chardTitleStyle = useSpring({
    right: triggerChard ? '16vw' : '-100vw',
  })
  const cabSubheadingStyle = useSpring({
    bottom: triggerCab ? '0vh' : '-20vh',
  })
  const chardSubheadingStyle = useSpring({
    bottom: triggerChard ? '0vh' : '-20vh',
  })
  const cabPriceStyle = useSpring({
    delay: 350,
    top: triggerCab ? '2vh' : '-20vh',
  })
  const chardPriceStyle = useSpring({
    delay: 350,
    top: triggerChard ? '2vh' : '-20vh',
  })
  const quantityStyle = useSpring({
    delay: 500,
    top: triggerCab || triggerChard ? '8vh' : '-20vh',
  })
  const atcBtnStyle = useSpring({
    delay: 750,
    top: triggerCab || triggerChard ? '16vh' : '-20vh',
  })
  const backBtnStyle = useSpring({
    delay: 800,
    top: triggerCab || triggerChard ? '25vh' : '-20vh',
  })


  const handleCabClick = () => {
    setTriggerCab(true);
    setHideChard(true);
    setHideBottom(true);
  }
  const handleChardClick = () => {
    setTriggerChard(true);
    setHideCab(true);
    setHideBottom(true);
  }
  const handleMinusQuantity = () => {
    if (wineQuantity > 1) {
      let newValue = wineQuantity - 1;
      setWineQuantity(newValue);
    }
  }
  const handlePlusQuantity = () => {
    if (wineQuantity >= 1) {
      let newValue = wineQuantity + 1;
      setWineQuantity(newValue);
    }
  }
  const handleAddToCart = () => {
    if (triggerCab) {
      props.addSimpleItemToCart(13, wineQuantity, props.cartKey)
    } else if (triggerChard) {
      props.addSimpleItemToCart(14, wineQuantity, props.cartKey)
    }
  }
  const handleBackBtnClick = () => {
    setTriggerCab(false);
    setHideChard(false);
    setTriggerChard(false);
    setHideCab(false);
    setHideBottom(false);
  }

  

  return (
    <div className="wine-mobile-cntr">
      
      <div className="wine-mobile-bottle-cntr">
        <animated.img
          src={cab}
          alt="We The People Cabernet Sauvignon"
          className="wine-mobile-bottle-img"
          style={cabImgStyle}
        />

        <animated.img
          src={chard}
          alt="We The People Chardonnay"
          className="wine-mobile-bottle-img"
          style={chardImgStyle}
        />
      </div>


      <animated.div 
        className="wine-mobile-vertical-lines"
        style={bottomStyle}
      />


      <div className="wine-mobile-btn-cntr">
        <animated.button
          className="wine-mobile-btn-cab"
          style={bottomStyle}
          onClick={handleCabClick}
        >
          CABERNET
        </animated.button>

        <animated.button
          className="wine-mobile-btn-chard"
          style={bottomStyle}
          onClick={handleChardClick}
        >
          CHARDONNAY
        </animated.button>
      </div>


      {/* after-click state */}
      <div className="wine-mobile-title-cntr">

        <animated.div
          className="wine-mobile-title"
          style={cabTitleStyle}
        >
          CABERNET
        </animated.div>

        <animated.div
          className="wine-mobile-title"
          style={chardTitleStyle}
        >
          CHARDONNAY
        </animated.div>

        <animated.div
          className="wine-mobile-cab-subheading"
          style={cabSubheadingStyle}
        >
          BLUEBERRY | CHERRY | TANNIN | VELVET
        </animated.div>

        <animated.div
          className="wine-mobile-chard-subheading"
          style={chardSubheadingStyle}
        >
          STONE FRUIT | BAKED APPLES | FRESH ACIDITY
        </animated.div>
      </div>


      <div className="wine-mobile-details-cntr">
        <animated.div
          className="wine-mobile-cab-price"
          style={cabPriceStyle}
        >
          $29.99
        </animated.div>

        <animated.div
          className="wine-mobile-chard-price"
          style={chardPriceStyle}
        >
          $27.99
        </animated.div>

        <animated.div 
          className="wine-mobile-quantity-counter"
          style={quantityStyle}
        >
          <div
            className="wine-mobile-sign"
            onClick={() => handleMinusQuantity()}
          >
            –
          </div>
          <div className="wine-mobile-quantity-value">{wineQuantity}</div>
          <div
            className="wine-mobile-sign"
            onClick={() => handlePlusQuantity()}
          >
            +
          </div>
        </animated.div>

        <animated.button
          className="wine-mobile-atc-btn"
          style={atcBtnStyle}
          onClick={handleAddToCart}
        >
          ADD TO CART
        </animated.button>

        <animated.button
          className="wine-mobile-back-btn"
          style={backBtnStyle}
          onClick={handleBackBtnClick}
        >
          BACK
        </animated.button>
      </div>


      <animated.div
        className="wine-mobile-cab-bg"
        style={cabBgStyle}
      />

      <animated.div
        className="wine-mobile-chard-bg"
        style={chardBgStyle}
      />

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