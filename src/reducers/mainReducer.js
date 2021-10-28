const defaultState = {};

export default function mainReducer(state = defaultState, action) {
  switch (action.type) {
    case "AUTHENTICATE_USER":
      return {
        ...state,
        currentUser: action.payload
      }

    case "AUTHENTICATE_USER_LOADING":
      return { ...state, loading: true }

    default: return state
  }
}