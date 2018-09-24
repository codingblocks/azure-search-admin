import React, { Component } from 'react';
import EndpointPanel from './EndpointPanel'

class ControlPanel extends Component {
  render() {
    return (
      <div id="accordian">

        <div className="card">
          <div className="card-header" id="endpoint-configuration-header">
            <h5 className="mb-0">
              <button className="btn btn-link" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                Endpoint Configuration
              </button>
            </h5>
          </div>
          <div id="collapse1" className="collapse show" aria-labelledby="endpoint-configuration-header" data-parent="#accordion">
            <div className="card-body">
              <EndpointPanel />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default ControlPanel;