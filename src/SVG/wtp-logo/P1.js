import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function P1(props) {

  const [length, setLength] = useState(null);

  const animatedStyle = useSpring({
    strokeDasharray: length,
    strokeDashoffset: props.toggle ? 0 : length,
    delay: 2000,
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
        d="M317.48,54.27c0-8.22,0-16.43,0-24.65,0-1.1.29-1.46,1.4-1.44,5.52.1,11,0,16.54.25,4.37.21,8.43,1.55,11.36,5.08a13.32,13.32,0,0,1-7,21.29,28.22,28.22,0,0,1-6.15.77c-3.27.13-6.56.07-9.83,0-1,0-1.22.3-1.21,1.23,0,7.37,0,14.75,0,22.13,0,1.25-.36,1.64-1.56,1.5a11.48,11.48,0,0,0-2.27,0c-1,.1-1.29-.3-1.29-1.29,0-7.18,0-14.36,0-21.53Zm5.14-3c2.26,0,4.45,0,6.64,0a60.75,60.75,0,0,0,7.76-.4c3.5-.55,6.19-2.44,7.17-6s.33-6.81-2.51-9.4a9.4,9.4,0,0,0-6-2.52c-4.26-.2-8.53-.18-12.81-.24-.1,0-.2.1-.29.15Z"
      />
    </>
  )
}
