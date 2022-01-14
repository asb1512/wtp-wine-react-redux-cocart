import React from 'react';
import { connect } from 'react-redux';

function Orders(props) {

  const parseOrderDate = (date) => {
    let splitDate = date.split('T')
    return `${splitDate[0]} @ ${splitDate[1]}`
  }

  if (props.orders) {
    return (
      <div className="dashboard-subcontainer">

        <div className="orders-table">

          <div className="orders-table-header">
            <div>ORDER</div>
            <div>DATE</div>
            <div>STATUS</div>
            <div>TOTAL</div>
          </div>

          <div>
            {props.orders?.map(order => {
              return (
                <div key={order.id} className="orders-table-row">

                  <div>{order.id}</div>
                  <div>{parseOrderDate(order.date_created)}</div>
                  <div>{order.status}</div>
                  <div>${order.total}<br />for {order.line_items.length} item(s)</div>

                </div>
              )
            })}
          </div>

        </div>

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