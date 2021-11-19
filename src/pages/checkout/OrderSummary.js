import React from 'react';
import './OrderSummary.css';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeItemFromCart } from '../../actions/userCart';
import { createPaymentIntentAndOrder } from '../../actions/checkoutUser';
import YouMightLike from './YouMightLike';
import Loader from '../../components/Loader';

import cab from '../../images/wine/cabernet.png';
import chard from '../../images/wine/chardonnay.png';

function OrderSummary(props) {

  let history = useHistory();

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
          <button
            className="order-summary-checkout-btn"
            onClick={() => initializeCheckout()}
          >
            CHECKOUT
          </button>
        </>
      )
    }
  }

  const initializeCheckout = () => {
    // need to add ability for customer to checkout as guest and/or add billing/shipping addresses
    // setLoader(true)
    // the amount passed must be changed to full total
    props.createPaymentIntentAndOrder(
      props.currentUser.userId,
      props.userCart.totals.subtotal, 
      props.currentUser.billing, 
      props.currentUser.shipping, 
      createLineItems(), 
      [
        {
          method_id: "flat_rate", 
          method_title: "Flat rate", 
          total: "1.00",
        }
      ]
    )
    history.push(`/checkout?cart=${props.userCart.cart_hash}`)
  }

  const createLineItems = () => {
    const orderLineItems = []
    props.userCart.items.map(item => {
      let itemObj = {
        product_id: item.id,
        quantity: item.quantity.value,
      }
      orderLineItems.push(itemObj)
      return orderLineItems
    })
    return orderLineItems
  }



  return (
    <>
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
      <YouMightLike />
      {props.checkoutLoading ? <Loader message="Do not refresh the page while your order is being processed." /> : null}
    </>
  )
}



const mapStateToProps = (state) => {
  if (state.userCart) {
    return {
      userCart: state.userCart,
      checkoutLoading: state.checkoutLoading,
      currentUser: state.currentUser ? state.currentUser : {},
    }
  } else return {};
}


 
const mapDispatchToProps = (dispatch) => {
  return {
    removeItemFromCart: (itemKey, cartKey) => dispatch(removeItemFromCart(itemKey, cartKey)),
    createPaymentIntentAndOrder: (customerId, amount, billingAddress, shippingAddress, lineItems, shipping) => {
      dispatch(createPaymentIntentAndOrder(customerId, amount, billingAddress, shippingAddress, lineItems, shipping))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);