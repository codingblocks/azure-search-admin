import React, { Component } from 'react'
import EndpointSettings from './EndpointSettings'
import SearchSettings from './SearchSettings'

class ControlPanel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      endpointConfig: null,
      derivedProperties: null
    }
  }

  updateEndpointSettings (endpointConfig) {
    // TODO ought move this to a logic class somewhere
    const baseSearchUrl = `${endpointConfig.portalEndpoint}/indexes/${endpointConfig.searchIndex}/docs?api-version=${endpointConfig.apiVersion}`
    this.setState({
      endpointConfig: endpointConfig,
      derivedProperties: {
        baseSearchUrl: baseSearchUrl,
        curlCommand: `curl -i -H "Accept: application/json" -H "Content-Type: application/json" -H "api-key: ${endpointConfig.apiKey}" -X GET ${baseSearchUrl}`
      }
    }, this.fireUpdate)
  }

  fireUpdate () {
    if (this.props.onUpdate) {
      this.props.onUpdate(this.state)
    }
  }

  render () {
    return (
      <div id='accordian'>
        <h3>Control Panel</h3>
        <div className='card'>
          <div className='card-header' id='endpoint-configuration-header'>
            <h5 className='mb-0'>
              <button className='btn btn-link' data-toggle='collapse' data-target='#collapse1' aria-expanded='true' aria-controls='collapse1'>
                Endpoint Configuration
              </button>
            </h5>
          </div>
          <div id='collapse1' className='collapse' aria-labelledby='endpoint-configuration-header' data-parent='#accordion'>
            <div className='card-body'>
              <EndpointSettings onUpdate={(endpointConfig) => this.updateEndpointSettings(endpointConfig)} />
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-header' id='search-settings-header'>
            <h5 className='mb-0'>
              <button className='btn btn-link' data-toggle='collapse' data-target='#collapse2' aria-expanded='true' aria-controls='collapse2'>
                Search Settings
              </button>
            </h5>
          </div>
          <div id='collapse2' className='collapse' aria-labelledby='search-settings-header' data-parent='#accordion'>
            <div className='card-body'>
              <SearchSettings />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default ControlPanel
