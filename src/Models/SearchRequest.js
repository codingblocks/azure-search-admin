// TODO
// This should really be a few different classes:
// * EndpointConfig should define it's fields
// * SearchBuilder should build a search request (but not issue it)
// * Clone

class SearchRequest {
  constructor (endpointConfig) {
    this.clone = o => JSON.parse(JSON.stringify(o))
    const baseSearchUrl = `${endpointConfig.portalEndpoint}/indexes/${endpointConfig.searchIndex}/docs?api-version=${endpointConfig.apiVersion}`
    this.config = {
      endpointConfig: this.clone(endpointConfig),
      derivedProperties: {
        baseSearchUrl: baseSearchUrl,
        baseCurlCommand: `curl -i -H "Accept: application/json" -H "Content-Type: application/json" -H "api-key: ${endpointConfig.apiKey}" -X GET ${baseSearchUrl}`,
        configurationDate: new Date()
      }
    }
  }

  getConfig () {
    return this.clone(this.config)
  }

  issue (requestConfig, callback) {
    if (this.issued) {
      throw new Error('This request has already resolved')
    }
    this.issued = true

    const url = this.config.derivedProperties.baseSearchUrl
    const method = requestConfig.method

    let request = new window.XMLHttpRequest()
    request.onreadystatechange = () => {
      if (request.readyState === 4) { // Done
        this.config.response = {
          date: new Date(),
          status: request.status,
          statusText: request.statusText,
          responseText: request.responseText
        }
        callback(this.config)
      }
    }
    request.open(method, url, true)
    request.setRequestHeader('api-key', this.config.endpointConfig.apiKey)

    this.config.request = {
      config: requestConfig,
      date: new Date(),
      url: url
    }
    request.send()
  }
}
export { SearchRequest as default }
