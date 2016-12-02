import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from 'actions'
import Channel from 'components/Channel'

class ChannelList extends Component {
  render () {
    const channels = this.props.channels.map((channel, index) => {
      return <Channel key={index} {...channel} />
    })

    return (
      <ol>
        {channels}
      </ol>
    )
  }
}

function mapStateToProps (state) {
  return {
    channels: state.channels.channelList
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelList)
