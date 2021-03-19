import React from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';

const Signin = () => {
    return (
        <form className="form-style" >
            <div className="form-container">
            <h3>Login</h3>
            <input type="email" id="inputEmail4" placeholder="Email" required />
            <input type="password" id="inputPassword4" placeholder="Password" required />
            <div className="flex-style">
                {/* <div className="col-md-6"> */}
                <input className="check-box" type="checkbox" name="checkbox" id="" required/>            
                {/* </div> */}
                {/* <div className="col-md-6"> */}
                <span> Forgot Password</span>
                {/* </div> */}
            </div>
            <input className = "login-btn" type="submit" value="Login"/>
            <p><small>Don't have an account? <Link to="/signup"><span>Create a new account</span></Link></small></p>
            </div>
        </form>
    );
};

export default Signin;