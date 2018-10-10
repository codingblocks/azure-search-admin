const http = require('http')
const proxy = require('request')
const port = 5000

const requestHandler = (request, response) => {
  const url = request.url.slice(1, request.url.length)
  console.log(url)
  const options = {
    url: url,
    headers: {
      'user-agent': request.headers['user-agent'],
      'api-key': request.headers['user-agent']
    }
  }

  proxy(options, function (proxiedError, proxiedResponse, body) {
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
