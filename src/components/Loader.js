import React from 'react';
import './Loader.css';
import { BounceLoader } from 'react-spinners';

export default function Loader(props) {

  return (
    <div className="loader-container">
      <BounceLoader
        loading={true}
        size={150}
        color="#fff"
        css={{
          justifySelf: 'center',
          alignSelf: 'end',
          marginBottom: '2rem',
          zIndex: '2000',
        }}
      />

      <div className="loading-msg">
        {props.message ? props.message : "Loading..."}
      </div>
    </div>
  )
}
