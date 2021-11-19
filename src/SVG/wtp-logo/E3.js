import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function E3(props) {

  const [length, setLength] = useState(null);

  const animatedStyle = useSpring({
    strokeDasharray: length,
    strokeDashoffset: props.toggle ? 0 : length,
    delay: 2100,
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
        d="M395,28.23v4.33H368V51.21h1.55l21.95,0c2.19,0,1.81,0,1.84,1.89,0,.79,0,1.58,0,2.51H368V76h28.21c0,1.33,0,2.56-.05,3.78,0,.24-.64.61-1,.62-2.48.07-5,.06-7.44.06-7.83,0-15.67,0-23.5,0-1.07,0-1.45-.25-1.45-1.39q.06-24.76,0-49.54c0-.92.16-1.36,1.23-1.36,10,0,20,0,30,0C394.32,28.16,394.64,28.2,395,28.23Z"
      />
    </>
  )
}
