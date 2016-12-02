import {handleActions} from 'redux-actions'
import {ADD_EVENT, SET_CHANNEL_FILTER} from 'constants'

const initialState = {
  channelFilter: null,
  eventList: []
}

export default handleActions({
  [ADD_EVENT] (state, action) {
    return Object.assign({}, state, {
      eventList: [action.event, ...state.eventList]
    })
  },

  [SET_CHANNEL_FILTER] (state, action) {
    return Object.assign({}, state, {
      channelFilter: action.channelFilter
    })
  }
}, initialState)
