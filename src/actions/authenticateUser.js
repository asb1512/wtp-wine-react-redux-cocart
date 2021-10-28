// import axios from 'axios';
import CoCartAPI from '@cocart/cocart-rest-api';

export function authenticateUser() {
  return function (dispatch) {
    dispatch({type: "AUTHENTICATE_USER_LOADING"})
    console.log("Base URL:", process.env.REACT_APP_BASE_URL)
      const CoCart = new CoCartAPI({
        url: process.env.REACT_APP_BASE_URL,
        consumerKey: process.env.REACT_APP_COMSUMER_KEY,
        consumerSecret: process.env.REACT_APP_CONSUMER_SECRET,
      })

      CoCart.post("login", {
        "customerId": "andrew",
        "password": "Thisisgoingtobefun1!"
      })
      .then(resp => console.log(resp))
      .catch(error => console.log(error))
    // return axios({
    //   method: 'post',
    //   url: 'https://dev.4.rageagency.com/wp-json/jwt-auth/v2/token',
    //   data: {
    //     username: 'andrew',
    //     password: 'Thisisgoingtobefun1!'
    //   }
    // })

    // .then(function (response) {
    //   console.log(response)
    // })
  }
}