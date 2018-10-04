import React, { Component } from 'react'

class SearchSettings extends Component {
  constructor (props) {
    super(props)
    this.state = {
      queryType: 'simple'
    }
    this.changeQueryType = this.changeQueryType.bind(this)
  }

  changeQueryType (event) {
    this.setState({ queryType: event.target.value })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='searchText'>Query</label>
          <input type='url' id='searchText' placeholder='Samples: Coding+Blocks, NOT Docker, React | VueJs, -JavaScript' className='form-control' aria-describedby='searchTextHelp' />
          <small id='searchTextHelp' className='form-text text-muted'>Examples, including wild cards and regex <a href='https://docs.microsoft.com/en-us/rest/api/searchservice/simple-query-syntax-in-azure-search'>here</a></small>
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
          <label htmlFor='fuzzySearch'>Fuzzy Search (requires "full" query type)</label>
          <select id='fuzzySearch' className='form-control' aria-describedby='fuzzySearchHelp' required disabled={this.state.queryType === 'simple'}>
            <option value=''>0 (no fuzzy search)</option>
            <option>1</option>
            <option>2</option>
          </select>
          <small id='fuzzySearchHelp' className='form-text text-muted'>Applies to terms only, not phrases. More <a href='https://lucene.apache.org/core/4_10_2/queryparser/org/apache/lucene/queryparser/classic/package-summary.html' title='More information on searches here'>here</a></small>
        </div>
        <div className='form-check'>
          <input type='checkbox' className='form-check-input' id='enableHighlighting' />
          <label className='form-check-label' htmlFor='enableHighlighting'>Enable Highlighting</label>
          <small id='highlightHelp' className='form-text text-muted'>Optionally can set <a href='https://docs.microsoft.com/en-us/rest/api/searchservice/search-documents' title='More information on highlighting'>pre/post tags</a></small>
        </div>
        <button type='submit' className='btn btn-primary'>Execute</button>
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

export default SearchSettings
