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
    this.testConfiguration = this.testConfiguration.bind(this)
  }

  updateConfig (searchConfig) {
    this.setState({
      searchConfig: searchConfig
    })

    window.localStorage.setItem('searchConfig', JSON.stringify(searchConfig))
  }

  testConfiguration () {
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
              <ControlPanel searchConfig={this.state.searchConfig} onUpdate={(searchConfig) => this.updateConfig(searchConfig)} onTestConfiguration={this.testConfiguration} />
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
