import "./Home.css"

import React from 'react';
import { useState, useRef } from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated } from 'react-spring';
import ReactPlayer from "react-player";

import ParallaxNav from "./components/ParallaxNav"
import CabDesc from "./components/CabDesc"
import ChardDesc from "./components/ChardDesc"
import WelcomeButton from "./components/WelcomeButton"
import ParallaxUpDownButtons from "./components/ParallaxUpDownButtons"

import cabernet from "../../images/wine/cabernet.png"
import chardonnay from "../../images/wine/chardonnay.png"
import wtpLogoWhite from "../../images/logos/wtp-logo-white.png"



export default function Home() {

  let width = window.innerWidth;

  const [showCabTitle, setCabTitle] = useState(false)
  const [showChardTitle, setChardTitle] = useState(false)
  const [playVideo, setVideoPlay] = useState(false)
  const [showParaNav, setParaNav] = useState(false)
  const [pageFocus, setPageFocus] = useState('')

  const parallax = useRef(null)

  const handleUpClick = (offset, navFocus) => {
    parallax.current.scrollTo(offset)
    setPageFocus(navFocus)
  }

  const handlePage1Click = () => {
    parallax.current.scrollTo(1)
    setCabTitle(true)
    setParaNav(true)
    setPageFocus('cab')
  }

  const cabStyle = useSpring({
    delay: 500,
    opacity: showCabTitle ? 0.7 : 0,
    width: showCabTitle ? '100vw' : '0vw',
    height: showCabTitle ? '100vh' : '0vh',
    config: { duration: 650 }
  })

  const handlePage2Click = () => {
    parallax.current.scrollTo(1.95)
    setChardTitle(true)
    setPageFocus('chard')
  }

  const chardStyle = useSpring({
    delay: 500,
    opacity: showChardTitle ? 0.7 : 0,
    width: showChardTitle ? '100vw' : '0vw',
    height: showChardTitle ? '100vh' : '0vh',
    config: { duration: 650 }
  })

  const handlePage3Click = () => {
    parallax.current.scrollTo(3)
    setCabTitle(false)
    setChardTitle(false)
    setVideoPlay(true)
    setPageFocus('video')
  }

  const handlePage4Click = () => {
    parallax.current.scrollTo(0)
    setVideoPlay(false)
    setParaNav(false)
  }

  const videoStyle = useSpring({
    delay: 500,
    opacity: playVideo ? 0.2 : 0,
    height: playVideo ? '100vh' : '0vh',
    config: { duration: 650 }
  })

  return (
    <>

      <ParallaxNav
        toggle={showParaNav}
        focus={pageFocus}
      />

      <div className="parallax-container">

        <Parallax
          ref={parallax}
          pages={4}
          enabled={false}
        >

          {/* PAGE 1 */}
          <ParallaxLayer
            offset={0}
            speed={1}
          >
            {/* <WtpLogo /> */}
            <img
              src={wtpLogoWhite}
              alt="We The People Wine"
              className="wtp-logo"
            />

            <WelcomeButton
              buttonText="ENTER"
              width="20%"
              margin="6rem auto"
              padding="1rem"
              fontSize="3rem"
              onButtonClick={handlePage1Click}
            />
          </ParallaxLayer>

          {/* PAGE 2 */}
          <ParallaxLayer
            offset={1}
            speed={1}
          >

            <animated.div
              style={cabStyle}
              className="parallax-cab-style"
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.5}
            speed={2.5}
          >
            <CabDesc toggle={showCabTitle} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.1}
            speed={1}
            className="parallax-layer"
          >
            <img
              src={cabernet}
              alt="We The People Wine: Cabernet Sauvignon"
              className="wine-bottle"
            />

            <ParallaxUpDownButtons
              handleUpClick={handleUpClick}
              offset={0}
              navFocus={'chard'}
              handleDownClick={handlePage2Click}
            />
          </ParallaxLayer>

          {/* PAGE 3 */}
          <ParallaxLayer
            offset={2}
            speed={1}
          >
            <animated.div
              style={chardStyle}
              className="parallax-chard-style"
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.3}
            speed={2.5}
          >
            <ChardDesc toggle={showChardTitle} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={1}
          >
            <img
              src={chardonnay}
              alt="We The People Wine: Chardonnay"
              className="wine-bottle"
            />

            <ParallaxUpDownButtons
              handleUpClick={handleUpClick}
              offset={1}
              navFocus={'video'}
              handleDownClick={handlePage3Click}
            />
          </ParallaxLayer>

          {/* PAGE 4 */}
          <ParallaxLayer
            offset={3}
            speed={1}
          >
            <animated.div
              className="parallax-brand-style"
              style={videoStyle}
            >
              <img
                src={wtpLogoWhite}
                alt="We The People Wine"
                className="wtp-brand-stamp"
              />
            </animated.div>

          </ParallaxLayer>

          <ParallaxUpDownButtons
            handleUpClick={handleUpClick}
            offset={0}
            navFocus={''}
            handleDownClick={null}
            setVideoPlay={setVideoPlay}
          />

          <ParallaxLayer
            offset={3.2}
            speed={1}
          >

            <h1 className="parallax-heading">MEET THE BRAND</h1>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3.4}
            speed={1}

          >

            <ReactPlayer
              url="https://www.youtube.com/watch?v=LamRwl5Z2qk"
              playing={playVideo}
              controls={true}
              width={width < 768 ? 350 : 600}
              style={{ margin: 'auto' }}
            />
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  )
}
