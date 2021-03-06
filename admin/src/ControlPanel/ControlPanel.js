import React, { Component } from 'react'
import EndpointSettings from './EndpointSettings'
import RequestSettings from './RequestSettings'
import IndexManagement from './IndexManagement'
import DataManagement from './DataManagement'
import EndpointDisplay from './EndpointDisplay'
import Synonyms from './Synonyms'
import Statistics from './Statistics'

class ControlPanel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      endpointConfig: this.props.searchConfig
        ? this.props.searchConfig.endpointConfig
        : null
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
              <button
                className='btn btn-link'
                data-toggle='collapse'
                data-target='#collapse-endpoint'
                aria-expanded='true'
                aria-controls='collapse-endpoint'
              >
                Endpoint Configuration{' '}
                <span hidden={!this.state.endpointConfig}>✓</span>
              </button>
            </h5>
          </div>
          <div
            id='collapse-endpoint'
            className='collapse'
            aria-labelledby='header-endpoint'
            data-parent='#accordion'
          >
            <div className='card-body'>
              <EndpointSettings
                endpointConfig={this.state.endpointConfig}
                onUpdate={endpointConfig =>
                  this.updateEndpointSettings(endpointConfig)
                }
                onClearCache={this.props.onClearCache}
              />
              <hr hidden={!this.state.endpointConfig} />
              <EndpointDisplay
                endpointConfig={this.state.endpointConfig}
                onTestConfiguration={this.props.onTestConfiguration}
                hideTestButton
              />
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-header' id='header-index'>
            <h5 className='mb-0'>
              <button
                className='btn btn-link'
                data-toggle='collapse'
                data-target='#collapse-index'
                aria-expanded='true'
                aria-controls='collapse-index'
                disabled={!this.state.endpointConfig}
              >
                Index Management{' '}
                <span hidden={this.state.endpointConfig}>requires config</span>
              </button>
            </h5>
          </div>
          <div
            id='collapse-index'
            className='collapse'
            aria-labelledby='header-index'
            data-parent='#accordion'
          >
            <div className='card-body'>
              <IndexManagement
                onDeleteIndex={this.props.onDeleteIndex.bind(this)}
                onCreateIndex={this.props.onCreateIndex.bind(this)}
              />
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-header' id='header-data'>
            <h5 className='mb-0'>
              <button
                className='btn btn-link'
                data-toggle='collapse'
                data-target='#collapse-data'
                aria-expanded='true'
                aria-controls='collapse-data'
                disabled={!this.state.endpointConfig}
              >
                Data Management{' '}
                <span hidden={this.state.endpointConfig}>requires config</span>
              </button>
            </h5>
          </div>
          <div
            id='collapse-data'
            className='collapse'
            aria-labelledby='header-data'
            data-parent='#accordion'
          >
            <div className='card-body'>
              <DataManagement
                onUploadAction={this.props.onUploadAction.bind(this)}
              />
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-header' id='header-request'>
            <h5 className='mb-0'>
              <button
                className='btn btn-link'
                data-toggle='collapse'
                data-target='#collapse-request'
                aria-expanded='true'
                aria-controls='collapse-request'
                disabled={!this.state.endpointConfig}
              >
                Request Settings{' '}
                <span hidden={this.state.endpointConfig}>requires config</span>
              </button>
            </h5>
          </div>
          <div
            id='collapse-request'
            className='collapse'
            aria-labelledby='header-request'
            data-parent='#accordion'
          >
            <div className='card-body'>
              <RequestSettings onSearch={this.props.onSearch.bind(this)} />
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-header' id='header-synonyms'>
            <h5 className='mb-0'>
              <button
                className='btn btn-link'
                data-toggle='collapse'
                data-target='#collapse-synonyms'
                aria-expanded='true'
                aria-controls='collapse-synonyms'
                disabled={!this.state.endpointConfig}
              >
                Synonyms{' '}
                <span hidden={this.state.endpointConfig}>requires config</span>
              </button>
            </h5>
          </div>
          <div
            id='collapse-synonyms'
            className='collapse'
            aria-labelledby='header-synonyms'
            data-parent='#accordion'
          >
            <div className='card-body'>
              <Synonyms onListSynonyms={this.props.onListSynonyms.bind(this)} />
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-header' id='header-statistics'>
            <h5 className='mb-0'>
              <button
                className='btn btn-link'
                data-toggle='collapse'
                data-target='#collapse-statistics'
                aria-expanded='true'
                aria-controls='collapse-statistics'
                disabled={!this.state.endpointConfig}
              >
                Statistics{' '}
                <span hidden={this.state.endpointConfig}>requires config</span>
              </button>
            </h5>
          </div>
          <div
            id='collapse-statistics'
            className='collapse'
            aria-labelledby='header-statistics'
            data-parent='#accordion'
          >
            <div className='card-body'>
              <Statistics
                onGetServiceStatistics={this.props.onGetServiceStatistics.bind(
                  this
                )}
                onGetIndexStatistics={this.props.onGetIndexStatistics.bind(
                  this
                )}
              />
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-header' id='header-todo'>
            <h5 className='mb-0'>
              <button
                className='btn btn-link'
                data-toggle='collapse'
                data-target='#collapse-todo'
                aria-expanded='true'
                aria-controls='collapse-todo'
              >
                TODO{' '}
              </button>
            </h5>
          </div>
          <div
            id='collapse-todo'
            className='collapse'
            aria-labelledby='header-todo'
            data-parent='#accordion'
          >
            <div className='card-body'>
              <p>
                This is a work in progress, here's a rough ordered list of
                priorities.{' '}
                <a href='https://github.com/codingblocks/azure-search-admin'>
                  Feel free to submit a PR
                </a>
                !
              </p>
              <ul>
                <li>Aggregates</li>
                <li>Scoring Profile</li>
                <li>Field-scoped queries</li>
                <li>Suggestions</li>
                <li>Term Boosting</li>
                <li>Proximity Search</li>
                <li>Paging</li>
                <li>Highlight pre/post tag</li>
                <li>Sorting</li>
                <li>
                  <a
                    href='https://docs.microsoft.com/en-us/rest/api/searchservice/indexer-operations'
                    title='More about indexer operations'
                  >
                    Indexer Operations
                  </a>
                </li>
                <li>Skillset Operations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ControlPanel
