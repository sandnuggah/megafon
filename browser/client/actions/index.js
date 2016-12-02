import {
  ADD_CHANNEL,
  ADD_EVENT,
  SET_CHANNEL_FILTER,
  SET_LIVE_TOGGLE
} from 'constants'

export function addChannel (channel) {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_CHANNEL, channel
    })
  }
}

export function addEvent (event) {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_EVENT, event
    })
  }
}

export function setChannelFilter (channelFilter) {
  return (dispatch, getState) => {
    dispatch({
      type: SET_CHANNEL_FILTER, channelFilter
    })
  }
}

export function setLiveToggle (isLive) {
  return (dispatch, getState) => {
    dispatch({
      type: SET_LIVE_TOGGLE, isLive
    })
  }
}
