import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <form className="form-style" >
            <div className="form-container">
            <h3>Create an account</h3>
            <input type="text" name="name" id="" placeholder="Name" required/>
            <input type="email" id="inputEmail4" placeholder="Email" required />
            <input type="password" id="" placeholder="Password" required />
            <input type="password" id="" placeholder="Confirm Password" required />
            <div className="flex-style">
                {/* <div className="col-md-6"> */}
                <input className="check-box" type="checkbox" name="checkbox" id="" required/>            
                {/* </div> */}
                {/* <div className="col-md-6"> */}
                <span> Forgot Password</span>
                {/* </div> */}
            </div>
            <input className = "login-btn" type="submit" value="Login"/>
            <p><small>Already have an account? <Link to="/signin"><span>Login</span></Link></small></p>
            </div>
        </form>
    );
};

export default Signup;