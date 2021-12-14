import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function E4(props) {

  const [length, setLength] = useState(null);

  const animatedStyle = useSpring({
    strokeDasharray: length,
    strokeDashoffset: props.toggle ? 0 : length,
    delay: 1100,
    config: { duration: 750 }
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
        stroke="#F3F3F7"
        strokeWidth="1"
        d="M591.62,28.13v4.45h-27v18.5c.47,0,.92.07,1.38.07,7.52,0,15,0,22.55,0,1.09,0,1.53.27,1.43,1.4-.09,1,0,2,0,3.12h-1.53c-7.52,0-15,0-22.56,0-1,0-1.38.23-1.37,1.32.05,5.94,0,11.88,0,17.83,0,.35,0,.7.07,1.17h28.22c0,1.39,0,2.65,0,3.9,0,.21-.44.52-.7.56a13.64,13.64,0,0,1-1.92,0H560.83c-.39,0-.78,0-1.32-.06V79.05q0-24.64,0-49.3c0-1.59,0-1.59,1.53-1.59l29,0Z"
      />
    </>
  )
}
