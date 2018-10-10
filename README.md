# Azure Search Service Query Builder

This is a simple utility for building Azure Search Service queries.

You simply configure your endpoint and then you can tweak the various input parameters and see what the request and responses look like from Azure Search

## Requirements

* Node JS 8.9.4+
* Azure Search Service Configuration Information (including Search Key and CORS setup, see trouble shooting section)

## Getting it running

```bash
docker-compose up
# or, if you'd rather run it in pieces:
docker build -t azure-search-admin -f dockerfile.admin .
docker run -p 3000:3000 -d azure-search-admin
docker build -t azure-search-admin -f dockerfile.proxy .
docker run -p 5000:5000 azure-search-proxy
```

or...

```bash
cd admin && npm install && npm start # start up the site on :3000
cd ../proxy && npm install && npm start # start up the proxy on :5000
```

## Troubleshooting

* CORS
* TODO