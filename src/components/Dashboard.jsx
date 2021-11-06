import React from 'react'
import '../scss/dashboard.css'

export default function Dashboard() {
    return (
        <div id="dashboard">
          <div>Teacher Panel</div>
          <div>Tac</div>
          <div>Welcome Test Teacher</div>
          <div>
              <div>Manage your dashboard here</div>
              <div>
                  <div className="dashboard_card">
                      1
                      <span>Classes</span>
                  </div>
                  <div className="dashboard_card">
                      2
                      <span>Students</span>
                  </div>
                  <div className="dashboard_card">
                      1
                      <span>Devices</span>
                  </div>
                  <div className="dashboard_card">
                      0
                      <span>Experiments</span>
                  </div>
              </div>
          </div>
        </div>
    )
}
