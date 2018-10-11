class SearchEngineRequest {
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

  issueSearchEngineRequest (requestConfig, callback, method, url) {
    if (this.issued) {
      throw new Error('This request has already resolved')
    }
    this.issued = true

    let request = new window.XMLHttpRequest()
    request.onreadystatechange = () => {
      if (request.readyState === 4) { // Done
        if (request.status === 0) {
          window.alert('Well, bad news. It did not work. Did you try using a search key on an api key call?')
          return
        }
        this.config.response = {
          date: new Date(),
          status: request.status,
          statusText: request.statusText,
          responseText: request.responseText
        }
        callback(this.config)
      }
    }

    const proxyUrl = `http://localhost:5000/${url}`
    request.open(method, proxyUrl, true)
    request.setRequestHeader('api-key', this.config.endpointConfig.apiKey)
    request.setRequestHeader('Content-Type', 'application/json')

    this.config.request = {
      config: requestConfig,
      date: new Date(),
      url: url
    }
    request.send()
  }
}
export { SearchEngineRequest as default }
