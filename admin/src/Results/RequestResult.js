import React, { Component } from 'react'

class RequestResult extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search: this.props.search,
      responseToggleText: 'show response'
    }
  }

  showResponse (e) {
    e.preventDefault()
    const search = this.state.search
    const response =
      search && search.response && search.response.responseText
        ? JSON.parse(search.response.responseText)
        : {}
    if (this.props.onShowJson) {
      this.props.onShowJson('Response', response)
    }
  }

  showRequest (e) {
    e.preventDefault()
    debugger
    const search = this.state.search
    const message = {
      method: this.state.search.request.method,
      url: this.state.search.request.url,
      headers: this.state.search.request.headers,
      body: search.request.body ? JSON.parse(search.request.body) : {}
    }

    if (this.props.onShowJson) {
      this.props.onShowJson('Request', message)
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
    const result =
      search && search.response && search.response.responseText
        ? JSON.parse(search.response.responseText)
        : {}
    const count = result.value ? result.value.length : 0
    const request = search.request || {}
    const config = request.config || {}
    const time = `${search.request.date.getHours()}:${search.request.date.getMinutes()}:${search.request.date.getSeconds()}`
    const formattedDate = `${search.request.date.toLocaleDateString()} ${time}`
    return (
      <div className='entry'>
        <b>{config.title}</b>
        <br />
        <span
          className='small'
          data-toggle='tooltip'
          data-placement='top'
          title='Note: you must pass an API key as a header'
        >
          {request.method} {search.request.url}
        </span>
        <br />
        <button
          className='small btn-link'
          onClick={this.showRequest.bind(this)}
        >
          view request
        </button>
        <button
          className='small btn-link'
          onClick={this.showResponse.bind(this)}
        >
          view response
        </button>
        <br />
        <br />
        <div className='row'>
          <div className='col-3'>
            Search Terms: <span>{config.search || 'n/a'}</span>
            <br />
            Query Type: <span>{config.queryType || 'n/a'}</span>
            <br />
            Fuzzy Search: <span>{config.fuzzySearch || 'n/a'}</span>
            <br />
            Hits: <span>{count}</span>
          </div>
          <div className='col-9'>
            Status:{' '}
            <span>
              {search.response.status} {search.response.statusText}
            </span>
            <br />
            Request Date: <span>{formattedDate}</span>
            <br />
            Duration:{' '}
            <span>
              {this.dateDiff(search.request.date, search.response.date)}
            </span>
            <br />
          </div>
        </div>
      </div>
    )
  }
}

export default RequestResult
