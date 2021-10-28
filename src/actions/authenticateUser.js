import axios from 'axios';
// import CoCartAPI from '@cocart/cocart-rest-api';

export function authenticateUser() {
  return function (dispatch) {
    dispatch({type: "AUTHENTICATE_USER_LOADING"})
    console.log("Base URL:", process.env.REACT_APP_BASE_URL)

    const loginData = {
      username: 'andrew',
      password: 'Thisisgoingtobefun1!',
    }

    return axios.post(`${process.env.REACT_APP_BASE_URL}/wp-json/jwt-auth/v1/token`, loginData)

      .then(resp => console.log(resp))
      .catch(error => console.log(error))
  }
}