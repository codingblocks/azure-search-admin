import SearchEngineRequest from './SearchEngineRequest'

class StatisticsRequest extends SearchEngineRequest {
  issue (requestConfig, callback) {
    const url = `${this.config.endpointConfig.portalEndpoint}/servicestats?api-version=${this.config.endpointConfig.apiVersion}`
    let config = this.clone(requestConfig || {})
    config.title = 'Service Statistics'
    this.issueSearchEngineRequest(config, callback, 'GET', url)
  }
}
export { StatisticsRequest as default }
