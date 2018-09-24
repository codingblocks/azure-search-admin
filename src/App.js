import React, { Component } from 'react'
import ControlPanel from './ControlPanel/ControlPanel.js'
import Results from './Results/Results.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchConfig: null
    }
  }
  updateConfig(searchConfig) {
    this.setState({
      searchConfig: searchConfig
    })
  }

  render() {
    return (
      <div>
        <header>
          <h1>Azure Search Admin</h1>
        </header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs">
              <ControlPanel onUpdate={(searchConfig) => this.updateConfig(searchConfig)} />
            </div>
            <div className="col-lg">
              <Results searchConfig={this.state.searchConfig} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App