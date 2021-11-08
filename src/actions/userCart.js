import 'axios';
import axios from 'axios';
import toast from 'react-hot-toast';

export function retrieveUserCart(cartKey) {
  return function (dispatch) {
    dispatch({ type: "CART_LOADING" })
    console.log("retrieveUserCart has been called.")
    return axios.get(`${process.env.REACT_APP_BASE_URL}/wp-json/cocart/v2/cart?cart_key=${cartKey}`)
      .then(resp => {
        dispatch({ type: "SET_USER_CART", resp })
      })
      .catch(error => {
        console.log("retrieveUserCart error:", error)
      })
  }
}

export function addSimpleItemToCart(productId, quantity, cartKey) {
  return function (dispatch) {
    dispatch({ type: "CART_LOADING" })

    return axios.post(`${process.env.REACT_APP_BASE_URL}/wp-json/cocart/v2/cart/add-item${cartKey ? '?' + cartKey : ''}`, {
      id: `${productId}`,
      quantity: `${quantity}`,
    })
      .then(resp => {
        dispatch({ type: "SET_USER_CART", resp })
        toast.success("Item successfully add to cart.")
      })
      .catch(error => {
        console.log("addSimpleItemToCart error:", error)
      })
  }
}