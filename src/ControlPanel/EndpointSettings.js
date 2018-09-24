import React, { Component } from 'react'

class EndpointSettings extends Component {
  constructor (props) {
    super(props)
    this.state = {
      portalEndpoint: '',
      searchIndex: '',
      apiVersion: '',
      apiKey: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()

    const inputs = ['portalEndpoint', 'searchIndex', 'apiVersion', 'apiKey']
    let nextState = {}
    inputs.forEach((i) => { nextState[i] = event.target.elements[i].value })

    this.setState(nextState, this.fireUpdate)
  }

  fireUpdate () {
    if (this.props.onUpdate) {
      this.props.onUpdate(this.state)
    }
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='portalEndpoint'>Endpoint</label>
          <input type='url' id='portalEndpoint' defaultValue={this.state.portalEndpoint} placeholder='Sample: https://podcasts.search.windows.net' className='form-control' aria-describedby='portalEndpointHelp' required />
          <small id='portalEndpointHelp' className='form-text text-muted'>Full url of the search endpoint, without any index or document information</small>
        </div>
        <div className='searchIndex'>
          <label htmlFor='searchIndex'>Index</label>
          <input id='searchIndex' defaultValue={this.state.searchIndex} className='form-control' aria-describedby='searchIndexHelp' placeholder='Sample: podcasts' required />
          <small id='searchIndexHelp' className='form-text text-muted'>Name of the search index, because one endpoint can service more than one index</small>
        </div>
        <div className='form-group'>
          <label htmlFor='apiVersion'>Azure Search API Version</label>
          <select id='apiVersion' defaultValue={this.state.apiVersion} className='form-control' aria-describedby='apiVersionHelp' required>
            <option>2017-11-11-Preview</option>
            <option>2017-11-11</option>
            <option>2016-09-01</option>
          </select>
          <small id='apiVersionHelp' className='form-text text-muted'>Which API Version to use, more details here: <a href='https://docs.microsoft.com/en-us/rest/api/searchservice/' title='More information on Azure Search REST API versions'>https://docs.microsoft.com/en-us/rest/api/searchservice/</a></small>
        </div>
        <div className='form-group'>
          <label htmlFor='apiKey'>Query Key</label>
          <input id='apiKey' className='form-control' type='text' pattern='[A-Z0-9]{32}' aria-describedby='apiKeyHelp' placeholder='Sample: 18EA821D408444FCF3DC3EC4F3790FEC' required />
          <small id='apiKeyHelp' defaultValue={this.state.apiKey} className='form-text text-muted'>Enter the API Key to use for searching, do *not* enter an admin key</small>
        </div>
        <button type='submit' className='btn btn-primary'>Save Endpoint Configuration</button>
      </form>
    )
  }
}

export default EndpointSettings
