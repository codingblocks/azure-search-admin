import React, { Component } from 'react'
import SearchResult from './SearchResult.js'

class LogList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      completedRequests: this.props.completedRequests
    }
  }

  componentDidUpdate (props) {
    if (props.completedRequests.length !== this.state.completedRequests.length) {
      this.setState({ completedRequests: props.completedRequests })
    }
  }

  render () {
    return (
      <div>
        <h3>History</h3>
        {this.state.completedRequests.map(completedRequest =>
          <SearchResult search={completedRequest} key={completedRequest.request.date} />
        )}
      </div>
    )
  }
}

export default LogList
