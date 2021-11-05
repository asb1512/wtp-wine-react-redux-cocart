import React, { useState } from 'react';
import './Wine.css';
import { useSpring, animated } from 'react-spring';

import cab from '../../images/wine/cabernet.png';
import chard from '../../images/wine/chardonnay.png';



export default function Wine(props) {



  const [showCabBg, setCabBg] = useState(false);
  const cabBgStyle = useSpring({
    opacity: showCabBg ? 1 : 0,
  })
  const [showCabTitle, setCabTitle] = useState(false);
  const cabTitleStyle = useSpring({
    transform: showCabTitle ? 'translate(0px,0px)' : 'translate(700px,0px)'
  })
  const handleCabMouseEnter = () => {
    setCabBg(true)
    setCabTitle(true)
  }
  const handleCabMouseLeave = () => {
    setCabBg(false)
    setCabTitle(false)
  }



  const [showChardBg, setChardBg] = useState(false);
  const chardBgStyle = useSpring({
    opacity: showChardBg ? 1 : 0,
  })
  const [showChardTitle, setChardTitle] = useState(false);
  const chardTitleStyle = useSpring({
    transform: showChardTitle ? 'translate(0px,0px)' : 'translate(-700px,0px)',
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

    <div className="wine-container">

      <div className="wine-options">
        <img
          src={cab}
          alt="We The People 2018 Cabernet Sauvignon"
          className="wtp-cab"
          onMouseEnter={() => handleCabMouseEnter()}
          onMouseLeave={() => handleCabMouseLeave()}
        />
        <div className="cab-title-container">
          <animated.div 
            className="cab-title"
            style={cabTitleStyle}
          >
            2018 CALIFORNIA CABERNET SAUVIGNON
          </animated.div>
        </div>

        <img
          src={chard}
          alt="We The People 2019 Chardonnay"
          className="wtp-chard"
          onMouseEnter={() => handleChardMouseEnter()}
          onMouseLeave={() => handleChardMouseLeave()}
        />
        <div className="chard-title-container">
          <animated.div 
            className="chard-title"
            style={chardTitleStyle}
          >2019 CALIFORNIA CHARDONNAY</animated.div>
        </div>

      </div>

      <animated.div className="cab-bg" style={cabBgStyle} />
      <animated.div className="chard-bg" style={chardBgStyle} />
      
    </div>
  )
}
