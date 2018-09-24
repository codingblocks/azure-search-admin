import React, { Component } from 'react'
import LogList from './LogList'

class Results extends Component {
  testConfiguration () {
    const url = this.props.searchConfig.derivedProperties.baseSearchUrl
    const apiKey = this.props.searchConfig.endpointConfig.apiKey
    let request = new window.XMLHttpRequest()
    request.onreadystatechange = function () {
      if (this.readyState === 4) { // Done
        window.alert(`${this.status}: ${this.statusText}`)
      }
    }
    request.open('GET', url, true)
    request.setRequestHeader('api-key', apiKey)
    request.send()
  }

  render () {
    const config = this.props.searchConfig
    const configured = config && config.derivedProperties && config.derivedProperties && config.endpointConfig
    const baseSearchUrl = configured ? config.derivedProperties.baseSearchUrl : 'Endpoint Configuration Required'
    const apiKey = configured ? config.endpointConfig.apiKey : 'Endpoint Configuration Required'
    const curlCommand = configured ? config.derivedProperties.curlCommand : 'Endpoint Configuration Required'
    return (
      <div>
        <h3>Search</h3>
        <p>
          Base Search Url:<br />
          <span className='small'>Note: API Key is a required header, you can't simply hit this url in a browser</span><br />
          <code>{baseSearchUrl}</code>
        </p>
        <p>Query API Key:<br /><code>{apiKey}</code></p>
        <p>Sample CURL command:<br /><code>{curlCommand}</code></p>
        <button type='button' className='btn btn-primary' disabled={!configured} onClick={this.testConfiguration}>Test</button>
        <LogList />
      </div>
    )
  }
}

export default Results
