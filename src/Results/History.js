import React, { Component } from 'react'
import RequestResult from './RequestResult.js'

class History extends Component {
  render () {
    return (
      <div className='history-rows'>
        <h3>History</h3>
        {this.props.completedRequests.reverse().map(r =>
          <RequestResult search={r} key={r.request.date} />
        )}
      </div>
    )
  }
}

export default History
