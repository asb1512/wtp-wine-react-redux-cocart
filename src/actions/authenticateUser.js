import axios from 'axios';


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
            axios.get(`https://dev.4.rageagency.com/wp-json/wc/v3/orders?customer=3&consumer_key=ck_d8c99f0d68384dd98286dd0316bf9f509bed709d&consumer_secret=cs_4f123bff70009dc073211f811d297e30619091f9`)
              .then(resp => {
                console.log("Customer Order Retrieval:", resp)
                debugger
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
        console.log("Error message:", error.message)
        dispatch({ type: "AUTHENTICATION_ERROR", error })
      })
  }
}