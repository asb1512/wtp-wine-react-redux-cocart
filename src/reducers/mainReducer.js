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
        loading: false,
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