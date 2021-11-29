import React, { Component } from 'react'
import {
    // BrowserRouter as Router,
    // Route,
    // Routes,
    Link
} from "react-router-dom";
class Nav extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">Passport</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link class="nav-link" to='/'> Home  </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/profile'> Profile </Link>
                            </li>
                        
                        </ul>
                        <span class="navbar-text">
                            <ul class="navbar-nav mr-auto">

                                <li class="nav-item">
                                    <Link class="nav-link" to='/login'> Login </Link>
                                </li>

                                <li class="nav-item">
                                    <Link class="nav-link" to='/register'> Register </Link>
                                </li>
                            
                            </ul>
                        </span>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav
