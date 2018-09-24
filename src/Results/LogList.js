import React, { Component } from 'react'
import SearchResult from './SearchResult.js'

const testList = [
  {
    method: 'GET',
    statusCode: 200,
    statusMessage: 'OK',
    requestDate: new Date(),
    responseDate: new Date(),
    requestUrl: 'http://google.com',
    response: JSON.stringify({ test: 'tea' }),
    searchConfig: {}
  }
]

class LogList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      logs: testList
    }
  }

  dateDiff (date1, date2) {
    if (!date2) {
      return 'n/a'
    }
    return (date1.getTime() - date2.getTime()).toString() + ' ms'
  }

  render () {
    return (
      <div>
        {this.state.logs.map(log =>
          <SearchResult search={log} key={log.requestDate} />
        )}
      </div>
    )
  }
}

export default LogList
