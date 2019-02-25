import SearchEngineRequest from './SearchEngineRequest'

class SearchRequest extends SearchEngineRequest {
  issue (requestConfig, callback) {
    const url = this.getUrl(requestConfig)
    let config = this.clone(requestConfig)
    config.title = 'Search'
    this.issueSearchEngineRequest(config, callback, 'GET', url) // TODO API also supports (and even recommends POST)
  }
  getUrl (requestConfig) {
    let url = this.config.derivedProperties.baseSearchUrl
    let queryParams = []

    if (requestConfig.top) {
      queryParams.push('$top=' + window.encodeURI(requestConfig.top))
    }

    if (requestConfig.queryType === 'full') {
      queryParams.push('queryType=' + window.encodeURI(requestConfig.queryType))
    }

    if (
      requestConfig.queryType === 'full' &&
      requestConfig.fuzzySearch &&
      requestConfig.search
    ) {
      const suffix = `~${requestConfig.fuzzySearch}`
      const adjustedSearchTerm = requestConfig.search
        .split(' ')
        .map(i => i + suffix)
        .join(' ')
      queryParams.push('search=' + window.encodeURI(adjustedSearchTerm))
    } else if (requestConfig.search) {
      queryParams.push('search=' + window.encodeURI(requestConfig.search))
    }

    if (queryParams.length) {
      url = url + '&' + queryParams.join('&')
    }

    // TODO configure?
    return url
  }
}
export { SearchRequest as default }
