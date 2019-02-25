import SearchEngineRequest from './SearchEngineRequest'

class CreateIndexRequest extends SearchEngineRequest {
  issue (requestConfig, callback) {
    const url = `${this.config.endpointConfig.portalEndpoint}/indexes/${
      this.config.endpointConfig.searchIndex
    }?api-version=${this.config.endpointConfig.apiVersion}`
    const title = 'Create Index'
    this.issueSearchEngineRequest(
      { title },
      callback,
      'PUT',
      url,
      requestConfig.indexDefinition
    )
  }
}
export { CreateIndexRequest as default }
