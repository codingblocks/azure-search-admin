import React, { Component } from 'react'
import SearchResult from './SearchResult.js'

class History extends Component {
  render () {
    return (
      <div>
        <h3>History</h3>
        {this.props.completedRequests.map(r =>
          <SearchResult search={r} key={r.request.date} />
        )}
      </div>
    )
  }
}

export default History
