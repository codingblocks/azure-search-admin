# Azure Search Service Query Builder

This is a simple utility for building Azure Search Service queries.

You simply configure your endpoint and then you can tweak the various input parameters and see what the request and responses look like from Azure Search

## Requirements

* Node JS 8.9.4+
* Azure Search Service Configuration Information (including Search Key and CORS setup, see trouble shooting section)

## Getting it running

```bash
docker-compose up
```

or...

```bash
cd admin && npm install && npm start # start up the site on :3000
cd ../proxy && npm install && npm start # start up the proxy on :5000
```

## Troubleshooting

* CORS
* TODO