import React, { Component } from 'react'
import ControlPanel from './ControlPanel/ControlPanel.js'
import History from './Results/History.js'

import SearchRequest from './Models/SearchRequest'

class App extends Component {
  constructor (props) {
    super(props)
    const serializedSearchConfig = window.localStorage.getItem('searchConfig')
    const searchConfig = serializedSearchConfig ? JSON.parse(serializedSearchConfig) : null
    this.state = {
      searchConfig: searchConfig,
      completedRequests: []
    }
    this.testConfig = this.testConfig.bind(this)
    this.updateConfig = this.updateConfig.bind(this)
  }

  updateConfig (searchConfig, callback) {
    this.setState({
      searchConfig: searchConfig
    }, callback)
    window.localStorage.setItem('searchConfig', JSON.stringify(searchConfig))
  }

  clearCache () {
    window.localStorage.clear()
    window.location.reload()
  }

  testConfig () {
    if (!this.state.searchConfig) {
      window.alert('Endpoint configuration is required')
    }
    const request = new SearchRequest(this.state.searchConfig.endpointConfig)
    request.issue({ method: 'GET' }, (r) => {
      const completedRequests = [...this.state.completedRequests, r]
      this.setState({ completedRequests: completedRequests })
    })
  }

  render () {
    return (
      <div>
        <header>
          <h1>Azure Search Admin</h1>
        </header>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xs'>
              <ControlPanel searchConfig={this.state.searchConfig} onUpdate={this.updateConfig} onTestConfiguration={this.testConfig} onClearCache={() => this.clearCache()} />
            </div>
            <div className='col-lg'>
              <History completedRequests={this.state.completedRequests} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
