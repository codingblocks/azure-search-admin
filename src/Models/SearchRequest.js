class SearchRequest {
  constructor (endpointConfig) {
    const baseSearchUrl = `${endpointConfig.portalEndpoint}/indexes/${endpointConfig.searchIndex}/docs?api-version=${endpointConfig.apiVersion}`
    this.config = {
      endpointConfig: endpointConfig,
      derivedProperties: {
        baseSearchUrl: baseSearchUrl,
        baseCurlCommand: `curl -i -H "Accept: application/json" -H "Content-Type: application/json" -H "api-key: ${endpointConfig.apiKey}" -X GET ${baseSearchUrl}`,
        configurationDate: new Date()
      }
    }
  }

  getConfig () {
    return this.config
  }

  issue (requestConfig, callback) {
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
