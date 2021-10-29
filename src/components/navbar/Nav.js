import React, { useState } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { useSpring, animated } from 'react-spring';
import { Squash as Hamburger } from 'hamburger-react';

import SocialIcons from "../SocialIcons";
import AuthFormContainer from "./AuthFormContainer";
import UserDisplay from "./UserDisplay";

import "./Nav.css"

import logo from '../../images/logos/wtp-logo-white.png';
import account from '../../images/nav-icons/user-icon-white.png';

const Nav = (props) => {

  const [isOpen, setOpen] = useState(false)
  const [isContactOpen, setContactOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

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

  const handleAuthOpen = () => {
    setAuthOpen(!authOpen)
    setOpen(false)
  }

  return (
    <>
      <header className="nav">
        <div className="nav-left">
          <Link to="/">
            <img
              src={logo}
              alt="We The People Wine"
              className="nav-wtp-logo"
            />
          </Link>
        </div>

        <div className="nav-right">
          <div className="nav-flex-right">
            {props.currentUser ? <UserDisplay currentUser={props.currentUser} /> : null}

            <img
              src={account}
              alt="Login or signup. View your account here."
              className="user-icon"
              onClick={() => handleAuthOpen()}
            />

            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              onClick={() => setOpen(!isOpen)}
            />
          </div>
        </div>

        <AuthFormContainer 
          toggle={authOpen} 
          handleAuthOpen={handleAuthOpen} 
        />
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

const mapStateToProps = state => {
  console.log("UserDisplay mapStateToProps", state)
  if (state.currentUser) {
    return { currentUser: state.currentUser }
  } else return {}
}

export default connect(mapStateToProps)(Nav);