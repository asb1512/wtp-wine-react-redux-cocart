import React from 'react';
import { useSpring, animated } from 'react-spring';
import { connect } from 'react-redux';
import { removeItemFromCart } from '../../actions/userCart';
import { Link } from 'react-router-dom';

import cab from '../../images/wine/cabernet.png';
import chard from '../../images/wine/chardonnay.png';

import './MiniCart.css';

function MiniCart(props) {

  const cartStyle = useSpring({
    right: props.toggle ? '0%' : '-47%'
  })

  const addDecimalToSubtotal = () => {
    if (props.cartItems && props.cartItems.length > 0) {
      let splitPrice = props.cartTotals.subtotal.split('')
      splitPrice.splice(-2, 0, '.')
      let formattedPrice = splitPrice.join('')
      return formattedPrice;
    } else return '0.00';
  }

  const handleItemDeletion = (itemKey) => {
    props.removeItemFromCart(itemKey, props.cartKey)
  }

  const renderMiniCartContent = () => {
    if (props.cartItems && props.cartItems.length > 0) {
      return (
        <>
          {props.cartItems?.map(item => {
            return (
              <div className="minicart-item" key={item.id}>
                <img
                  src={item.id === 13 ? cab : chard}
                  alt={`We The People Wine ${item.name}`}
                  className="minicart-item-img"
                />
                <div className="minicart-item-name">{item.name}</div>
                <div className="minicart-item-quantity">{item.quantity.value}</div>
                <div className="minicart-item-price">${item.price}</div>
                <div
                  className="minicart-item-remove"
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
          <div className="minicart-no-items">There are no items in your cart.</div>
        </>
      )
    }
  }

  return (
    <animated.div className="minicart-container" style={cartStyle}>
      <div className="minicart-title">YOUR CART</div>

      <div className="minicart-items">
        {renderMiniCartContent()}
      </div>

      <div className="minicart-options">

        <div className="minicart-totals">
          <div className="minicart-subtotal">
            SUBTOTAL : ${addDecimalToSubtotal()}
          </div>
          <div className="minicart-shipping">
            SHIPPING & HANDLING :
          </div>
          <div className="minicart-tax">
            ESTIMATED TAX :
          </div>
          <div className="minicart-total">
            TOTAL :
          </div>
        </div>

        <div className="minicart-checkout">
          <Link to="/checkout">CHECKOUT</Link>
        </div>
      </div>
    </animated.div>
  )
}

const mapStateToProps = (state) => {
  if (state.userCart) {
    return {
      cartItems: state.userCart.items ? state.userCart.items : [],
      cartTotals: state.userCart.totals ? state.userCart.totals : null,
      cartKey: state.userCart.cart_key ? state.userCart.cart_key : null,
    }
  } else return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItemFromCart: (itemKey, cartKey) => dispatch(removeItemFromCart(itemKey, cartKey)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);