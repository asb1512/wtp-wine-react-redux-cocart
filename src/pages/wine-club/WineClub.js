import React from 'react';
import './WineClub.css';

import diamond from '../../images/wine-club/diamond-icon.png';
import chainLink from '../../images/wine-club/chain-link-icon.png';
import goldBar from '../../images/wine-club/gold-bar-icon.png';
import dpCab from '../../images/wine-club/dp-cab.png';
import dpChard from '../../images/wine-club/dp-chard.png';
import dpMix from '../../images/wine-club/dp-mix.png';
import ppCab from '../../images/wine-club/pp-cab.png';
import ppChard from '../../images/wine-club/pp-chard.png';
import ppMix from '../../images/wine-club/pp-mix.png';
import gpTwoCab from '../../images/wine-club/gp-2-cab.png';
import gpTwoChard from '../../images/wine-club/gp-2-chard.png';
import gpThreeCab from '../../images/wine-club/gp-3-cab.png';
import gpThreeChard from '../../images/wine-club/gp-3-chard.png';



export default function WineClub() {
  return (
    <div className="wine-club-bg">

      <div className="wine-club-cntr">
        <h1>WINE CLUB</h1>

        {/* DIAMOND PACKAGE */}
        <div className="diamond-cntr">
          <div className="diamond-title-cntr">

            <div className="diamond-title">DIAMOND PACKAGE
              <img
                src={diamond}
                alt="We The People Wine Club: Diamond Packages"
                className="diamond-icon"
              />
            </div>
          </div>

          <div className="diamond-subheading">12 BOTTLES EVERY 3 MONTHS</div>

          <div className="diamond-wine-cntr">
            <div className="diamond-cab">
              <img
                src={dpCab}
                alt="We The People Wine Club: Diamond Package 2018 Cabernet Sauvignon"
                className="diamond-img"
              />
            </div>

            <div className="diamond-desc">
              2018 Cabernet Sauvignon
            </div>

            <div className="diamond-chard">
              <img
                src={dpChard}
                alt="We The People Wine Club: Diamond Package 2019 Chardonnay"
                className="diamond-img"
              />
            </div>

            <div className="diamond-desc">
              2019 Chardonnay
            </div>

            <div className="diamond-mix">
              <img
                src={dpMix}
                alt="We The People Wine Club: Diamond Package Mix & Match"
                className="diamond-img"
              />
            </div>

            <div className="diamond-desc">
              50 / 50
            </div>

            
          </div>
        </div>

        {/* PLATINUM PACKAGE */}
        <div className="diamond-cntr">
          <div className="diamond-title-cntr">

            <div className="diamond-title">PLATINUM PACKAGE
              <img
                src={chainLink}
                alt="We The People Wine Club: Platinum Packages"
                className="diamond-icon"
              />
            </div>
          </div>

          <div className="diamond-subheading">6 BOTTLES EVERY 3 MONTHS</div>

          <div className="platinum-wine-cntr">
            <div className="platinum-cab">
              <img
                src={ppCab}
                alt="We The People Wine Club: Diamond Package 2018 Cabernet Sauvignon"
                className="platinum-img"
              />
            </div>

            <div className="diamond-desc">
              2018 Cabernet Sauvignon
            </div>

            <div className="platinum-chard">
              <img
                src={ppChard}
                alt="We The People Wine Club: Diamond Package 2019 Chardonnay"
                className="platinum-img"
              />
            </div>

            <div className="diamond-desc">
              2019 Chardonnay
            </div>platinum

            <div className="platinum-mix">
              <img
                src={ppMix}
                alt="We The People Wine Club: Diamond Package Mix & Match"
                className="platinum-img"
              />
            </div>

            <div className="diamond-desc">
              50 / 50
            </div>
          </div>
        </div>

        {/* GOLD PACKAGE */}
        <div className="gold-cntr">
          <div className="gold-title-cntr">

            <div className="gold-title">GOLD PACKAGE
              <img
                src={goldBar}
                alt="We The People Wine Club: Platinum Packages"
                className="gold-icon"
              />
            </div>
          </div>

          <div className="gold-subheading">3 BOTTLES EVERY 3 MONTHS</div>

          <div className="gold-wine-cntr">
            <div className="gold-3-cab">
              <img
                src={gpThreeCab}
                alt="We The People Wine Club: Gold Package 2018 Cabernet Sauvignon"
                className="gold-img"
              />
            </div>

            <div className="gold-desc">
              2018 Cabernet Sauvignon
            </div>

            <div className="gold-3-chard">
              <img
                src={gpThreeChard}
                alt="We The People Wine Club: Gold Package 2019 Chardonnay"
                className="gold-img"
              />
            </div>

            <div className="gold-desc">
              2019 Chardonnay
            </div>

            <div className="gold-2-cab">
              <img
                src={gpTwoCab}
                alt="We The People Wine Club: Diamond Package Mix & Match"
                className="gold-img"
              />
            </div>

            <div className="gold-desc">
              2 / 3 Cabernet Sauvignon
            </div>

            <div className="gold-2-chard">
              <img
                src={gpTwoChard}
                alt="We The People Wine Club: Diamond Package Mix & Match"
                className="gold-img"
              />
            </div>

            <div className="gold-desc">
              2 / 3 Chardonnay
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
