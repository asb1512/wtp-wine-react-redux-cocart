const defaultState = {
  userLoggedIn: false,
};

export default function mainReducer(state = defaultState, action) {
  switch (action.type) {
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
      return { ...state, loading: true }

    case "AUTHENTICATION_ERROR":
      return {
        ...state,
        currentError: "Invalid login credentials. Please try again.",
        loading: false,
      }

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

    default: return state
  }
}