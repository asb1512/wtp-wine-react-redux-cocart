import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function O(props) {

  const [length, setLength] = useState(null);

  const animatedStyle = useSpring({
    strokeDasharray: length,
    strokeDashoffset: props.toggle ? 0 : length,
    delay: 2200,
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
        d="M433.47,81.79c-10.37-.29-18.56-4.11-23.71-13.24a28.93,28.93,0,0,1-3.41-16.83A27,27,0,0,1,412.58,36a25,25,0,0,1,15.55-8.68c6.72-1.09,13.23-.37,19.24,3.06,7.24,4.12,11.32,10.5,12.7,18.59a29.25,29.25,0,0,1-2.82,19.15c-4.15,7.78-10.77,12.06-19.43,13.31C436.33,81.64,434.8,81.68,433.47,81.79Zm-22.18-27c.08.89.15,2.28.33,3.66a21,21,0,0,0,20.53,18.78c9.05.37,16.12-3.08,20.53-11.16a24.81,24.81,0,0,0,2.5-15.43c-1.49-11.45-9.59-18.87-21.07-19.29a21.18,21.18,0,0,0-14.63,4.59C413.67,40.66,411.41,47,411.29,54.79Z"
      />
    </>
  )
}
