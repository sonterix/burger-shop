import { LOADER_ON, LOADER_OFF, SET_ALERT, UNSET_ALERT } from "./actions"

const initialState = {
  loader: false,
  alert: {
    status: false,
    message: ''
  }
}

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADER_ON:
    case LOADER_OFF:
      return { ...state, loader: payload }

    case SET_ALERT:
    case UNSET_ALERT:
      return { ...state, alert: payload }

    default:
      return state
  }
}

export default appReducer