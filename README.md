# Azure Search Service Query Builder

This is a simple utility for building Azure Search Service queries.

You simply configure your endpoint and then you can tweak the various input parameters and see what the request and responses look like from Azure Search

## Requirements

* Node JS 8.9.4+
* Azure Search Service Configuration Information (including Search Key and CORS setup, see trouble shooting section)

## Getting it running

```bash
# build the image:
docker build -t azure-search-admin .
docker run -p 3000:3000 -d azure-search-admin
```

or...

```npm install && npm start```

## Troubleshooting

* CORS
* TODO