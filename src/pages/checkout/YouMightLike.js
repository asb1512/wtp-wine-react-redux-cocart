import React from 'react';
import './YouMightLike.css';

export default function YouMightLike() {
  return (
    <div className="uml-container">
      <div className="uml-heading">YOU MIGHT LIKE...</div>
      <div className="uml-body">
        <img
          src={'https://cdn.shopify.com/s/files/1/0419/7167/9392/files/wtp_logo_rect_150_white_300x.png?v=1595007010'}
          alt="We The People Store"
          className="wtps-logo"
        />

        <img
          src="https://cdn.shopify.com/s/files/1/0419/7167/9392/products/228745cd96b7785625dd93a795086b5d.jpg?v=1633639774"
          alt="'Let's Go Brandon' Men's Long Sleeve Tee – We The People Store"
          className="wtps-lgb-img"
        />
        <div 
          className="wtps-lgb-title"
        >
          "LET'S GO BRANDON" <br />
          <span className="wtps-subtitle">men's long sleeve tee</span>
        </div>

        <img
          src="https://cdn.shopify.com/s/files/1/0419/7167/9392/products/2163ab10611de0617b16fed4eac57f93_600x.jpg?v=1622054823"
          alt="'Let's Go Brandon' Men's Long Sleeve Tee – We The People Store"
          className="wtps-co-img"
        />
        <div 
          className="wtps-co-title"
        >
          "FREE, UNFILTERED & RAW" <br />
          <span className="wtps-subtitle">women's t-shirt</span>
        </div>

        <img
          src="https://cdn.shopify.com/s/files/1/0419/7167/9392/products/8c1c887b016c173d9a487916388d6e02.jpg?v=1614787984"
          alt="'Let's Go Brandon' Men's Long Sleeve Tee – We The People Store"
          className="wtps-bj-img"
        />
        <div 
          className="wtps-bj-title"
        >
          "THE LEFT CAN'T MEME" <br />
        <span className="wtps-subtitle">men's t-shirt</span>
        </div>
      </div>
    </div>
  )
}
