import React from 'react';
import { connect } from 'react-redux';

function Orders(props) {

  if (props.orders) {
    return (
      <div className="dashboard-subcontainer orders-container">
        <table className="orders-table">
          <thead className="orders-table-header">
            <tr>
              <th>ORDER</th>
              <th>DATE</th>
              <th>STATUS</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {props.orders?.map(order => {
              console.log("single order id", order.id)
              return (
                <tr key={order.id} className="orders-table-row">
                  <td>{order.id}</td>
                  <td>DATE</td>
                  <td>{order.status}</td>
                  <td>${order.total}<br />for {order.line_items.length} item(s)</td>
                </tr>
              )
            })}
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