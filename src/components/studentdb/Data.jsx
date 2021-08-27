import React from 'react';
import {Link} from 'react-router-dom';

export default function Data(props) {
    return (
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
    )
}
