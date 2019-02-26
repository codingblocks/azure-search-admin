import SearchEngineRequest from './SearchEngineRequest'

class UploadActionRequest extends SearchEngineRequest {
  issue (requestConfig, callback) {
    const url = `${this.config.endpointConfig.portalEndpoint}/indexes/${
      this.config.endpointConfig.searchIndex
    }/docs/index?api-version=${this.config.endpointConfig.apiVersion}`
    const title = `Upload Action: ${requestConfig.searchAction}`

    // TODO totally mutating an argument :(
    requestConfig.uploadDocument.value.forEach(doc => {
      doc[`@search.action`] = requestConfig.searchAction.toLowerCase()
    })

    this.issueSearchEngineRequest(
      { title },
      callback,
      'POST',
      url,
      JSON.stringify(requestConfig.uploadDocument)
    )
  }
}
export { UploadActionRequest as default }
