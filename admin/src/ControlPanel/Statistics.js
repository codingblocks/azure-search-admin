import React, { Component } from 'react'

class Statistice extends Component {
  render () {
    return <div>
      <p><button type='button' className='btn btn-primary' onClick={this.props.onGetServiceStatistics}>Get Service Statistics</button></p>
      <p><button type='button' className='btn btn-primary' onClick={this.props.onGetIndexStatistics}>Get Index Statistics</button></p>
    </div>
  }
}

export default Statistice
