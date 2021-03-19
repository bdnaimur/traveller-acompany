import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='m-5'>
            <nav class="navbar navbar-expand-lg navbar-light">               
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse  justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-item nav-link active" to="/home">Home <span class="sr-only">(current)</span></Link>
                        <Link class="nav-item nav-link" to="/destination">Destination</Link>
                        <Link class="nav-item nav-link" to="/blog">Blog</Link>
                        <Link class="nav-item nav-link " to="/contact">Contact</Link>
                        <Link to='/signin'><button className='nav-item nav-link button btn'>Login</button></Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;