import React, { Component } from 'react'
import EndpointSettings from './EndpointSettings'
import RequestSettings from './RequestSettings'
import EndpointDisplay from './EndpointDisplay'
import Synonyms from './Synonyms'

class ControlPanel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      endpointConfig: this.props.searchConfig ? this.props.searchConfig.endpointConfig : null
    }
  }

  updateEndpointSettings (endpointConfig) {
    this.setState({ endpointConfig: endpointConfig }, this.fireUpdate)
  }

  fireUpdate () {
    if (this.props.onUpdate) {
      this.props.onUpdate(this.state, () => {
        if (this.props.onTestConfiguration) {
          this.props.onTestConfiguration()
        }
      })
    }
  }

  render () {
    return (
      <div id='accordian' className='control-panel'>
        <h3>Control Panel</h3>
        <div className='card'>
          <div className='card-header' id='header-endpoint'>
            <h5 className='mb-0'>
              <button className='btn btn-link' data-toggle='collapse' data-target='#collapse-endpoint' aria-expanded='true' aria-controls='collapse-endpoint'>
                Endpoint Configuration <span hidden={!this.state.endpointConfig}>✓</span>
              </button>
            </h5>
          </div>
          <div id='collapse-endpoint' className='collapse' aria-labelledby='header-endpoint' data-parent='#accordion'>
            <div className='card-body'>
              <EndpointSettings endpointConfig={this.state.endpointConfig} onUpdate={(endpointConfig) => this.updateEndpointSettings(endpointConfig)} onClearCache={this.props.onClearCache} />
              <hr hidden={!this.state.endpointConfig} />
              <EndpointDisplay endpointConfig={this.state.endpointConfig} onTestConfiguration={this.props.onTestConfiguration} hideTestButton />
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-header' id='header-request'>
            <h5 className='mb-0'>
              <button className='btn btn-link' data-toggle='collapse' data-target='#collapse-request' aria-expanded='true' aria-controls='collapse-request' disabled={!this.state.endpointConfig}>
                Request Settings <span hidden={this.state.endpointConfig}>requires config</span>
              </button>
            </h5>
          </div>
          <div id='collapse-request' className='collapse' aria-labelledby='header-request' data-parent='#accordion'>
            <div className='card-body'>
              <RequestSettings onSearch={this.props.onSearch.bind(this)} />
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-header' id='header-synonyms'>
            <h5 className='mb-0'>
              <button className='btn btn-link' data-toggle='collapse' data-target='#collapse-synonyms' aria-expanded='true' aria-controls='collapse-synonyms' disabled>
                Synonyms <span hidden={this.state.endpointConfig}>requires config</span>
              </button>
            </h5>
          </div>
          <div id='collapse-synonyms' className='collapse' aria-labelledby='header-synonyms' data-parent='#accordion'>
            <div className='card-body'>
              <Synonyms onListSynonyms={this.props.onListSynonyms.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ControlPanel
