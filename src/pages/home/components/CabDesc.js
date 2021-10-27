import React from 'react'
import { useSpring, animated } from 'react-spring'

import "./WineDesc.css"

export default function CabDesc(props) {

  const animatedStyle = useSpring({
    opacity: props.toggle ? 1 : 0,
    delay: 1000,
    config: { duration: 1000 }
  })

  return (
    <div className="wine-desc">
      <animated.h1
        style={animatedStyle}
      >
        CABERNET SAUVIGNON
      </animated.h1>
      <div>
        Our <span className="wine-desc-span-cab">2018 California Cabernet Sauvignon</span> boasts a deep ruby and purple hue with flavors of blueberry and cherry. Soft tannins round the full-bodied mouthfeel with a velvet finish.
      </div>
    </div>
  )
}