import React from 'react';
import './OrderSummary.css';
import { connect } from 'react-redux';
import { removeItemFromCart } from '../../actions/userCart';

import cab from '../../images/wine/cabernet.png';
import chard from '../../images/wine/chardonnay.png';

function OrderSummary(props) {

  const addDecimalToSubtotal = () => {
    if (props.userCart && props.userCart.items.length > 0) {
      let splitPrice = props.userCart.totals.subtotal.split('')
      splitPrice.splice(-2, 0, '.')
      let formattedPrice = splitPrice.join('')
      return formattedPrice;
    } else return '0.00';
  }


  const handleItemDeletion = (itemKey) => {
    props.removeItemFromCart(itemKey, props.userCart.cartKey)
  }

  const renderCartItems = () => {
    if (props.userCart.items && props.userCart.items.length > 0) {
      return (
        <>
          {props.userCart.items?.map(item => {
            return (
              <div className="order-item" key={item.id}>
                <img
                  src={item.id === 13 ? cab : chard}
                  alt={`We The People Wine ${item.name}`}
                  className="order-item-img"
                />
                <div className="order-item-name">{item.name}</div>
                <div className="order-item-quantity">Quantity: {item.quantity.value}</div>
                <div className="order-item-price">${item.price}</div>
                <div
                  className="order-item-remove"
                  onClick={() => handleItemDeletion(item.item_key)}
                >
                  x
                </div>
              </div>
            )
          })}
        </>
      )
    } else {
      return (
        <>
          <div className="order-no-items">
            You don't have any items in this order.
          </div>
        </>
      )
    }
  }

  const renderSummary = () => {
    if (props.userCart && props.userCart.totals.subtotal) {
      return (
        <>
          <div className="order-summary-subtotal">
            SUBTOTAL: ${addDecimalToSubtotal()}
          </div>
          <div className="order-summary-shipping">
            SHIPPING:
          </div>
          <div className="order-summary-tax">
            TAX:
          </div>
          <div className="order-summary-total">
            TOTAL:
          </div>
        </>
      )
    }
  }

  return (
    <div className="order-summary-container">
      <div className="order-summary-items">
        <div className="order-summary-heading">YOUR ORDER</div>
        {renderCartItems()}
      </div>

      <div className="order-summary-totals">
        <div className="order-summary-heading">SUMMARY</div>
        {renderSummary()}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  if (state.userCart) {
    return {
      userCart: state.userCart,
    }
  } else return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItemFromCart: (itemKey, cartKey) => dispatch(removeItemFromCart(itemKey, cartKey)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);