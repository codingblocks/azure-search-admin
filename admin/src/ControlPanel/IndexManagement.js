import React, { Component } from 'react'

class IndexManagement extends Component {
  handleCreate (event) {
    event.preventDefault()
    const indexDefinition = JSON.stringify(
      JSON.parse(this.refs.form['index'].value)
    ) // weak validation
    if (this.props.onCreateIndex) {
      this.props.onCreateIndex(indexDefinition)
    }
  }

  deleteIndex () {
    const confirmed = window.confirm(
      `Are you sure you want to delete this index?`
    )
    if (confirmed && this.props.onDeleteIndex) {
      this.props.onDeleteIndex()
    }
  }

  render () {
    return (
      <form onSubmit={this.handleCreate.bind(this)} ref='form'>
        <div className='form-group'>
          <label htmlFor='newIndex'>New Index</label>
          <textarea
            id='index'
            height='100'
            width='100%'
            placeholder='Paste your index definition here'
            className='form-control'
            aria-describedby='newIndexHelp'
          />
          <small id='newIndexHelp' className='form-text text-muted'>
            This defines your fields, synonyms, and suggester. More info:{' '}
            <a href='https://docs.microsoft.com/en-us/rest/api/searchservice/create-index'>
              here{' '}
            </a>
          </small>
        </div>

        <div
          aria-label='Action Buttons for Sending Requests'
          className='clearfix'
        >
          <button
            type='button'
            className='btn btn-link float-left btn-danger'
            onClick={this.deleteIndex.bind(this)}
          >
            Delete Index
          </button>
          <button type='submit' className='btn btn-primary float-right'>
            Create Index
          </button>
        </div>
      </form>
    )
  }
}

export default IndexManagement
