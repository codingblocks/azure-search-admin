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
    return (date1.getTime() - date2.getTime()).toString() + ' ms'
  }

  render () {
    const search = this.state.search
    return (
      <div>
        {search.method} {search.requestUrl}<br />
        {search.statusCode} {search.statusMessage}<br />
        Request Date: {search.requestDate.toString()}<br />
        Duration: {this.dateDiff(search.requestDate, search.responseDate)}<br/>
        <span className='small' onClick={this.toggleResponse}>{this.state.responseToggleText}</span>
        <div hidden={this.state.hideResponse}>
          <ReactJson src={JSON.parse(search.response)} />
        </div>
      </div>
    )
  }
}

export default LogList
