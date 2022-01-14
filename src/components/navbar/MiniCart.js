import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { connect } from 'react-redux';
import { removeItemFromCart } from '../../actions/userCart';
import { Link } from 'react-router-dom';

import cab from '../../images/wine/cabernet.png';
import chard from '../../images/wine/chardonnay.png';

import './MiniCart.css';

function MiniCart(props) {

  // animates entry/exit into viewport
  const cartStyle = useSpring({
    right: props.toggle ? '0%' : props.width > 768 ? '-47%' : '-100%',
    opacity: props.toggle ? 1 : 0,
  })

  // Amounts are treated in cents by Stripe, adds decimal point
  const addDecimalToSubtotal = () => {
    if (props.cartItems && props.cartItems.length > 0) {
      let splitPrice = props.cartTotals.subtotal.split('')
      splitPrice.splice(-2, 0, '.')
      let formattedPrice = splitPrice.join('')
      return formattedPrice;
    } else return '0.00';
  }

  // pertaining to checkout 'button'
  const [disableCheckout, setDisableCheckout] = useState(true);
  const [checkoutHover, setCheckoutHover] = useState(false);
  const checkoutStyle = useSpring({
    background: disableCheckout ? 
      'rgba(24, 24, 24, 0.4)' : 
      checkoutHover ?
        'rgba(77, 77, 77, 0.4)' :
        '',
    color: disableCheckout ? '#29333D' : '#29333D',
  })
  const checkoutLinkStyle = useSpring({
    color: disableCheckout ? 
      '#29333D' :
      checkoutHover ? 
      '#E40032' :
      '#F3F3F7',
  })

  const handleCheckoutMouseEnter = () => {
    if (!disableCheckout) {
      setCheckoutHover(true);
    }
  }
  const handleCheckoutMouseLeave = () => {
    if (!disableCheckout) {
      setCheckoutHover(false);
    }
  }
  const handleCheckoutClick = () => {
    if (!disableCheckout) {
      props.setCartOpen(false);
    }
  }

  // handles single-item deletion from user cart
  const handleItemDeletion = (itemKey) => {
    props.removeItemFromCart(itemKey, props.userCart.cart_key, props.currentUser.token)
  }

  // renders inner content based on the existence of user cart
  const renderMiniCartContent = () => {
    if (props.cartItems && props.cartItems.length > 0) {
      setDisableCheckout(false);
      return (
        <>
          {props.cartItems?.map(item => {
            return (
              <div className="minicart-item" key={item.id}>
                <img
                  // 
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
          <div 
            className="minicart-no-items"
          >
            There are no items in your cart.
          </div>
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
        </div>

        <Link
          to={disableCheckout ? '#' : '/order-summary'}
          className="minicart-link"
          style={checkoutLinkStyle}
          onClick={handleCheckoutClick}
        >
          <animated.div 
            className="minicart-checkout"
            style={checkoutStyle}
            onMouseEnter={handleCheckoutMouseEnter}
            onMouseLeave={handleCheckoutMouseLeave}
          >
            CHECKOUT
          </animated.div>
        </Link>
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
      userCart: state.userCart,
      currentUser: state.currentUser,
    }
  } else return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItemFromCart: (itemKey, cartKey, token) => dispatch(removeItemFromCart(itemKey, cartKey, token)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);