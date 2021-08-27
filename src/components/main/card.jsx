import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
    return (
             <div className="card">
                 <div className="cardimg">
                     <img src={props.IMG} alt={props.name+'logo'} />
                 </div>
                 <Link to='/loginpage' className='cardname'>{props.name}</Link>
             </div>
    )
}

export default Card;