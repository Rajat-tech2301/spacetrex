import React from 'react'
import Class from './Class'
import Dashboard from './Dashboard'
import Devices from './Devices'
import Experiments from './Experiments'
import Classdetails from './Classdetails'
import Nav from './Nav'
import {Switch,Route} from 'react-router-dom'

/// contains main styles
import '../scss/nav.css'

export const Main = () => {
    return (
       <div className="main">
        <Nav/>
        <Switch>
          <Route exact path='/spacetrek' component={Dashboard}/>
          <Route exact path='/spacetrek/class' component={Class}/>
          <Route exact path='/spacetrek/devices' component={Devices}/>
          <Route exact path='/spacetrek/experiments' component={Experiments}/>
          <Route exact path='/spacetrek/classdetails' component={Classdetails}/>
        </Switch>      
        {/* <Class/> */}
        {/* <Devices/> */}
        {/* <Experiments/> */}
       </div>
    )
}
