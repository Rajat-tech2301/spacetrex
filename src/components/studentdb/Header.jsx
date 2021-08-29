import React from 'react';
import bellimg from '../../assets/images/bell.png'; 
import {Link} from 'react-router-dom';


export default function Header(props) {
    return (
        <div className="header">
            {/* For Desktop  Devices */}
                 <div className="header-navitems">
                    <Link to='#' > <button >{props.btn1}</button> </Link>
                    <Link to='#'> <button >{props.btn2}</button> </Link>
                    <Link to='#'> <button >{props.btn3}</button> </Link>
                 </div>
                 <div className="header-content">
                     <div className="header-content-info">
                         <div>{props.name}</div>
                         <div>{props.email}</div>
                     </div>
                     <div className="header-content-img">
                         <img src={bellimg} alt="bell" />
                     </div>
                 </div>
            
            {/* For Mobile devices */}
            <nav role="navigation" className='header-mobile'>
                   <div id="menuToggle">
                   <input type="checkbox" />
                   <span></span>
                   <span></span>
                   <span></span>
                   <ul id="menu">
                     <Link to="#"><li>{props.btn1}</li></Link>
                     <Link to="#"><li>{props.btn2}</li></Link>
                     <Link to="#"><li>{props.btn3}</li></Link>
                     <div className="mobile-header-content">
                     <div className="mobile-header-content-img">
                         <img src={bellimg} alt="bell" />
                     </div>
                     <div className="mobile-header-content-info">
                         <div>{props.name}</div>
                         <div>{props.email}</div>
                     </div>
                    </div>
                   </ul>
                 </div>
               </nav>
            </div>
    )
}
