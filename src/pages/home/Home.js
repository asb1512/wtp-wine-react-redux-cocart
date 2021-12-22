import "./Home.css";

import React from 'react';
import { useState, useRef } from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated } from 'react-spring';
import ReactPlayer from "react-player";

// import ParallaxNav from "./components/ParallaxNav";
import CabDesc from "./components/CabDesc";
import ChardDesc from "./components/ChardDesc";
import BackToTopButton from "./components/BackToTopButton";
import ParallaxUpDownButtons from "./components/ParallaxUpDownButtons";
import WtpLogo from "../../SVG/wtp-logo/WtpLogo";
import WtpLogoMobileWe from "../../SVG/wtp-logo/WtpLogoMobileWe";
import WtpLogoMobileThePeople from "../../SVG/wtp-logo/WtpLogoMobileThePeople";

import cabernet from "../../images/wine/cabernet.png";
import chardonnay from "../../images/wine/chardonnay.png";
import wtpLogoWhite from "../../images/logos/wtp-logo-white.png";



export default function Home(props) {

  const [showCabTitle, setCabTitle] = useState(false);
  const [showChardTitle, setChardTitle] = useState(false);
  const [playVideo, setVideoPlay] = useState(false);
  const [showParaNav, setParaNav] = useState(false);
  const [pageFocus, setPageFocus] = useState('');

  const parallax = useRef(null);

  const handleUpClick = (offset, navFocus) => {
    parallax.current.scrollTo(offset);
    setPageFocus(navFocus);
  };

  const handleBttBtnClick = () => {
    if (parallax.current != null) {
      console.log("You made it!")
      parallax.current.scrollTo(0);
      setVideoPlay(false);
    }
  }

  const handlePage1Click = () => {
    parallax.current.scrollTo(1);
  };

  const cabStyle = useSpring({
    delay: 500,
    // opacity: showCabTitle ? 0.7 : 0,
    // width: showCabTitle ? '100vw' : '0vw',
    // height: showCabTitle ? '100vh' : '0vh',
    config: { duration: 650 }
  });

  const handlePage2Click = () => {
    parallax.current.scrollTo(1.95);
    setChardTitle(true);
    setPageFocus('chard');
  };

  const chardStyle = useSpring({
    delay: 500,
    // opacity: showChardTitle ? 0.7 : 0,
    // width: showChardTitle ? '100vw' : '0vw',
    // height: showChardTitle ? '100vh' : '0vh',
    config: { duration: 650 }
  });

  const handlePage3Click = () => {
    parallax.current.scrollTo(3);
    setCabTitle(false);
    setChardTitle(false);
    setVideoPlay(true);
    setPageFocus('video');
  }

  const videoStyle = useSpring({
    delay: 500,
    opacity: playVideo ? 0.2 : 0,
    height: playVideo ? '100vh' : '0vh',
    config: { duration: 650 }
  });

  const renderWtpLogo = () => {
    if (props.width > 768) {
      return <WtpLogo />
    } else {
      return (
        <>
          <WtpLogoMobileWe />
          <WtpLogoMobileThePeople />
        </>
      )
    }
  }

  return (
    <>

      {/* <ParallaxNav
        toggle={showParaNav}
        focus={pageFocus}
      /> */}

      <div className="parallax-container">

        <Parallax
          ref={parallax}
          pages={4}
          enabled={true}
          // style={{ top: '0', left: '0' }}
        >


          {/* PAGE 1 */}
          <ParallaxLayer
            offset={0}
            speed={1}
            style={{zIndex: '500'}}
          >

            {renderWtpLogo()}

            <button
              className="welcome-button"
              onClick={() => handlePage1Click()}
            >
              DISCOVER
            </button>
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
            offset={props.width > 768 ? 1.4 : 1.62}
            speed={2.2}
            style={{
              height: props.width > 768 ? '60vh' : '38vh',
              zIndex: '1000'
            }}
          >
            <CabDesc toggle={showCabTitle} width={props.width} />

            <BackToTopButton handleClick={handleBttBtnClick} />

          </ParallaxLayer>

          <ParallaxLayer
            offset={1.1}
            speed={1}
            className="parallax-layer"
            style={{
              height: '90vh',
            }}
          >
            <img
              src={cabernet}
              alt="We The People Wine: Cabernet Sauvignon"
              className="wine-bottle"
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
            offset={props.width > 768 ? 2.3 : 2.44}
            speed={2.2}
            style={{
              height: props.width > 768 ? '70vh' : '56vh',
              zIndex: '1000' 
            }}
          >
            <ChardDesc toggle={showChardTitle} />

            <BackToTopButton handleClick={handleBttBtnClick} />
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
          </ParallaxLayer>


          {/* PAGE 4 */}
          <ParallaxLayer
            offset={3}
            speed={1}
          >

            <animated.div
              className="parallax-brand-style"
            >
              <img
                src={wtpLogoWhite}
                alt="We The People Wine"
                className="wtp-brand-stamp"
              />
            </animated.div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={props.width > 768 ? 3.2 : 3.3}
            speed={1}
          >

            <h1 className="parallax-heading">MEET THE BRAND</h1>

          </ParallaxLayer>

          <ParallaxLayer
            offset={3.4}
            speed={1}
            style={{
              height: '60vh',
            }}
          >
            <BackToTopButton handleClick={handleBttBtnClick} />

            <ReactPlayer
              url="https://www.youtube.com/watch?v=LamRwl5Z2qk"
              playing={playVideo}
              controls={true}
              width={props.width < 768 ? 350 : 600}
              style={{ margin: 'auto' }}
            />
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  )
}
