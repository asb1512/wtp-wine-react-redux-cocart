import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function H(props) {

  const [length, setLength] = useState(null);

  const animatedStyle = useSpring({
    strokeDasharray: length,
    strokeDashoffset: props.toggle ? 0 : length,
    delay: 1000,
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
        d="M231.39,28.16V80.43c-1.48,0-2.91,0-4.33-.05-.24,0-.61-.65-.62-1-.07-1.68,0-3.35,0-5,0-5.78,0-11.57,0-17.35,0-1.08-.31-1.41-1.42-1.41q-13.2.07-26.39,0c-1.09,0-1.43.29-1.42,1.4,0,7.26,0,14.52,0,21.78v1.59H192.3c0-.42-.07-.84-.07-1.26q0-24.78,0-49.54c0-1.09.29-1.5,1.41-1.41s2.29,0,3.62,0V51.12c.54,0,.89.06,1.25.06,8.83,0,17.67,0,26.5,0,1.17,0,1.47-.34,1.46-1.48-.05-6.7,0-13.4-.05-20.1,0-1.22.32-1.64,1.55-1.51S230.15,28.16,231.39,28.16Z"
      />
    </>
  )
}
