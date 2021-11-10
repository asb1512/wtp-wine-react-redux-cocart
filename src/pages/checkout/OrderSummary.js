import React from 'react';
import './OrderSummary.css';
import { connect } from 'react-redux';

function OrderSummary() {
  return (
    <div className="order-summary-container">
      <div className="order-summary-items">
        <div className="order-summary-heading">YOUR ORDER</div>
      </div>

      <div className="order-summary-totals">
        
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(OrderSummary);