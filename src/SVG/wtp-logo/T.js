import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function T(props) {

  const [length, setLength] = useState(null);

  const animatedStyle = useSpring({
    strokeDasharray: length,
    strokeDashoffset: props.toggle ? 0 : length,
    delay: 900,
    config: { duration: 1000 }
  })

  return (
    <>
      <animated.path
        style={animatedStyle}
        ref={(ref) => {
          if (ref) {
            setLength(ref.getTotalLength());
          }
        }}
        stroke="#ffffff"
        strokeWidth="1"
        d="M158.39,32.6H140.58c0-1.32-.06-2.55.06-3.76,0-.25.71-.63,1.1-.63,3.31-.06,6.63-.06,9.95-.06H180c.39,0,.78,0,1.25.06v4.34H163.51V78.8c0,1.65,0,1.66-1.59,1.65-1.11,0-2.69.34-3.21-.23s-.31-2.16-.31-3.3q0-21.3,0-42.6Z"
      />
    </>
  )
}
