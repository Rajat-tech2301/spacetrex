import React from 'react'
import '../scss/experiment.css'


export default function Experiments() {
    return (
        <div id="experiment">
             
           <div>Teacher Panel</div>
             <div>Experiments</div>
             <div>Manage and analyse experiments here</div>
             <div className='experiment_dashboard'>
                <table>
                    <tr className='experiment_dashboard_header'>
                        <th>Sr. No.</th>
                        <th>
                          <div>
                          Date
                              </div>  
                            </th>
                        <th>
                            <div>   
                            Time
                            </div>
                          </th>
                        <th>
                            <div>   
                            Class
                            </div>
                          </th>
                        <th>
                            <div>   
                            Student
                            </div>
                          </th>
                        <th>
                            <div>   
                            Bottle Volume
                            </div>
                          </th>
                        <th>
                            <div>   
                            Fuel Volume
                            </div>
                          </th>
                        <th>
                            <div>   
                            Nozzle Diameter
                            </div>
                          </th>
                        <th>
                            <div>   
                            Pressure
                            </div>
                          </th>
                    
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>09/09/21</td>
                        <td>10:00 am</td>
                        <td>Class 1</td>
                        <td>Test Student 1</td>
                        <td>300ml</td>
                        <td>700ml</td>
                        <td>8mm</td>
                        <td>700ml</td>
                        <td >
                        <button className='analyse-btn'>
                          Analyse
                        </button>   

                        </td>
                    </tr>
                    
                   
                </table>
             </div>
       </div> 
    )
}
