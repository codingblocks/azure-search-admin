import SearchEngineRequest from './SearchEngineRequest'

class StatisticsRequest extends SearchEngineRequest {
  issue (requestConfig, callback) {
    const url = `${this.config.endpointConfig.portalEndpoint}/servicestats?api-version=${this.config.endpointConfig.apiVersion}`
    this.issueSearchEngineRequest(requestConfig, callback, 'GET', url)
  }
}
export { StatisticsRequest as default }
