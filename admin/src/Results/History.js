import React, { Component } from 'react'
import RequestResult from './RequestResult.js'
import JSONModal from './JSONModal.js'

class History extends Component {
  constructor (props) {
    super(props)
    this.state = { title: null, json: null }
  }

  render () {
    const orderedList = this.props.completedRequests.concat([]).reverse()
    return (
      <div className='history-rows'>
        <h3>History</h3>
        {orderedList.map(r => (
          <RequestResult
            search={r}
            key={r.request.date}
            onShowJson={this.showJson.bind(this)}
          />
        ))}
        <JSONModal
          id='response-modal'
          title={this.state.title}
          json={this.state.json}
        />
      </div>
    )
  }

  showJson (title, json) {
    this.setState({ title, json })
    window.$('#response-modal').modal('show')
  }
}

export default History
