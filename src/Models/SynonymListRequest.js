import SearchEngineRequest from './SearchEngineRequest'

class SynonymListRequest extends SearchEngineRequest {
  issue (requestConfig, callback) {
    window.alert('Having some CORS issues at the moment, temporarily disabling')
    // const url = `${this.config.endpointConfig.portalEndpoint}/synonymmaps?api-version=${this.config.endpointConfig.apiVersion}`
    // this.issueSearchEngineRequest(requestConfig, callback, 'GET', url)
  }
}
export { SynonymListRequest as default }
