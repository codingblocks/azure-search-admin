import React, { Component } from 'react'
import ControlPanel from './ControlPanel/ControlPanel.js'
import History from './Results/History.js'

import SearchRequest from './Models/SearchRequest'
import SynonymListRequest from './Models/SynonymListRequest'

class App extends Component {
  constructor (props) {
    super(props)
    const serializedSearchConfig = window.localStorage.getItem('searchConfig')
    const searchConfig = serializedSearchConfig ? JSON.parse(serializedSearchConfig) : null
    this.state = {
      searchConfig: searchConfig,
      completedRequests: []
    }
  }

  updateConfig (searchConfig, callback) {
    this.setState({
      searchConfig: searchConfig
    }, callback)
    window.localStorage.setItem('searchConfig', JSON.stringify(searchConfig))
  }

  search (requestConfig) {
    if (!this.state.searchConfig) {
      window.alert('Endpoint configuration is required')
    }
    const request = new SearchRequest(this.state.searchConfig.endpointConfig, requestConfig)
    this.issueAndLogRequest(request, requestConfig)
  }

  listSynonyms () {
    if (!this.state.searchConfig) {
      window.alert('Endpoint configuration is required')
    }
    const request = new SynonymListRequest(this.state.searchConfig.endpointConfig)
    this.issueAndLogRequest(request)
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

  issueAndLogRequest (request, requestConfig) {
    request.issue(requestConfig, (r) => {
      const completedRequests = [...this.state.completedRequests, r]
      this.setState({ completedRequests: completedRequests })
    })
  }

  clearCache () {
    window.localStorage.clear()
    window.location.reload()
  }

  render () {
    return (
      <div>
        <header>
          <h1>Azure Search Query Builder</h1>
        </header>
        
        <div className='app-container'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-xs'>
                <ControlPanel
                  searchConfig={this.state.searchConfig}
                  
                  onClearCache={this.clearCache.bind(this)}
                  onUpdate={this.updateConfig.bind(this)}
                  onTestConfiguration={this.testConfig.bind(this)}
                  onSearch={this.search.bind(this)}
                  onListSynonyms={this.listSynonyms.bind(this)}
                />
              </div>
              <div className='col-lg'>
                <History completedRequests={this.state.completedRequests} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App