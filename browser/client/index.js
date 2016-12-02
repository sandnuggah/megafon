import {Router, Route, Redirect, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './containers/App'
import ChannelList from './containers/ChannelList'
import EventList from './containers/EventList'
import configure from './store'

const store = configure()
const history = syncHistoryWithStore(browserHistory, store)

import moment from 'moment'
moment.locale('sv')

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Redirect from='/' to='channels' />

      <Route path='/' component={App}>
        <Route path='channels' component={ChannelList} />
        <Route path='channels/:idChannel' component={EventList} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
