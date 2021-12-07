import React, { useState } from 'react';
import './WineClub.css';

import WineClubModal from './WineClubModal';

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

  const [showModal, setModal] = useState(false);
  const [packageLevel, setPackageLevel] = useState('');
  const [wineTypeYear, setWineTypeYear] = useState('');
  const [wineTypeName, setWineTypeName] = useState('');
  const [packageQuantity, setPackageQuantity] = useState('');
  const [packageType, setPackageType] = useState('');
  const [altText, setAltText] = useState('');

  const handleWineClick = (pkgLevel, pkgType, wineVarietyYear, wineVarietyName, bottleQuantity, altImgText) => {
    setModal(true);
    setPackageLevel(pkgLevel);
    setPackageType(pkgType);
    setWineTypeYear(wineVarietyYear);
    setWineTypeName(wineVarietyName);
    setPackageQuantity(bottleQuantity);
    setAltText(altImgText);
  }

  return (
    <>
      <div className="wine-club-bg">

        <div className="wine-club-cntr">
          <h1>WINE CLUB</h1>

          {/* DIAMOND PACKAGE */}
          <div className="diamond-cntr">
            <div className="diamond-title-cntr">

              <div className="diamond-title">DIAMOND PACKAGE
                <img
                  src={diamond}
                  alt="We The People Wine Club: Diamond Package"
                  className="diamond-icon"
                />
              </div>
            </div>

            <div className="diamond-subheading">12 BOTTLES EVERY 3 MONTHS OR MONTHLY</div>

            <div className="diamond-wine-cntr">
              <div className="diamond-cab">
                <img
                  src={dpCab}
                  alt="We The People Wine Club: Diamond Package 2018 Cabernet Sauvignon"
                  className="diamond-img"
                  onClick={() => handleWineClick('Diamond', 'dpCab', '2018', 'CABERNET SAUVIGNON', '12', 'Diamond Package Cabernet Sauvignon')}
                />
              </div>

              <div 
                className="diamond-desc"
                onClick={() => handleWineClick('Diamond', 'dpCab', '2018', 'CABERNET SAUVIGNON', '12', 'Diamond Package Cabernet Sauvignon')}
              >
                2018 Cabernet Sauvignon
              </div>

              <div className="diamond-chard">
                <img
                  src={dpChard}
                  alt="We The People Wine Club: Diamond Package 2019 Chardonnay"
                  className="diamond-img"
                  onClick={() => handleWineClick('Diamond', 'dpChard', '2019', 'CHARDONNAY', '12', 'Diamond Package Chardonnay')}
                />
              </div>

              <div 
                className="diamond-desc"
                onClick={() => handleWineClick('Diamond', 'dpChard', '2019', 'CHARDONNAY', '12', 'Diamond Package Chardonnay')}
              >
                2019 Chardonnay
              </div>

              <div className="diamond-mix">
                <img
                  src={dpMix}
                  alt="We The People Wine Club: Diamond Package Mix & Match"
                  className="diamond-img"
                  onClick={() => handleWineClick('Diamond', 'dpMix', '', 'HALF & HALF', '12', 'Diamond Package Half & Half')}
                />
              </div>

              <div 
                className="diamond-desc"
                onClick={() => handleWineClick('Diamond', 'dpMix', '', 'HALF & HALF', '12', 'Diamond Package Half & Half')}
              >
                Half & Half
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

            <div className="diamond-subheading">6 BOTTLES EVERY 3 MONTHS OR MONTHLY</div>

            <div className="platinum-wine-cntr">
              <div className="platinum-cab">
                <img
                  src={ppCab}
                  alt="We The People Wine Club: Diamond Package 2018 Cabernet Sauvignon"
                  className="platinum-img"
                  onClick={() => handleWineClick('Platinum', 'ppCab', '2018', 'CABERNET SAUVIGNON', '6', 'Platinum Package Cabernet Sauvignon')}
                />
              </div>

              <div 
                className="diamond-desc"
                onClick={() => handleWineClick('Platinum', 'ppCab', '2018', 'CABERNET SAUVIGNON', '6', 'Platinum Package Cabernet Sauvignon')}
              >
                2018 Cabernet Sauvignon
              </div>

              <div className="platinum-chard">
                <img
                  src={ppChard}
                  alt="We The People Wine Club: Diamond Package 2019 Chardonnay"
                  className="platinum-img"
                  onClick={() => handleWineClick('Platinum', 'ppChard', '2019', 'CHARDONNAY', '6', 'Platinum Package Chardonnay')}
                />
              </div>

              <div 
                className="diamond-desc"
                onClick={() => handleWineClick('Platinum', 'ppChard', '2019', 'CHARDONNAY', '6', 'Platinum Package Chardonnay')}
              >
                2019 Chardonnay
              </div>platinum

              <div className="platinum-mix">
                <img
                  src={ppMix}
                  alt="We The People Wine Club: Diamond Package Mix & Match"
                  className="platinum-img"
                  onClick={() => handleWineClick('Platinum', 'ppMix', '', 'HALF & HALF', '6', 'Platinum Package Half & Half')}
                />
              </div>

              <div 
                className="diamond-desc"
                onClick={() => handleWineClick('Platinum', 'ppMix', '', 'HALF & HALF', '6', 'Platinum Package Half & Half')}
              >
                Half & Half
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

            <div className="gold-subheading">3 BOTTLES EVERY 3 MONTHS OR MONTHLY</div>

            <div className="gold-wine-cntr">
              <div className="gold-3-cab">
                <img
                  src={gpThreeCab}
                  alt="We The People Wine Club: Gold Package 2018 Cabernet Sauvignon"
                  className="gold-img"
                  onClick={() => handleWineClick('Gold', 'gpThreeCab', '2018', 'CABERNET SAUVIGNON', '3', 'Gold Package Cabernet Sauvignon')}
                />
              </div>

              <div 
                className="gold-desc"
                onClick={() => handleWineClick('Gold', 'gpThreeCab', '2018', 'CABERNET SAUVIGNON', '3', 'Gold Package Cabernet Sauvignon')}
              >
                2018 Cabernet Sauvignon
              </div>

              <div className="gold-3-chard">
                <img
                  src={gpThreeChard}
                  alt="We The People Wine Club: Gold Package 2019 Chardonnay"
                  className="gold-img"
                  onClick={() => handleWineClick('Gold', 'gpThreeChard', '2019', 'CHARDONNAY', '3', 'Gold Package Chardonnay')}
                />
              </div>

              <div 
                className="gold-desc"
                onClick={() => handleWineClick('Gold', 'gpThreeChard', '2019', 'CHARDONNAY', '3', 'Gold Package Chardonnay')}
              >
                2019 Chardonnay
              </div>

              <div className="gold-2-cab">
                <img
                  src={gpTwoCab}
                  alt="We The People Wine Club: Diamond Package Mix & Match"
                  className="gold-img"
                  onClick={() => handleWineClick('Gold', 'gpTwoCab', '2/3', 'CABERNET SAUVIGNON', '3', 'Gold Package 2 Cabernet Sauvignon')}
                />
              </div>

              <div 
                className="gold-desc"
                onClick={() => handleWineClick('Gold', 'gpTwoCab', '2/3', 'CABERNET SAUVIGNON', '3', 'Gold Package 2 Cabernet Sauvignon')}
              >
                2 / 3 Cabernet Sauvignon
              </div>

              <div className="gold-2-chard">
                <img
                  src={gpTwoChard}
                  alt="We The People Wine Club: Diamond Package Mix & Match"
                  className="gold-img"
                  onClick={() => handleWineClick('Gold', 'gpTwoChard', '2/3', 'CHARDONNAY', '3', 'Gold Package 2 Chardonnay')}
                />
              </div>

              <div 
                className="gold-desc"
                onClick={() => handleWineClick('Gold', 'gpTwoCab', '2/3', 'CHARDONNAY', '3', 'Gold Package 2 Cabernet Sauvignon')}
              >
                2 / 3 Chardonnay
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <WineClubModal 
        showModal={showModal}
        packageLevel={packageLevel}
        packageType={packageType}
        wineTypeYear={wineTypeYear}
        wineTypeName={wineTypeName}
        packageQuantity={packageQuantity}
        altText={altText}
        setModal={setModal}
      />
    </>
  )
}
