import React from 'react';
import { connect } from 'react-redux';

function Orders(props) {

  const mapOverOrders = () => {
    props.orders?.map(order => {
      return (
        <tr key={order.id}>
          <td>{order.id}</td>
          <td>DATE</td>
          <td>{order.status}</td>
          <td>${order.total}<br/>for {order.line_items.length} item(s)</td>
        </tr>
      )
    })
  }

  console.log("Orders State:", props.orders)

  if (props.orders) {
    return (
      <div className="dashboard-subcontainer orders-container">
        <table>
          <thead>
            <tr>
              <th>ORDER</th>
              <th>DATE</th>
              <th>STATUS</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {mapOverOrders()}
          </tbody>
        </table>
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