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

  const cabImgStyle = useSpring({
    height: triggerCab ? '100%' : '145%',
    left: triggerCab ? '37vw' : '7vw',
    opacity: hideCab ? 0 : 1,
  })
  const chardImgStyle = useSpring({
    height: triggerChard ? '100%' : '145%',
    right: triggerChard ? '37vw' : '7vw',
    opacity: hideChard ? 0 : 1,
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