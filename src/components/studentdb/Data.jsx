import React from 'react';
import {Link} from 'react-router-dom';

export default function Data(props) {
    return (
        <>
        {/* For Desktop */}
        <div className='data'>
            <div>{props.serialno}</div>
            <div>{props.name}</div>
            <div>{props.date}</div>
            <div>{props.time}</div>
            <div>{props.fuelvol}</div>
            <div>{props.pressure}</div>
            <div>{props.nozzeldiameter}</div>
          <Link to='#'><button>Analyse</button></Link> 
        </div>

        {/* For mobile devices */}
        <div className="mobile-data">
           <div><b> Name :</b> {props.name}</div>
           <div><b>Date :</b> {props.date}</div>
           <div><b>Time :</b> {props.time}</div>
           <div><b>Fuel Volume :</b> {props.fuelvol}</div>
           <div><b>Pressure :</b> {props.pressure}</div>
           <div><b>Nozzel Diameter :</b> {props.nozzeldiameter}</div>
           <Link to='#'><button>Analyse</button></Link>   
        </div>
        </>

    )
}
