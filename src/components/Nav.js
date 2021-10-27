import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";
import "./Nav.css"
import { useSpring, animated } from 'react-spring';
import { Squash as Hamburger } from 'hamburger-react';
import logo from '../images/logos/wtp-logo-white.png';

const Nav = () => {

  const [isOpen, setOpen] = useState(false)
  const [isContactOpen, setContactOpen] = useState(false);

  const sideNavStyle = useSpring({
    right: isOpen ? '0%' : '-30%'
  })

  const emailStyle = useSpring({
    opacity: isContactOpen ? 1 : 0,
    config: { duration: 300 }
  })

  const phoneStyle = useSpring({
    opacity: isContactOpen ? 1 : 0,
    delay: 300,
    config: { duration: 300 }
  })

  return (
    <>
      <header className="nav">
        <Link to="/">
          <div className="nav-left">
            <img
              src={logo}
              alt="We The People Wine"
              className="nav-wtp-logo"
            />
          </div>
        </Link>

        <div className="nav-right">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            style={{
              color: '#ffffff',
            }}
            onClick={() => setOpen(!isOpen)}
          />
        </div>
      </header>

      <animated.div
        className="side-nav"
        style={sideNavStyle}
      >
        <div className="side-nav-content">
          <Link to="/" className="side-nav-link">
            <div
              className="side-nav-item"
              onClick={() => { setOpen(!isOpen) }}
            >HOME
            </div>
          </Link>

          <Link to="/wine-club" className="side-nav-link">
            <div
              className="side-nav-item"
              onClick={() => { setOpen(!isOpen) }}
            >WINE CLUB
            </div>
          </Link>

          <Link to="/gift-cards" className="side-nav-link">
            <div
              className="side-nav-item"
              onClick={() => { setOpen(!isOpen) }}
            >GIFT CARDS
            </div>
          </Link>

          <Link to="/about" className="side-nav-link">
            <div
              className="side-nav-item"
              onClick={() => { setOpen(!isOpen) }}
            >ABOUT
            </div>
          </Link>

          <Link to="/causes" className="side-nav-link">
            <div
              className="side-nav-item"
              onClick={() => { setOpen(!isOpen) }}
            >CAUSES
            </div>
          </Link>

          <div
            className="side-nav-item"
            onClick={() => setContactOpen(!isContactOpen)}
          >CONTACT
          </div>
          <div className="">
            <animated.div
              className="contact-item"
              style={emailStyle}
            >
              <a href="mailto:contact@wethepeople.wine" className="side-nav-link">
                EMAIL
              </a>
            </animated.div>
            <animated.div
              className="contact-item"
              style={phoneStyle}
            >
              <a href="tel:202-455-0315" className="side-nav-link">
                PHONE
              </a>
            </animated.div>
          </div>
          <SocialIcons />
        </div>
      </animated.div>
    </>
  )
}

export default Nav