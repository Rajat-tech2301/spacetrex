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
          <Route exact path='/' component={Dashboard}/>
          <Route exact path='/class' component={Class}/>
          <Route exact path='/devices' component={Devices}/>
          <Route exact path='/experiments' component={Experiments}/>
          <Route exact path='/classdetails' component={Classdetails}/>
        </Switch>      
        {/* <Class/> */}
        {/* <Devices/> */}
        {/* <Experiments/> */}
       </div>
    )
}
