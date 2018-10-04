import React, { Component } from 'react'
import SearchRequest from '../Models/SearchRequest.js'

class Results extends Component {
  constructor (props) {
    super(props)
    this.state = {
      testing: false
    }
  }

  render () {
    const configured = this.props.endpointConfig
    const request = configured && new SearchRequest(this.props.endpointConfig)
    const config = configured && request.getConfig()
    const baseSearchUrl = configured ? config.derivedProperties.baseSearchUrl : 'Endpoint Configuration Required'
    const apiKey = configured ? config.endpointConfig.apiKey : 'Endpoint Configuration Required'
    const curlCommand = configured ? config.derivedProperties.baseCurlCommand : 'Endpoint Configuration Required'

    return (
      <div>
        <div hidden={!configured}>
          <p>
            Base Search Url:<br />
            <span className='small'>Note: API Key is a required header, you can't simply hit this url in a browser</span><br />
            <code>{baseSearchUrl}</code>
          </p>
          <p>Query API Key:<br /><code>{apiKey}</code></p>
          <p>Sample CURL command:<br /><code>{curlCommand}</code></p>
        </div>
        <div hidden={configured}>Endpoint Configuration Required</div>
        <button type='button' className='btn btn-primary' disabled={!configured} onClick={this.props.onTestConfiguration}>Test Endpoint</button>
      </div>
    )
  }
}

export default Results
