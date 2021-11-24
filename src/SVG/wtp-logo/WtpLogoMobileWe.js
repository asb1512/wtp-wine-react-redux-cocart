import React, { useState, useEffect } from 'react';

import W from './W';
import E1 from './E1';

export default function WtpLogoMobile() {

  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    setImmediate(() => { setToggle(true) })
  }, [])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 150 90"
      style={{ fill: 'none' }}
      className="wtp-logo-we-svg-mobile"
    >
      <W toggle={toggle} />
      <E1 toggle={toggle} />
    </svg>
  )
}
