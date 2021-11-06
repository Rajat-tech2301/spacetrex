import React from 'react'
import '../scss/devices.css'

export default function Devices() {
    return (
        <div id="devices">
        <div className="devices_section-1">     
           <div>Teacher Panel</div>
             <div>All Devices</div>
             <div>View all assigned devices here</div>
             <div className='device_dashboard'>
                <table>
                    <tr className='device_dashboard_header'>
                        <th>Sr. No.</th>
                        <th>
                          <div>
                          Device Name    
                              </div>  
                            </th>
                        <th>
                            <div>   
                            Last launch
                            </div>
                          </th>
                        <th>No. Of Experiments</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Device 1</td>
                        <td>09/09/21</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Device 1</td>
                        <td>09/09/21</td>
                        <td>4</td>
                    </tr>
                </table>
             </div>
       </div> 
       <div className="devices_section-2">
           <div className='devices_seciton-2_heading'>Summary</div>
           <div className='summary-dashboard'>
           <div>
               <span>Classes</span>
               <span>1</span>
            </div>
           <div>
               <span>Students</span>
               <span>2</span>
            </div>
           <div>
               <span>Devices</span>
               <span>0</span>
            </div>
           <div>
               <span>Experiments</span>
               <span>1</span>
            </div>
          
           </div>
           
           </div>   
          </div>
    )
}
