import React from 'react';
import Data from './Data';
import Header from './Header';
import '../../assets/scss/data.css';
import '../../assets/scss/header.css';

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
let headerdata={
    btn1:'Home',
    btn2:'Resources',
    btn3:'DataAnalysis',
    name:'Micheal John',
    email:'micheal.john@gmail.com'
}
export default function Studentdb() {
    return (
        <div className="studentdb-container">
            <Header {...headerdata}/>
             <div className="studentdb-name">Welcome Micheal John</div>           
            <div className="studentdb-data">
                 <div className="sdb-d-header">
                     <div>Sr. No.</div>
                     <button>Student <br/> Name</button>
                     <button>Date</button>
                     <button>Time</button>
                     <button>Fuel volume</button>
                     <button>Pressure</button>
                     <button>Nozzle<br/> Diameter</button>
                     <div>Action</div>
                 </div>
              <div className="sdb-d-content">
                  <Data {...data}/>
                  <Data {...data}/>
                  <Data {...data}/>
                  <Data {...data}/>
              </div>
             </div>
            <div className="studentdb-data-mobile">
              <Data {...data}/>
              <Data {...data}/>
              <Data {...data}/>
              <Data {...data}/>
              <Data {...data}/>
              <Data {...data}/>
              <Data {...data}/>
              <Data {...data}/>
            </div>    
        </div>
    )
}
