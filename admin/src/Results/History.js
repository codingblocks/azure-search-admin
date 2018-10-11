import React, { Component } from 'react'
import RequestResult from './RequestResult.js'
import ResponseModal from './ResponseModal.js'

class History extends Component {
  constructor (props) {
    super(props)
    this.state = { response: null }
  }

  render () {
    const orderedList = this.props.completedRequests.concat([]).reverse()
    return (
      <div className='history-rows'>
        <h3>History</h3>
        {orderedList.map(r =>
          <RequestResult search={r} key={r.request.date} onShowResponse={this.showResponse.bind(this)} />
        )}
        <ResponseModal id='response-modal' response={this.state.response} />
      </div>
    )
  }

  showResponse (response) {
    this.setState({ response: response })
    window.$('#response-modal').modal('show')
  }
}

export default History
