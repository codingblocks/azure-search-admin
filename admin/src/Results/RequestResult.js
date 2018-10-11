import React, { Component } from 'react'

class RequestResult extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search: this.props.search,
      responseToggleText: 'show response'
    }
    this.showResponse = this.showResponse.bind(this)
  }

  showResponse (e) {
    e.preventDefault()
    const search = this.state.search
    const response = JSON.parse(search.response.responseText)
    if (this.props.onShowResponse) {
      this.props.onShowResponse(response)
    }
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
    const config = search.request.config || {}
    const time = `${search.request.date.getHours()}:${search.request.date.getMinutes()}:${search.request.date.getSeconds()}`
    const formattedDate = `${search.request.date.toLocaleDateString()} ${time}`
    return (
      <div>
        <b>{config.title}</b>
        <div className='row'>
          <div className='col-3'>
            Search Terms: <span>{config.search || 'n/a'}</span><br />
            Query Type: <span>{config.queryType || 'n/a'}</span><br />
            Fuzzy Search: <span>{config.fuzzySearch || 'n/a'}</span><br />
            Hits: <span>{count}</span>
          </div>
          <div className='col-9'>
            Url: <span className='long-url'>{config.method} {search.request.url}</span><br />
            Status: <span>{search.response.status} {search.response.statusText}</span><br />
            Request Date: <span>{formattedDate}</span><br />
            Duration: <span>{this.dateDiff(search.request.date, search.response.date)}</span><br />
          </div>
        </div>
        <a href='#' className='small' onClick={this.showResponse}>view response</a>
      </div>
    )
  }
}

export default RequestResult
