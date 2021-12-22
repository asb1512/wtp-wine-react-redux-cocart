import { useState, useRef } from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './Wine.css';
import { useSpring, animated } from 'react-spring';
import { connect } from 'react-redux';
import { addSimpleItemToCart } from '../../actions/userCart';

import cab from '../../images/wine/cabernet.png';
import chard from '../../images/wine/chardonnay.png';



function Wine(props) {

  const parallax = useRef(null);

  const [showCabBg, setCabBg] = useState(false);
  const cabBgStyle = useSpring({
    opacity: showCabBg ? 1 : 0,
    config: { duration: 300 }
  })

  const [showCabTitle, setCabTitle] = useState(false);
  const cabTitleStyle = useSpring({
    transform: showCabTitle ? 'translate(0px,0px)' : 'translate(900px,0px)'
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
    parallax.current.scrollTo(1)
  }


  const [cabQuantity, setCabQuantity] = useState(1);
  const handleAddCabToCart = () => {
    props.addSimpleItemToCart(14, cabQuantity, props.cartKey)
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
  const handleChardClick = () => {
    parallax.current.scrollTo(2)
  }

  const [chardQuantity, setChardQuantity] = useState(1);
  const handleAddChardToCart = () => {
    props.addSimpleItemToCart(14, cabQuantity, props.cartKey)
  }
  const handlePlusChardQuantity = () => {
    if (chardQuantity >= 1) {
      let newValue = chardQuantity + 1;
      setChardQuantity(newValue);
    }
  }
  const handleMinusChardQuantity = () => {
    if (chardQuantity > 1) {
      let newValue = chardQuantity - 1;
      setChardQuantity(newValue);
    }
  }


  const returnToFirstPage = () => {
    parallax.current.scrollTo(0)
  }



  return (
    <div className="wine-cntr">

      <Parallax
        ref={parallax}
        pages={3}
        enabled={false}
      >
        {/* 1st page */}
        <ParallaxLayer 
          offset={0}
          speed={1}
          className="wine-options"
        >

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


          <img
            src={chard}
            alt="We The People 2019 Chardonnay"
            className="wtp-chard"
            onMouseEnter={() => handleChardMouseEnter()}
            onMouseLeave={() => handleChardMouseLeave()}
            onClick={() => handleChardClick()}
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

          <animated.div className="cab-bg" style={cabBgStyle} />
          <animated.div className="chard-bg" style={chardBgStyle} />

        </ParallaxLayer>

        {/* 2nd page */}
        <ParallaxLayer
          offset={1}
          speed={1}
          className="cab-show-cntr"
        >
          <div className="cab-up-arrow">
            <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 166.854 166.854"
              stroke='#fff'
              style={{ transform: 'rotate(180deg)' }}
              onClick={() => returnToFirstPage()}
            >
              <g>
                <g>
                  <circle
                    className="circle"
                    fill="none"
                    cx="83.427"
                    cy="83.427"
                    r="81.427"
                    strokeWidth="4"
                  />
                  <path
                    fill="#fff"
                    d="M83.427,107.223l47.34-42.46a2.687,2.687,0,0,1,1.761-.518c2.348,0,4.108,2.331,4.108,5.438a5.565,5.565,0,0,1-1.956,4.4L86.557,117.06a3.931,3.931,0,0,1-6.26,0L32.175,74.084a5.563,5.563,0,0,1-1.957-4.4c0-3.107,1.761-5.438,4.109-5.438a2.684,2.684,0,0,1,1.76.518Z"
                  />
                </g>
              </g>
            </svg>
          </div>

          <img
            src={cab}
            alt="We The People 2018 Cabernet Sauvignon"
            className="wtp-cab-show"
          />

          <div className="cab-title-show-cntr">
            <div
              className="cab-title"
              style={cabTitleStyle}
            >
              2018 CALIFORNIA CABERNET SAUVIGNON
              <div className="wine-subheading">BLUEBERRY | CHERRY | TANNIN | VELVET</div>
            </div>
          </div>

          <div className="cab-desc-anchor">
            <div className="cab-desc-cntr">
              <div className="cab-price">
                $29.99
              </div>
              <div className="cab-quantity-counter">
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
                className="cab-addtocart-btn"
                onClick={() => handleAddCabToCart()}
              >
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="cab-bg" style={cabBgStyle} />
        </ParallaxLayer>

        {/* 3rd page */}
        <ParallaxLayer
          offset={2}
          speed={1}
          className="chard-show-cntr"
        >
          <div className="chard-up-arrow">
            <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 166.854 166.854"
              stroke='#fff'
              style={{ transform: 'rotate(180deg)' }}
              onClick={() => returnToFirstPage()}
            >
              <g>
                <g>
                  <circle
                    className="circle"
                    fill="none"
                    cx="83.427"
                    cy="83.427"
                    r="81.427"
                    strokeWidth="4"
                  />
                  <path
                    fill="#fff"
                    d="M83.427,107.223l47.34-42.46a2.687,2.687,0,0,1,1.761-.518c2.348,0,4.108,2.331,4.108,5.438a5.565,5.565,0,0,1-1.956,4.4L86.557,117.06a3.931,3.931,0,0,1-6.26,0L32.175,74.084a5.563,5.563,0,0,1-1.957-4.4c0-3.107,1.761-5.438,4.109-5.438a2.684,2.684,0,0,1,1.76.518Z"
                  />
                </g>
              </g>
            </svg>
          </div>

          <img
            src={chard}
            alt="We The People 2019 Chardonnay"
            className="wtp-chard-show"
          />

          <div className="chard-title-show-cntr">
            <div
              className="chard-title"
              style={chardTitleStyle}
            >
              2019 CALIFORNIA CHARDONNAY
              <div className="wine-subheading">STONE FRUIT | BAKED APPLES | FRESH ACIDITY</div>
            </div>
          </div>

          <div className="chard-desc-anchor">
            <div className="chard-desc-cntr">
              <div className="chard-price">
                $29.99
              </div>
              <div className="chard-quantity-counter">
                <div
                  className="minus-sign"
                  onClick={() => handleMinusChardQuantity()}
                >
                  –
                </div>
                <div className="quantity-value">{cabQuantity}</div>
                <div
                  className="plus-sign"
                  onClick={() => handlePlusChardQuantity()}
                >
                  +
                </div>
              </div>
              <button
                className="chard-addtocart-btn"
                onClick={() => handleAddChardToCart()}
              >
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="chard-bg" style={chardBgStyle} />
        </ParallaxLayer>

      </Parallax>
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