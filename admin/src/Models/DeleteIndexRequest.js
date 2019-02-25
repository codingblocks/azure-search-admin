import SearchEngineRequest from './SearchEngineRequest'

class DeleteIndexRequest extends SearchEngineRequest {
  issue (_, callback) {
    const url = `${this.config.endpointConfig.portalEndpoint}/indexes/${
      this.config.endpointConfig.searchIndex
    }?api-version=${this.config.endpointConfig.apiVersion}`
    const title = 'Delete Index'
    this.issueSearchEngineRequest({ title }, callback, 'DELETE', url, null)
  }
}
export { DeleteIndexRequest as default }
