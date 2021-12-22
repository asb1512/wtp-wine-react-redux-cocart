import "./Home.css";

import React, { useState, useRef } from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import ReactPlayer from "react-player";

// import ParallaxNav from "./components/ParallaxNav";
import CabDesc from "./components/CabDesc";
import ChardDesc from "./components/ChardDesc";
import BackToTopButton from "./components/BackToTopButton";
import WtpLogo from "../../SVG/wtp-logo/WtpLogo";
import WtpLogoMobileWe from "../../SVG/wtp-logo/WtpLogoMobileWe";
import WtpLogoMobileThePeople from "../../SVG/wtp-logo/WtpLogoMobileThePeople";

import cabernet from "../../images/wine/cabernet.png";
import chardonnay from "../../images/wine/chardonnay.png";
import wtpLogoWhite from "../../images/logos/wtp-logo-white.png";



export default function Home(props) {

  const [playVideo, setVideoPlay] = useState(false);
  const parallax = useRef(null);

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

      <div className="parallax-container">

        <Parallax
          ref={parallax}
          pages={4}
          enabled={true}
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
            
            <div className="parallax-cab-style"/>
          </ParallaxLayer>

          <ParallaxLayer
            offset={props.width > 768 ? 1.4 : 1.62}
            speed={2.2}
            style={{
              height: props.width > 768 ? '60vh' : '38vh',
              zIndex: '1000'
            }}
          >
            <CabDesc width={props.width} />

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
            <div className="parallax-chard-style"/>
          </ParallaxLayer>

          <ParallaxLayer
            offset={props.width > 768 ? 2.3 : 2.44}
            speed={2.2}
            style={{
              height: props.width > 768 ? '70vh' : '56vh',
              zIndex: '1000' 
            }}
          >
            <ChardDesc />

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

            <div className="parallax-brand-style">
              <img
                src={wtpLogoWhite}
                alt="We The People Wine"
                className="wtp-brand-stamp"
              />
            </div>
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
