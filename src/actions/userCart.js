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
        dispatch({ type: "TOAST_FAILURE", mesage: "Unable to retrieve cart."})
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
        toast.success("Item successfully add to cart")
      })
      .catch(error => {
        console.log("addSimpleItemToCart error:", error)
      })
  }
}

export function removeItemFromCart(itemKey, cartKey, token) {
  return function (dispatch) {
    dispatch({ type: "CART_LOADING" })

    let config = {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    };

    return axios.delete(`${process.env.REACT_APP_BASE_URL}/wp-json/cocart/v2/cart/item/${itemKey}?cart_key=${cartKey}`, config)
      .then(resp => {
        dispatch({ type: "SET_USER_CART", resp })
        dispatch({ type: "TOAST_SUCCESS", message: 'Successfully added to cart' })
      })
      .catch(error => {
        console.log("removeItemFromCart error reached")
        dispatch({ type: "TOAST_FAILURE", message: 'Request failed. Please try again.'})
      })
  }
}

export function addVariableProductToCart(productId, quantity, frequency, cartKey) {
  return function (dispatch) {
    dispatch({ type: "CART_LOADING" })

    return axios.post(`${process.env.REACT_APP_BASE_URL}/wp-json/cocart/v2/cart/add-item${cartKey ? '?' + cartKey : ''}`, {
      id: `${productId}`,
      quantity: `${quantity}`,
      variation: {
        attribute_frequency: frequency,
      },
    })
      .then(resp => {
        dispatch({ type: "SET_USER_CART", resp })
        toast.success("Item successfully add to cart")
      })
      .catch(error => {
        console.log("addSimpleItemToCart error:", error)
      })
  }
}

export function clearCart(cartKey) {
  return function (dispatch) {
    dispatch({ type: "CART_LOADING" })

    return axios.post(`${process.env.REACT_APP_BASE_URL}/wp-json/cocart/v2/cart/clear?cart_key=${cartKey}`)
      .then(resp => {

      })
      .catch(error => {

      })
  }
}