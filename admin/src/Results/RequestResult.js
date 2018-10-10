import React, { Component } from 'react'
import ReactJson from 'react-json-view'

class RequestResult extends Component {
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
        <div className='row'>
          <div className='col-3'>
            Search Terms: <span>{search.request.config.search || 'n/a'}</span><br />
            Query Type: <span>{search.request.config.queryType || 'n/a'}</span><br />
            Fuzzy Search: <span>{search.request.config.fuzzySearch || 'n/a'}</span><br />
            Hits: <span>{count}</span>
          </div>
          <div className='col-9'>
            Url: <span className='long-url'>{search.request.config.method} {search.request.url}</span><br />
            Status: <span>{search.response.status} {search.response.statusText}</span><br />
            Request Date: <span>{search.request.date.toString()}</span><br />
            Duration: <span>{this.dateDiff(search.request.date, search.response.date)}</span><br />
          </div>
        </div>
        <span className='small' onClick={this.toggleResponse}>{this.state.responseToggleText}</span>
        <div hidden={this.state.hideResponse}>
          <ReactJson src={result} />
        </div>
      </div>
    )
  }
}

export default RequestResult
