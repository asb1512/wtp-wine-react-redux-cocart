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
          token: action.data.token,
          username: action.data.user_display_name,
          email: action.data.user_email,
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