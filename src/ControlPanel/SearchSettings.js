import React, { Component } from 'react'

class SearchSettings extends Component {
  // Fuzzy: https://docs.microsoft.com/en-us/rest/api/searchservice/lucene-query-syntax-in-azure-search
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='searchText'>Endpoint</label>
          <input type='url' id='searchText' placeholder='Samples: Coding+Blocks, NOT Docker, React | VueJs, -JavaScript' className='form-control' aria-describedby='searchTextHelp' />
          <small id='searchTextHelp' className='form-text text-muted'>Examples, including wild cards and regex <a href='https://docs.microsoft.com/en-us/rest/api/searchservice/simple-query-syntax-in-azure-search'>here</a></small>
        </div>
        <div className='form-group'>
          <label htmlFor='queryType'>Query Type</label>
          <select id='apiVersion' className='form-control' aria-describedby='queryTypeHelp' required>
            <option>simple</option>
            <option>full</option>
          </select>
          <small id='queryTypeHelp' className='form-text text-muted'>More details <a href='https://docs.microsoft.com/en-us/rest/api/searchservice/lucene-query-syntax-in-azure-search' title='More information on Lucene Query Syntax'>here</a></small>
        </div>
        <div className='form-group'>
          <label htmlFor='fuzzySearch'>Fuzzy Search</label>
          <select id='fuzzySearch' className='form-control' aria-describedby='fuzzySearchHelp' required>
            <option>0</option>
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
        <ul>
          <li>Scoring Profile</li>
          <li>Field-scoped queries</li>
          <li>Max Results</li>
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
