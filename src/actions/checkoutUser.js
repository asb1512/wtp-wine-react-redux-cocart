import 'axios';
import axios from 'axios';

export function createPaymentIntentAndOrder(amount, billingAddress, shippingAddress, lineItems, shipping) {
  return function (dispatch) {
    dispatch({ type: "CHECKOUT_LOADING" })

    axios.get(`${process.env.REACT_APP_EXPRESS_BASE_URL}?amount=${amount}`)
      .then(resp => {
        dispatch({ type: "SET_STRIPE_INTENT", resp })

        const orderData = {
          payment_method: "stripe",
          payment_method_title: "card",
          set_paid: false,
          billing: billingAddress,
          shipping: shippingAddress,
          line_items: lineItems,
          shipping_lines: shipping,
          meta_data: [
            {
              key: resp.data.id,
              value: resp.data.client_secret
            }
          ],
        }

        axios.post(`${process.env.REACT_APP_BASE_URL}/wp-json/wc/v3/orders?consumer_key=${process.env.REACT_APP_CONSUMER_KEY}&consumer_secret=${process.env.REACT_APP_CONSUMER_SECRET}`, orderData)
          .then(resp => {
            dispatch({type: "SET_CHECKOUT_ORDER", resp})
          })
          .catch(error => console.log(error))
      })
      .catch(error => console.log(error))
  }
}