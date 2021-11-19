import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function E2(props) {

  const [length, setLength] = useState(null);

  const animatedStyle = useSpring({
    strokeDasharray: length,
    strokeDashoffset: props.toggle ? 0 : length,
    delay: 1200,
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
        d="M253.63,51.22h1.7c7.4,0,14.79,0,22.19,0,1.15,0,1.59.3,1.47,1.47a28.32,28.32,0,0,0,0,2.94h-1.46c-7.48,0-15,0-22.43,0-1.16,0-1.59.21-1.57,1.49.08,5.82,0,11.65,0,17.47V76h28.22v4.46h-2.37c-9.84,0-19.67,0-29.51,0-1,0-1.29-.26-1.29-1.27q0-24.82,0-49.66c0-.78,0-1.36,1.1-1.35q15,0,30.1,0c.24,0,.47,0,.81.07v4.31H253.63Z"
      />
    </>
  )
}
