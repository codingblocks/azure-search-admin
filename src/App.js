import React, { Component } from 'react';
import ControlPanel from './ControlPanel/ControlPanel.js';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <header>
          <h1>Azure Search Admin</h1>
          <ControlPanel />
        </header>
      </div>
    );
  }
}

export default App;