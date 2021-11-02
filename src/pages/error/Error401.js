import React from 'react'
import './Error.css';

export default function Error401() {
  return (
    <div className="error-container">
      <div className="error-heading">401</div>
      <div className="error-description">You must be logged in to view this page.</div>
    </div>
  )
}
