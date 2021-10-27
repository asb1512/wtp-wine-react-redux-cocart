import React from 'react'
import { useSpring, animated } from 'react-spring'

import './ParallaxNav.css'

export default function ParallaxNav(props, ref) {

  const animatedStyle = useSpring({
    opacity: props.toggle ? 1 : 0,
    delay: 1000
  })

  const focusStyle = "-focused"

  return (
    <animated.div
      className="parallax-nav"
      style={animatedStyle}
    >
      <div
        className={`parallax-nav-item${props.focus === 'cab' ? focusStyle : ''}`}
      >
        – CABERNET SAUVIGNON
      </div>

      <div
        className={`parallax-nav-item${props.focus === 'chard' ? focusStyle : ''}`}
      >
        – CHARDONNAY
      </div>
      <div
        className={`parallax-nav-item${props.focus === 'video' ? focusStyle : ''}`}
      >
        – MEET THE BRAND
      </div>
    </animated.div>
  )
}