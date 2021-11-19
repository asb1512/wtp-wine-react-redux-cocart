import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function L(props) {

  const [length, setLength] = useState(null);

  const animatedStyle = useSpring({
    strokeDasharray: length,
    strokeDashoffset: props.toggle ? 0 : length,
    delay: 2400,
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
        className="cls-1"
        d="M524.65,76h24.41c0,1.32.06,2.55,0,3.76,0,.25-.62.64-1,.65-2.35.06-4.71,0-7.07,0H519.75c0-.48-.08-.9-.08-1.32q0-24.76-.07-49.53c0-1.15.31-1.56,1.47-1.46s2.3,0,3.58,0Z"
      />
    </>
  )
}
