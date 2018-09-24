import React, { Component } from 'react';

class Results extends Component {

  testConfiguration = () => {
    const url = this.props.searchConfig.derivedProperties.baseSearchUrl
    const apiKey = this.props.searchConfig.endpointConfig.apiKey
    let request = new XMLHttpRequest()
    request.onreadystatechange = function() {
      if (this.readyState == 4) { // Done
        alert(`${this.status}: ${this.statusText}`)
      }
    }
    request.open("GET", url, true)
    request.setRequestHeader("api-key", apiKey)
    request.send()
  }

  render() {
    const config = this.props.searchConfig
    const configured = config && config.derivedProperties && config.derivedProperties && config.endpointConfig
    const baseSearchUrl = configured ? config.derivedProperties.baseSearchUrl : 'Endpoint Configuration Required'
    const apiKey = configured ? config.endpointConfig.apiKey : 'Endpoint Configuration Required'
    const curlCommand = configured ? config.derivedProperties.curlCommand : 'Endpoint Configuration Required'
    return (
      <div>
        <p>Base Search Url: {baseSearchUrl}</p>
        <p>Query API Key: {apiKey}</p>
        <p>Sample CURL command: {curlCommand}</p>
        <button type="button" className="btn btn-primary" disabled={!configured} onClick={this.testConfiguration}>Test</button>
      </div>
    )
  }

}

export default Results
