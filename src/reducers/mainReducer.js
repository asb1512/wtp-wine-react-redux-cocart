const defaultState = {
  userLoggedIn: false,
  userLoading: false,
  validationLoading: false,
  cartLoading: false,
  checkoutLoading: false,
};

export default function mainReducer(state = defaultState, action) {
  switch (action.type) {

    // Pertaining to authentication of user who provides email & password
    case "AUTHENTICATE_USER":
      return {
        ...state,
        userLoggedIn: true,
        currentUser: {
          token: action.resp.data.token,
          username: action.resp.data.user_nicename,
          userFullName: action.resp.data.user_display_name,
          email: action.resp.data.user_email,
        },
      }

    case "SET_USER_INFO":
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          userId: action.resp.data[0].id,
          avatarUrl: action.resp.data[0].avatar_url,
          billing: action.resp.data[0].billing,
          shipping: action.resp.data[0].shipping,
          role: action.resp.data[0].role,
        }
      }

    case "SET_USER_ORDERS":
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          orders: action.resp.data,
        }
      }

    case "AUTHENTICATE_USER_LOADING":
      return { ...state, userLoading: true }

    case "USER_INFO_ERROR":
      return {
        ...state,
        currentError: action.error.message,
      }

    case "USER_ORDERS_ERROR":
      return {
        ...state,
        currentError: action.error.message,
      }

    case "AUTHENTICATION_ERROR":
      return {
        ...state,
        currentError: "Invalid login credentials. Please try again.",
        userLoading: false,
      }

    case "LOGOUT_USER":
      debugger
      return { userLoggedIn: false }




    // Pertaining to validating pre-existing tokens from cookie
    case "VALIDATE_USER_TOKEN_LOADING":
      return { ...state, validationLoading: true }

    case "SET_TOKEN_FROM_COOKIE":
      return {
        ...state,
        userLoggedIn: true,
        validationLoading: false,
        currentUser: {
          ...state.currentUser,
          token: action.userData.token,
          email: action.userData.email,
        }
      }

    case "TOKEN_VALIDATION_ERROR":
      return { ...state, validationLoading: false }




    // pertaining to a user's cart
    case "CART_LOADING":
      return { ...state, cartLoading: true }

    case "SET_USER_CART":
      return {
        ...state,
        userCart: action.resp.data,
        cartLoading: false,
      }




    case "CHECKOUT_LOADING":
      return {
        ...state,
        checkoutLoading: true,
      }

    case "SET_STRIPE_INTENT":
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          stripe: {
            stripeClientSecret: action.resp.data.client_secret,
          }
        }
      }

    case "SET_CHECKOUT_ORDER":
      return {
        ...state,
        checkoutLoading: false,
        currentUser: {
          ...state.currentUser,
          orderCheckout: action.resp.data,
        }
      }




    default: return state
  }
}