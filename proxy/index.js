const http = require('http')
const proxy = require('request')
const port = 5000

const requestHandler = (request, response) => {
  const url = request.url.slice(1, request.url.length)
  console.log(`${request.method} ${url}`)
  let options = {
    url: url,
    headers: {}
  }

  if (request.headers['api-key']) {
    options.headers['api-key'] = request.headers['api-key']
  }

  proxy(options, function (proxiedError, proxiedResponse, body) {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,api-key')
    response.end(body)
  })
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
