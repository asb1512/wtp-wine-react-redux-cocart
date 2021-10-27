const defaultState = {
  currentUser: {}
}

export default function mainReducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        currentUser: action.payload
      }

    case "OAUTH_TWITCH_LOADING":
      return {
        ...state,
        currentUser: {
          twitch: { loading: true }
        }
      }

    case "OAUTH_TWITCH":
      return

    default: return state
  }
}