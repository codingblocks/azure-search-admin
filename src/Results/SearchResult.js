import React, { Component } from 'react'
import ReactJson from 'react-json-view'

class LogList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search: this.props.search,
      hideResponse: true,
      responseToggleText: 'show response'
    }
    this.toggleResponse = this.toggleResponse.bind(this)
  }

  toggleResponse () {
    const currentlyHidden = this.state.hideResponse
    this.setState({
      hideResponse: !currentlyHidden,
      responseToggleText: !currentlyHidden ? 'show response' : 'hide response'
    })
  }

  dateDiff (date1, date2) {
    if (!date2) {
      return 'n/a'
    }
    return (date2.getTime() - date1.getTime()).toString() + ' ms'
  }

  render () {
    const search = this.state.search
    const result = JSON.parse(search.response.responseText)
    const count = result.value ? result.value.length : 0

    return (
      <div>
        Url: {search.request.config.method} {search.request.url}<br />
        Status: {search.response.status} {search.response.statusText}<br />
        Request Date: {search.request.date.toString()}<br />
        Duration: {this.dateDiff(search.request.date, search.response.date)}<br />
        Count: {count}<br />
        <span className='small' onClick={this.toggleResponse}>{this.state.responseToggleText}</span>
        <div hidden={this.state.hideResponse}>
          <ReactJson src={result} />
        </div>
      </div>
    )
  }
}

export default LogList
