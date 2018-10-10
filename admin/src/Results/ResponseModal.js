import React, { Component } from 'react'
import ReactJson from 'react-json-view'

class Response extends Component {
  render () {
    const modalContent = this.props.response
      ? <ReactJson src={this.props.response} indentWidth='2' collapsed={1} />
      : 'No response loaded'

    return <div className='modal fade bd-example-modal-lg' tabIndex='-1' role='dialog' id={this.props.id}>
      <div className='modal-dialog modal-lg' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Response</h5>
            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            {modalContent}
          </div>
        </div>
      </div>
    </div>
  }
}

export default Response
