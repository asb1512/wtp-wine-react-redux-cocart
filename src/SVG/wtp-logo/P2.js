import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function P2(props) {

  const [length, setLength] = useState(null);

  const animatedStyle = useSpring({
    strokeDasharray: length,
    strokeDashoffset: props.toggle ? 0 : length,
    delay: 2300,
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
        d="M479.3,55.64v24.8c-1.56,0-3.06,0-4.55,0-.18,0-.45-.67-.46-1q-.09-4.78-.09-9.57,0-20,0-39.95c0-1.66,0-1.67,1.63-1.67,4.84,0,9.67-.06,14.51,0A21.5,21.5,0,0,1,498.71,30c5.65,2.52,8.05,7.33,7.6,13.34-.52,7-5.5,11.21-12.05,12-4.34.5-8.77.27-13.16.37Zm.05-4.48c3.87,0,7.62,0,11.38,0a15.68,15.68,0,0,0,3-.31c3.53-.73,6.24-2.52,7.22-6.16,1.49-5.53-1.58-10.42-7.21-11.58a25.38,25.38,0,0,0-4.51-.47c-3.27-.07-6.53,0-9.85,0Z"
      />
    </>
  )
}
