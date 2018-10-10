import SearchEngineRequest from './SearchEngineRequest'

class SynonymListRequest extends SearchEngineRequest {
  issue (requestConfig, callback) {
    const url = `${this.config.endpointConfig.portalEndpoint}/synonymmaps?api-version=${this.config.endpointConfig.apiVersion}`
    this.issueSearchEngineRequest(requestConfig, callback, 'GET', url)
  }
}
export { SynonymListRequest as default }
