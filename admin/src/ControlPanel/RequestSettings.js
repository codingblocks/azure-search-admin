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

    if (event.target.value !== 'full') {
      document.getElementById('fuzzySearch').value = ''
    }
  }

  handleSubmit (event) {
    event.preventDefault()

    const requestConfigList = [].filter
      .call(
        this.refs.form.elements,
        i => i.tagName === 'INPUT' || i.tagName === 'SELECT'
      )
      .map(i => {
        return { key: i.id, value: i.value }
      })
    const requestConfig = requestConfigList.reduce((map, o) => {
      map[o.key] = o.value
      return map
    }, {})

    if (this.props.onSearch) {
      this.props.onSearch(requestConfig)
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
          <input
            id='search'
            placeholder='Samples: Coding+Blocks, NOT Docker, React | VueJs, -JavaScript'
            className='form-control'
            aria-describedby='searchHelp'
          />
          <small id='searchHelp' className='form-text text-muted'>
            Examples, including wild cards and regex{' '}
            <a href='https://docs.microsoft.com/en-us/rest/api/searchservice/simple-query-syntax-in-azure-search'>
              here
            </a>
          </small>
        </div>
        <div className='form-group'>
          <label htmlFor='top'>Facet</label>
          <input
            type='text'
            id='facet'
            className='form-control'
            aria-describedby='facetHelp'
            placeholder='this UI is sadly limited to 1 facet'
          />
          <small id='facetHelp' className='form-text text-muted'>
            Each facet can have meta data associated with it, like counts, date
            interval, ranges read more
            <a href='https://docs.microsoft.com/en-us/rest/api/searchservice/search-documents'>
              here
            </a>
          </small>
        </div>
        <div className='form-group'>
          <label htmlFor='top'>Filters</label>
          <input
            type='text'
            id='filter'
            className='form-control'
            aria-describedby='filterHelp'
            placeholder='Filter condition, leave blank for none'
          />
          <small id='filterHelp' className='form-text text-muted'>
            Example: published ge 2019-01-01 or podcastTitle eq 'Coding Blocks'
            Read more
            <a href='https://docs.microsoft.com/en-us/azure/search/search-filters'>
              here
            </a>
          </small>
        </div>
        <div className='form-group'>
          <label htmlFor='top'>Order By</label>
          <input
            type='text'
            id='orderBy'
            className='form-control'
            aria-describedby='orderByHelp'
            placeholder='Sort columns, leave blank for relevance'
          />
          <small id='orderByHelp' className='form-text text-muted' />
          There's quite a bit you can do with sorting, read more
          <a href='https://docs.microsoft.com/en-us/azure/search/query-odata-filter-orderby-syntax'>
            here
          </a>
        </div>

        <div className='form-group'>
          <label htmlFor='top'>Top</label>
          <input
            type='number'
            id='top'
            className='form-control'
            aria-describedby='topHelp'
            placeholder='Number of results to return, default is 50'
          />
          <small id='topHelp' className='form-text text-muted'>
            Specifying a value greater than 1000 and there are more than 1000
            results, only the first 1000 results will be returned, along with a
            link to the next page of results.
          </small>
        </div>
        <div className='form-group'>
          <label htmlFor='queryType'>Query Type</label>
          <select
            id='queryType'
            className='form-control'
            aria-describedby='queryTypeHelp'
            required
            value={this.state.queryType}
            onChange={this.changeQueryType}
          >
            <option value='simple'>Simple</option>
            <option value='full'>Full</option>
          </select>
          <small id='queryTypeHelp' className='form-text text-muted'>
            More details{' '}
            <a
              href='https://docs.microsoft.com/en-us/rest/api/searchservice/lucene-query-syntax-in-azure-search'
              title='More information on Lucene Query Syntax'
            >
              here
            </a>
          </small>
        </div>
        <div className='form-group'>
          <label htmlFor='fuzzySearch'>
            Fuzzy Search (requires "full" query type)
          </label>
          <select
            id='fuzzySearch'
            className='form-control'
            aria-describedby='fuzzySearchHelp'
            disabled={this.state.queryType === 'simple'}
          >
            <option value=''>0 (no fuzzy search)</option>
            <option>1</option>
            <option>2</option>
          </select>
          <small id='fuzzySearchHelp' className='form-text text-muted'>
            Applies to terms only, not phrases. More{' '}
            <a
              href='https://lucene.apache.org/core/4_10_2/queryparser/org/apache/lucene/queryparser/classic/package-summary.html'
              title='More information on searches here'
            >
              here
            </a>
          </small>
        </div>
        <div
          aria-label='Action Buttons for Sending Requests'
          className='clearfix'
        >
          <button
            type='button'
            className='btn btn-link float-left'
            onClick={this.reset}
          >
            Reset
          </button>
          <button type='submit' className='btn btn-primary float-right'>
            Send Request
          </button>
        </div>
        <hr />
      </form>
    )
  }
}

export default RequestSettings
