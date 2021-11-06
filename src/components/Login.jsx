import React from 'react'
import '../scss/login.css'
import {Link} from 'react-router-dom'

export const Login = () => {
        return (
            <div className="login-container">
                <div className="login-content">
                Test engines like <br/> real rocket scientists   
                </div>
                <form  action='#'   className="login-form">
                   <h1>Teacher login</h1>
                   <div className="login-input">
                       <input type="text" placeholder="Teacher ID"/>
                       <input type="password" placeholder="Password"/>
                   </div>
                   <button type="submit" className="login-btn">Sign in</button>
                   <Link id='Forget-password'>Forgot Password</Link>
                </form>
            </div>
   )
    
}
