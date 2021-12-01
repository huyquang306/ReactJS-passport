import React, { Component } from 'react';
import Nav from './Nav';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Profile from '../components/Profile';
import Forget from '../components/Forget';
import Reset from '../components/Reset';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    // Link
} from "react-router-dom";
import axios from 'axios';
class Header extends Component {
    state = {
        user: {}
    }

    componentDidMount(){
        if(localStorage.getItem('token')){
            axios.get('/user')
            .then((response) => {
                this.setUser(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
        }      
    }

    setUser = (user) => {
        this.setState({user: user});
    }

    render() {
        return (
            <Router>
                <div>
                    <Nav user={this.state.user} setUser={this.setUser}/>
                
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/login' element={<Login user={this.state.user} setUser={this.setUser}/>} />
                        <Route path='/register' element={<Register user={this.state.user} setUser={this.setUser}/>} />
                        <Route path='/profile' element={<Profile user={this.state.user} />} />
                        <Route path='/forget' element={<Forget/>} />
                        <Route path='/reset' element={<Reset/>} />
                    </Routes>
                </div>
            </Router>
        )
    }
}

export default Header
