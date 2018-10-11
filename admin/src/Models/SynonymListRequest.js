import SearchEngineRequest from './SearchEngineRequest'

class SynonymListRequest extends SearchEngineRequest {
  issue (requestConfig, callback) {
    const url = `${this.config.endpointConfig.portalEndpoint}/synonymmaps?api-version=${this.config.endpointConfig.apiVersion}`
    let config = this.clone(requestConfig || {})
    config.title = 'Synonyms'
    this.issueSearchEngineRequest(config, callback, 'GET', url)
  }
}
export { SynonymListRequest as default }
