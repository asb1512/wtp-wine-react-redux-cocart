import React from 'react'
import "./SocialIcons.css"

import facebook from "../images/social-icons/fb-icon-white.png"
import twitter from "../images/social-icons/twitter-icon-white.png"
import instagram from "../images/social-icons/insta-icon-white.png"

export default function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="https://www.facebook.com/WeThePeopleWine/">
        <img
          src={facebook}
          alt="We The People Wine: Facebook"
          className="social-icon"
        />
      </a>

      <a href="https://twitter.com/WeThePeopleWine">
        <img
          src={twitter}
          alt="We The People Wine: Twitter"
          className="social-icon"
        />
      </a>

      <a href="https://www.instagram.com/wethepeoplewine/">
        <img
          src={instagram}
          alt="We The People Wine: Instagram"
          className="social-icon"
        />
      </a>
    </div>
  )
}
