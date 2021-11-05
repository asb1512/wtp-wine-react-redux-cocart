import React, { useState } from 'react';
import './Wine.css';
import { useSpring, animated } from 'react-spring';

import cab from '../../images/wine/cabernet.png';
import chard from '../../images/wine/chardonnay.png';



export default function Wine(props) {



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
            <div className="cab-desc">
              $29.99
            </div>
            <button className="addtocart-btn">ADD TO CART</button>
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
