import React from 'react'
import Header from './studentdb/Header';


let headerdata={
    btn1:'Home',
    btn2:'Resources',
    btn3:'Experiments',
    name:'Guest',
    email:'guest@gmail.com'
}

export default function Guestdb() {
    return (
         <div className='guestdb-container'>
          <Header {...headerdata}/>
          <div className='guestdb-main'>
             <iframe src='' className="guestdb-main-video"></iframe>
             <div id="guestdb-playbutton"><div></div></div>  
             <ul className="guestdb-main-videotext">
                 <li>Researched, designed, and developed at the Kennedy Space Center.</li>
                 <li> Test water rocket engines as a rocket scientist in your classroom. Conduct the right kind of engine test to make precise predictions.</li>
                 <li>    Utilize rocket engine test to refine engineering designs. Manipulate and test variables for your rocket engine performance B.E.T.A. brings to you the ultimate engine testing experience.</li>
                 <li>   From a 500 ml to 2L soda bottles, you can use a variety of engine sizes easily available in your region.</li>
             
             </ul>
          </div>
          <div className="guestdb-footertext">
            <div>B.E.T.A. </div> 
            <div>(Bottle Engine Test Apparatus)</div> 
          </div>
         </div>
    )
}
