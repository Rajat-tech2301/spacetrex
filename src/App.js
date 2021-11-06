// eslint-disable-next-line
import { Login } from './components/Login';
import { Main } from './components/Main';
import logo from './images/logo.png'
import './scss/app.css'
import {Switch,Route} from 'react-router-dom'
// import './App.css';

function App() {
   return(
        <>
        <div className="container">
            <div className='logo'>
                <img src={logo} alt="SpaceTrex" />
            </div>
        <div className="components">
       <Switch>
          <Route exact path='/login' component={Login}/>
          <Route  path='/' component={Main}/>
        </Switch>       
        </div>
        </div>
        </>
   ) 
}

export default App;
