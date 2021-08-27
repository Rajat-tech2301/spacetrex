import React from 'react';
import {Link} from 'react-router-dom';
import bellimg from '../../assets/images/bell.png'; 
import Data from './Data';
import '../../assets/scss/data.css';

let data=
{
    serialno :'1',
    name:'dummy text',
    date:'12/12/2027',
    time:'18:12:14',
    fuelvol:'435.00 ml',
    pressure:'120 psi',
    nozzeldiameter:'12mm'
}
export default function studentdb() {
    return (
        <div className="studentdbcontainer">
             <div className="studentdbheader">
                 <div className="sdbh-navitems">
                    <Link to='#' > <button >Home</button> </Link>
                    <Link to='#'> <button >Resources</button> </Link>
                    <Link to='#'> <button >DataAnalysis</button> </Link>
                 </div>
                 <div className="sdbh-info">
                     <div className="sdbh-info-content">
                         <div>Micheal John</div>
                         <div>micheal.john@gmail.com</div>
                     </div>
                     <div className="sdbh-info-img">
                         <img src={bellimg} alt="bell" />
                     </div>
                 </div>
             </div>
             <div className="studentdbname">Welcome Micheal John</div>
             <div className="studentdbdata">
                 <div className="sdbd-header">
                     <div>Sr. No.</div>
                     <button>Student <br/> Name</button>
                     <button>Date</button>
                     <button>Time</button>
                     <button>Fuel volume</button>
                     <button>Pressure</button>
                     <button>Nozzle<br/> Diameter</button>
                     <div>Action</div>
                 </div>
              <div className="sdbd-content">
                  <Data {...data}/>
                  <Data {...data}/>
                  <Data {...data}/>
                  <Data {...data}/>
              </div>
             </div>
        </div>
    )
}
