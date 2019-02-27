import React, { Component } from 'react'

class DataManagement extends Component {
  handleAction (event) {
    event.preventDefault()
    const requestConfig = {
      searchAction: this.refs.form['searchAction'].value,
      uploadDocument: JSON.parse(this.refs.form['uploadDocument'].value)
    }
    if (this.props.onUploadAction) {
      this.props.onUploadAction(requestConfig)
    }
  }

  render () {
    return (
      <form onSubmit={this.handleAction.bind(this)} ref='form'>
        <div className='form-group'>
          <label htmlFor='searchAction'>Action</label>
          <select
            id='searchAction'
            className='form-control'
            aria-describedby='searchActionHelp'
            required
          >
            <option>Upload</option>
            <option>Merge</option>
            <option>Merge / Upload</option>
            <option>Delete</option>
          </select>
          <small id='searchActionHelp' className='form-text text-muted'>
            Delete only requires the document ID
          </small>
        </div>

        <div className='form-group'>
          <label htmlFor='uploadDocument'>Update data</label>
          <textarea
            id='uploadDocument'
            height='100'
            width='100%'
            placeholder='Paste your document here'
            className='form-control'
            aria-describedby='uploadDocumentHelp'
          />
          <small id='uploadDocumentHelp' className='form-text text-muted'>
            The different actions have different requirements, but for the most
            part passing whole documents should work fine. Read more :{' '}
            <a href='https://docs.microsoft.com/en-us/azure/search/search-import-data-rest-api'>
              here{' '}
            </a>
          </small>
        </div>

        <div
          aria-label='Action Buttons for Sending Requests'
          className='clearfix'
        >
          <button type='submit' className='btn btn-primary float-right'>
            Upload
          </button>
        </div>
      </form>
    )
  }
}

export default DataManagement
