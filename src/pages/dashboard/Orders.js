import React from 'react';
import { connect } from 'react-redux';

function Orders(props) {

  const mapOverOrders = () => {

  }

  console.log("Orders State:", props.orders)

  if (props.orders) {
    return (
      <div className="orders-container">
        Orders exist.
      </div>
    )
  } else {
    return (
      <div className="dashboard-subcontainer">
        <div className="dashboard-no-content">
          You don't have any orders at this time.
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  if (state.currentUser.orders) {
    return {
      orders: state.currentUser.orders
    }
  } else return {}
}

export default connect(mapStateToProps)(Orders)