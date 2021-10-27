import './ParallaxUpDownButtons.css'

import UpArrowButton from './UpArrowButton'
import DownArrowButton from './DownArrowButton'

export default function ParallaxUpDownButtons(props) {
  return (
    <div className="parallax-arrow-container">
      <UpArrowButton
        handleUpClick={props.handleUpClick}
        offset={props.offset}
        navFocus={props.navFocus}
        setVideoPlay={props.setVideoPlay ? props.setVideoPlay : null}
      />

      <DownArrowButton
        handleDownClick={props.handleDownClick ? props.handleDownClick : null}
      />
    </div>
  )
}