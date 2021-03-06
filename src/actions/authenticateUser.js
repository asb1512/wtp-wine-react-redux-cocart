import axios from 'axios';

export function validateUserToken(token, email) {
  return function (dispatch) {
    dispatch({ type: "VALIDATE_USER_TOKEN_LOADING" })

    // if a user already has a token as a cookie, validate that token before attempting to use it in subsequent requests
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }

    return axios.post(`${process.env.REACT_APP_BASE_URL}/wp-json/jwt-auth/v1/token/validate`, {}, config)
      .then(resp => {
        // add pre-existing email & token to Redux store
        const userData = { email: email, token: token }
        dispatch({ type: "SET_TOKEN_FROM_COOKIE", userData })

        // this will retrieve customer_id
        axios.get(`${process.env.REACT_APP_BASE_URL}/wp-json/wc/v3/customers?email=${userData.email}&consumer_key=${process.env.REACT_APP_CONSUMER_KEY}&consumer_secret=${process.env.REACT_APP_CONSUMER_SECRET}`)
          .then(resp => {
            console.log("Customer ID retrieval:", resp)
            dispatch({ type: "SET_USER_INFO", resp })

            // retrieve customer's orders
            axios.get(`${process.env.REACT_APP_BASE_URL}/wp-json/wc/v3/orders?customer=${resp.data[0].id}&consumer_key=${process.env.REACT_APP_CONSUMER_KEY}&consumer_secret=${process.env.REACT_APP_CONSUMER_SECRET}`)

              .then(resp => {
                console.log("Customer Order Retrieval:", resp)
                dispatch({ type: "SET_USER_ORDERS", resp })
              })
              .catch(error => {
                console.log("Customer's orders retrieval error:", error)
                dispatch({ type: "USER_ORDERS_ERROR", error })
              })

          })
          .catch(error => {
            console.log("Customer ID retrieval error:", error)
            dispatch({ type: "USER_INFO_ERROR", error })
          })
      })
      .catch(error => {
        // prompt user to reauthenticate
        console.log("validateUserToken Failure:", error)
        dispatch({ type: "TOKEN_VALIDATION_ERROR" })
      })
  }
}



export function authenticateUser(ui, pw) {
  return function (dispatch) {
    dispatch({ type: "AUTHENTICATE_USER_LOADING" })

    const loginData = {
      username: ui,
      password: pw,
    }
    // returns a token from WC and user info; unfortunately doesn't include customer id
    return axios.post(`${process.env.REACT_APP_BASE_URL}/wp-json/jwt-auth/v1/token`, loginData)
      .then(resp => {
        dispatch({ type: "AUTHENTICATE_USER", resp })

        // this will retrieve customer_id
        axios.get(`${process.env.REACT_APP_BASE_URL}/wp-json/wc/v3/customers?email=${resp.data.user_email}&consumer_key=${process.env.REACT_APP_CONSUMER_KEY}&consumer_secret=${process.env.REACT_APP_CONSUMER_SECRET}`)
          .then(resp => {
            console.log("Customer ID retrieval:", resp)
            dispatch({ type: "SET_USER_INFO", resp })

            // retrieve customer's orders
            axios.get(`${process.env.REACT_APP_BASE_URL}/wp-json/wc/v3/orders?customer=${resp.data[0].id}&consumer_key=${process.env.REACT_APP_CONSUMER_KEY}&consumer_secret=${process.env.REACT_APP_CONSUMER_SECRET}`)
              .then(resp => {
                console.log("Customer Order Retrieval:", resp)
                dispatch({ type: "SET_USER_ORDERS", resp })
              })
              .catch(error => {
                console.log("Customer's orders retrieval error:", error)
                dispatch({ type: "USER_ORDERS_ERROR", error })
              })

          })
          .catch(error => {
            console.log("Customer ID retrieval error:", error)
            dispatch({ type: "USER_INFO_ERROR", error })
          })
      })
      .catch(error => {
        console.log("Authentication error:", error.message)
        dispatch({ type: "TOAST_FAILURE", message: "Invalid login credentials. Please try again." })
      })
  }
}