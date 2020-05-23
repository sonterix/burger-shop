import { combineReducers } from 'redux'
import appReducer from './app/reducers'
import burgerBuilderReducer from './burgerBuilder/reducers'

export const rootReducer = combineReducers({
  app: appReducer,
  burgerBuilder: burgerBuilderReducer
})