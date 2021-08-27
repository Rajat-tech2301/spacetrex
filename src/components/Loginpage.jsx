import React from 'react';

function Loginpage(props) {
    return (
             <div className="login-container">
                 <div className="login-content">
                 Test engines like <br/> real rocket scientists   
                 </div>
                 <form  action='#'   className="login-form">
                    <h1>Welcome, Student</h1>
                    <div className="login-input">
                        <input type="text" placeholder="School name"/>
                        <input type="text" placeholder="Student ID"/>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <button type="submit" className="login-btn">Sign in</button>
                 </form>
             </div>
    )
}

export default Loginpage;