import React, { Component } from 'react'

class RequestSettings extends Component {
  constructor (props) {
    super(props)
    this.state = {
      queryType: 'simple'
    }
    this.changeQueryType = this.changeQueryType.bind(this)
    this.reset = this.reset.bind(this)
  }

  changeQueryType (event) {
    this.setState({ queryType: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()

    const requestConfigList = [].filter.call(this.refs.form.elements, (i) => i.tagName === 'INPUT' || i.tagName === 'SELECT').map((i) => { return { key: i.id, value: i.value } })
    const requestConfig = requestConfigList.reduce((map, o) => {
      map[o.key] = o.value
      return map
    }, {})

    if (this.props.onRequest) {
      this.props.onRequest(requestConfig)
    }
  }

  reset () {
    this.refs.form.reset()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} ref='form'>
        <div className='form-group'>
          <label htmlFor='search'>Query</label>
          <input id='search' placeholder='Samples: Coding+Blocks, NOT Docker, React | VueJs, -JavaScript' className='form-control' aria-describedby='searchHelp' />
          <small id='searchHelp' className='form-text text-muted'>Examples, including wild cards and regex <a href='https://docs.microsoft.com/en-us/rest/api/searchservice/simple-query-syntax-in-azure-search'>here</a></small>
        </div>
        <div className='form-group'>
          <label htmlFor='maxResults'>Top</label>
          <input type='number' id='maxResults' className='form-control' aria-describedby='maxResultsHelp' placeholder='Number of results to return, default is 50' />
          <small id='maxResultsHelp' className='form-text text-muted'>Specifying a value greater than 1000 and there are more than 1000 results, only the first 1000 results will be returned, along with a link to the next page of results.</small>
        </div>
        <div className='form-group'>
          <label htmlFor='queryType'>Query Type</label>
          <select id='apiVersion' className='form-control' aria-describedby='queryTypeHelp' required value={this.state.queryType} onChange={this.changeQueryType}>
            <option value='simple'>Simple</option>
            <option value='full'>Full</option>
          </select>
          <small id='queryTypeHelp' className='form-text text-muted'>More details <a href='https://docs.microsoft.com/en-us/rest/api/searchservice/lucene-query-syntax-in-azure-search' title='More information on Lucene Query Syntax'>here</a></small>
        </div>
        <div className='form-group'>
          <label htmlFor='highlighting'>Highlighting</label>
          <select id='highlighting' className='form-control' aria-describedby='highlightingHelp'>
            <option value=''>No</option>
            <option>Yes</option>
          </select>
          <small id='highlightHelp' className='form-text text-muted'>Optionally can set <a href='https://docs.microsoft.com/en-us/rest/api/searchservice/search-documents' title='More information on highlighting'>pre/post tags</a></small>
        </div>
        <div className='form-group'>
          <label htmlFor='fuzzySearch'>Fuzzy Search (requires "full" query type)</label>
          <select id='fuzzySearch' className='form-control' aria-describedby='fuzzySearchHelp' required disabled={this.state.queryType === 'simple'}>
            <option value=''>0 (no fuzzy search)</option>
            <option>1</option>
            <option>2</option>
          </select>
          <small id='fuzzySearchHelp' className='form-text text-muted'>Applies to terms only, not phrases. More <a href='https://lucene.apache.org/core/4_10_2/queryparser/org/apache/lucene/queryparser/classic/package-summary.html' title='More information on searches here'>here</a></small>
        </div>
        <div aria-label='Action Buttons for Sending Requests' className='clearfix'>
          <button type='button' className='btn float-left' onClick={this.reset}>Reset</button>
          <button type='submit' className='btn btn-primary float-right'>Send Request</button>
        </div>
        <hr />
        <h3>TODO</h3>
        <ul>
          <li>Scoring Profile</li>
          <li>Field-scoped queries</li>
          <li>Term Boosting</li>
          <li>Proximity Search</li>
          <li>Paging</li>
          <li>Highlight pre/post tag</li>
          <li>Sorting</li>
          <li><a href='https://docs.microsoft.com/en-us/rest/api/searchservice/index-operations' title='More about index operations'>Index Operations</a></li>
          <li><a href='https://docs.microsoft.com/en-us/rest/api/searchservice/document-operations' title='More about document operations'>Document Operations</a></li>
          <li><a href='https://docs.microsoft.com/en-us/rest/api/searchservice/indexer-operations' title='More about indexer operations'>Indexer Operations</a></li>
          <li><a href='https://docs.microsoft.com/en-us/rest/api/searchservice/get-service-statistics' title='More information about Service Stats'>Service Stats</a></li>
          <li>Skillset Operations</li>
          <li>Synonym Maps</li>
        </ul>
      </form>
    )
  }
}

export default RequestSettings
