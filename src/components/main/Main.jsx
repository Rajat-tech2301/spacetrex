import React from 'react';
import Card from './Card';
import '../../assets/scss/card.css';
import studentimg from '../../assets/images/studentimg.png';
import schooladminimg from '../../assets/images/schooladminimg.png';
import schooldistrictimg from '../../assets/images/schooldistrictimg.png';
import teachersimg from '../../assets/images/teachersimg.png';
import guestimg from '../../assets/images/guestimg.png';

function Main( ) {
    return (
        <div className='main'>
            <div className="cards">
            <div className='card-item'>
              <Card IMG={studentimg} name='Student'/>
              <Card IMG={schooladminimg} name='School Admin'/>
              <Card IMG={schooldistrictimg} name='School District'/>
              </div>
              <div className='card-item'>
              <Card IMG={teachersimg} name='Teachers'/>
              <Card IMG={guestimg} name='Guest'/>
              </div>
            </div>
            <div className="main-content">
            Test engines like
            <br/> real rocket scientists 
            </div>
        </div>
    )
}

export default Main;