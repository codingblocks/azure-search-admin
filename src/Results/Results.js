import React, { Component } from 'react'
import LogList from './LogList'
import SearchRequest from '../Models/SearchRequest.js'

class Results extends Component {
  constructor (props) {
    super(props)
    if (this.props.searchConfig && this.props.searchConfig.endpointConfig) {
      this.request = new SearchRequest(this.props.searchConfig.endpointConfig)
    }
    this.state = {
      configured: !!this.request,
      completedRequests: [],
      testing: false
    }
    this.testConfiguration = this.testConfiguration.bind(this)
  }

  componentDidUpdate () {
    if (!this.request) {
      if (this.props.searchConfig.endpointConfig) {
        this.request = new SearchRequest(this.props.searchConfig.endpointConfig)
        this.setState({ configured: !!this.request })
      }
    }
  }

  testConfiguration () {
    let self = this
    this.setState({ testing: true }, () => {
      this.request.issue({ method: 'GET' }, (request) => {
        const completedRequests = [...self.state.completedRequests, request]
        self.setState({ testing: false, completedRequests: completedRequests })
      })
    })
  }

  render () {
    const configured = this.state.configured
    const testingEnabled = configured && !this.state.testing
    const config = configured && this.request.getConfig()
    const baseSearchUrl = configured ? config.derivedProperties.baseSearchUrl : 'Endpoint Configuration Required'
    const apiKey = configured ? config.endpointConfig.apiKey : 'Endpoint Configuration Required'
    const curlCommand = configured ? config.derivedProperties.baseCurlCommand : 'Endpoint Configuration Required'

    return (
      <div>
        <h3>Search</h3>
        <div hidden={!configured}>
          <p>
            Base Search Url:<br />
            <span className='small'>Note: API Key is a required header, you can't simply hit this url in a browser</span><br />
            <code>{baseSearchUrl}</code>
          </p>
          <p>Query API Key:<br /><code>{apiKey}</code></p>
          <p>Sample CURL command:<br /><code>{curlCommand}</code></p>
          <button type='button' className='btn btn-primary' disabled={!testingEnabled} onClick={this.testConfiguration}>Test</button>
        </div>
        <div hidden={configured}>Endpoint Configuration Required</div>
        <LogList completedRequests={this.state.completedRequests} />
      </div>
    )
  }
}

export default Results
