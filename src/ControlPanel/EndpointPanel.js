import React, { Component } from 'react';

class EndpointPanel extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="portal-endpoint">Email address</label>
          <input className="form-control" id="portal-endpoint" aria-describedby="portal-endpoint-help" placeholder="Sample: https://podcasts.search.windows.net" />
          <small id="portal-endpoint-help" className="form-text text-muted">Make sure to include the full url of the search endpoint, without any index or document information</small>
        </div>
        <div className="form-group">
          <label htmlFor="portal-endpoint">Index name</label>
          <input className="form-control" id="portal-endpoint" aria-describedby="portal-endpoint-help" placeholder="Sample: podcasts" />
          <small id="portal-endpoint-help" className="form-text text-muted">Name of the index that will be searched</small>
        </div>
        <div className="form-group">
          <label htmlFor="api-version">API Version</label>
          <select className="form-control" id="api-version" aria-describedby="portal-api-version-help">
            <option>2017-11-11</option>
            <option>2017-11-11-Preview</option>
          </select>
          <small id="portal-api-version-help" className="form-text text-muted">Which API Version to use</small>
        </div>
        <div className="form-group">
          <label htmlFor="api-Key">Query Key</label>
          <input className="form-control" id="portal-endpoint" aria-describedby="api-key-help" placeholder="Sample: 18EA821D408444FCF3DC3EC4F3790FEC" />
          <small id="portal-endpoint-help" className="form-text text-muted">Enter the API Key to use for searching, do *not* enter an admin key</small>
        </div>
      </form>
    );
  }
}

export default EndpointPanel;