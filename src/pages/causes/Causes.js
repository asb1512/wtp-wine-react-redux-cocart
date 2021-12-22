import React from 'react';
import './Causes.css';

import wwfLogo from '../../images/causes/wwf-logo.png';



export default function Causes() {


  return (

    <div className='causes-bg'>
      
      <div className='causes-cntr'>
        <h1 className='causes-title'>CAUSES</h1>

        <div className='causes-content'>
          <a href="https://workingwarriors.org/">
            <img
              src={wwfLogo}
              alt="Working Warrior Foundation"
              class="causes-wwf"
            />
          </a>
        </div>
        
      </div>

    </div>
  )
}
