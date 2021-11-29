import React, { Component } from 'react';
import Nav from './Nav';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Profile from '../components/Profile';
import Forget from '../components/Forget';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";
class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Nav/>
                </div>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/register' element={<Register/>} />
                    <Route path='/profile' element={<Profile/>} />
                    <Route path='/forget' element={<Forget/>} />
                </Routes>
            </Router>
        )
    }
}

export default Header
