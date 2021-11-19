import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function E1(props) {

  const [length, setLength] = useState(null);

  const animatedStyle = useSpring({
    strokeDasharray: length,
    strokeDashoffset: props.toggle ? 0 : length,
    delay: 1100,
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
        className="cls-1" d="M115.54,70.14l-13.48,15-.29-.23,3.67-4.9c-.18-.23-.22-.33-.27-.34-4.55-.43-7.75-3.13-10.67-6.29A26.53,26.53,0,0,1,88.24,60.5a40,40,0,0,1-.14-17.43c1.49-6.47,5.51-11.33,10.56-15.39a2.91,2.91,0,0,1,2.45-.32,7.5,7.5,0,0,1,3.06,1.93,11.74,11.74,0,0,1,2.73,10A21.59,21.59,0,0,1,99,53.08c-1.5,1.26-3,2.52-4.6,3.64a1.68,1.68,0,0,0-.74,2.33,38.39,38.39,0,0,0,3,6.08,28.32,28.32,0,0,0,10.82,9.42,2.24,2.24,0,0,0,3-.47c1.3-1.3,2.71-2.48,4.09-3.7a8.19,8.19,0,0,1,.74-.53ZM92.77,56.93a5.4,5.4,0,0,0,.68-.48c2.55-2.52,5.15-5,7.62-7.58a6.89,6.89,0,0,0,1.84-5,32.78,32.78,0,0,0-.72-6,10.39,10.39,0,0,0-4.32-6.39c-.34-.23-1.1-.36-1.34-.15a13.4,13.4,0,0,0-4.47,5.92,27.3,27.3,0,0,0-.58,13.46C91.84,52.7,92.32,54.74,92.77,56.93Z" />
    </>
  )
}