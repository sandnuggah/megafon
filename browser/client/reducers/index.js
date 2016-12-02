import {routerReducer as routing} from 'react-router-redux'
import {combineReducers} from 'redux'
import events from './events'
import channels from './channels'

export default combineReducers({
  routing,
  events,
  channels
})
