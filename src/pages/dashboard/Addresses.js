import React from 'react';
import { connect } from 'react-redux';

function Addresses(props) {

  console.log('Adresses props:', props)

  const billingAddress = () => {
    if (props.billing && props.billing.address_1) {
      return (
        <div className="address-container">
          <div className="address-title">BILLING ADDRESS</div>
          <div className="address-content">
            <div>{`${props.billing.first_name} ${props.billing.last_name}`}</div>
            {props.billing.company ? <div>{props.billing.company}</div> : null}
            <div>{props.billing.address_1}</div>
            {props.billing.address_2 ? <div>{props.billing.address_2}</div> : null}
            <div>{props.billing.city}, {props.billing.state} {props.billing.postcode}</div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="dashboard-no-content">
          You don't have a billing address saved.
        </div>
      )
    }
  }
  
  const shippingAddress = () => {
    if (props.shipping && props.shipping.address_1) {
      return (
        <div className="address-container">
          <div className="address-title">SHIPPING ADDRESS</div>
          <div className="address-content">
            <div>{`${props.shipping.first_name} ${props.shipping.last_name}`}</div>
            {props.shipping.company ? <div>{props.shipping.company}</div> : null}
            <div>{props.shipping.address_1}</div>
            {props.shipping.address_2 ? <div>{props.shipping.address_2}</div> : null}
            <div>{props.shipping.city}, {props.shipping.state} {props.shipping.postcode}</div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="dashboard-no-content">
          You don't have a shipping address saved.
        </div>
      )
    }
  }

  return (
    <div className="dashboard-subcontainer">
      {billingAddress()}
      {shippingAddress()}
    </div>
  )
}

const mapStateToProps = (state) => {
  if (state.currentUser) {
    return {
      billing: state.currentUser.billing,
      shipping: state.currentUser.shipping,
    }
  } else return {}
}

export default connect(mapStateToProps)(Addresses);