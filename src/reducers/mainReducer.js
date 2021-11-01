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

    case "AUTHENTICATE_USER_LOADING":
      return { ...state, loading: true }

    case "AUTHENTICATION_ERROR":
      return {
        ...state,
        currentError: {
          errorMessage: action.error.message,
        },
        loading: false,
      }

    default: return state
  }
}