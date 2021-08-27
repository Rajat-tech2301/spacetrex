import React  from 'react';
import './assets/scss/app.css';
import './assets/scss/main.css';
import './assets/scss/loginpage.css';
import './assets/scss/studentdb.css';
import logo from './assets/images/logo.png';
import Main from './components/main/Main';
import Loginpage from './components/Loginpage';
import Studentdb from './components/studentdb/Studentdb';
import {Switch,Route} from "react-router-dom";

function App(){
    return(
        <>
        <div className="container">
            <div className='logo'>
                <img src={logo} alt="SpaceTrex" />
            </div>
        <div className="components">
       <Switch>
          <Route exact path='/' component={Main}/>
          <Route exact path='/loginpage' component={Loginpage}/>
          <Route exact path='/studentdb' component={Studentdb}/>
        </Switch>       
        </div>
        </div>
        </>
    )
}

export default App;