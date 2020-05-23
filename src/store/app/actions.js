const LOADER_ON = 'LOADER_ON'
const LOADER_OFF = 'LOADER_OFF'
const SET_ALERT = 'SET_ALERT'
const UNSET_ALERT = 'UNSET_ALERT'

const loaderOnAction = () => ({
  type: LOADER_ON,
  payload: true
})

const loaderOffAction = () => ({
  type: LOADER_OFF,
  payload: false
})

const setAlertAction = message => ({
  type: SET_ALERT,
  payload: { status: true, message: message }
})

const unsetAlertAction = () => ({
  type: UNSET_ALERT,
  payload: { status: false, message: '' }
})

export {
  LOADER_ON, LOADER_OFF, SET_ALERT, UNSET_ALERT,
  loaderOnAction, loaderOffAction, setAlertAction, unsetAlertAction
}