import React from 'react'
import "./WelcomeButton.css"

export default function WelcomeButton(props) {

  const buttonStyle = {
    width: props.width,
    margin: props.margin,
    padding: props.padding,
    fontSize: props.fontSize,
  }

  return (
    <button
      className="welcome-button"
      style={buttonStyle}
      onClick={() => props.onButtonClick()}
    >
      {props.buttonText}
    </button>
  )
}