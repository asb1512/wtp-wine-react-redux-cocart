import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function ChardDesc(props) {

  const animatedStyle = useSpring({
    // opacity: props.toggle ? 1 : 0,
    delay: 1000,
    config: { duration: 1000 }
  })

  return (
    <div className="wine-desc">
      <animated.h1
        style={animatedStyle}
      >
        CHARDONNAY
      </animated.h1>
      <div>
        Our <span className="wine-desc-span-chard">2019 California Chardonnay</span> appears with gilded straw color and invites with aromas of white flowers. Stone fruit and baked apples drive the flavor profile while a medium body balances fresh acidity in its clean finish.
      </div>
      <button>
        PURCHASE
      </button>
    </div>
  )
}