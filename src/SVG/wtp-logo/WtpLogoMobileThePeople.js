import React, { useState, useEffect } from 'react';

import T from './T';
import H from './H';
import E2 from './E2';
import P1 from './P1';
import E3 from './E3';
import O from './O';
import P2 from './P2';
import L from './L';
import E4 from './E4';

export default function WtpLogoMobileThePeople() {

  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    setImmediate(() => { setToggle(true) })
  }, [])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 83"
      style={{ fill: 'none' }}
      className="wtp-logo-the-people-svg-mobile"
    >
      <T toggle={toggle} />
      <H toggle={toggle} />
      <E2 toggle={toggle} />

      <P1 toggle={toggle} />
      <E3 toggle={toggle} />
      <O toggle={toggle} />
      <P2 toggle={toggle} />
      <L toggle={toggle} />
      <E4 toggle={toggle} />
    </svg>
  )
}
