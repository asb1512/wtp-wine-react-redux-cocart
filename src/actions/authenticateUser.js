import axios from 'axios';


export function authenticateUser(ui, pw) {
  return function (dispatch) {
    dispatch({ type: "AUTHENTICATE_USER_LOADING" })

    const loginData = {
      username: ui,
      password: pw,
    }

    return axios.post(`${process.env.REACT_APP_BASE_URL}/wp-json/jwt-auth/v1/token`, loginData)

      .then(resp => {
        dispatch({ type: "AUTHENTICATE_USER", resp })
      })
      .catch(error => {
        console.log("Error message:", error.message)
        dispatch({ type: "AUTHENTICATION_ERROR", error })
      })
  }
}