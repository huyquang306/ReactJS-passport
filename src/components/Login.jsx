import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
class Login extends Component {
    state={
        email: '',
        password: '',
        email_error: '',
        password_error: '',
        message: '',
        loggedIn: false,
    }

    //Submit
    formSubmit = (e) => {
        e.preventDefault();
        this.setState({
            email_error: '',
            password_error: '',
            message: '',
        })
        const data = {
            email: this.state.email,
            password: this.state.password,
        }
        axios.post('/login', data)
        .then((response) => {
            localStorage.setItem('token', response.data.token);
            this.setState({
                loggedIn: true,
            });
            this.props.setUser(response.data.user);
        })
        .catch((error) => {
            if(error.response.data.errors){                                 //Validation failed
                this.setState({
                    email_error: error.response.data.errors.email,
                    password_error: error.response.data.errors.password,
                });
            }
            if(error.response.data.message){                                //Login failed
                this.setState({message: error.response.data.message});
            }
        });
    }

    render() {
        //After login redirect to Profile Page
        if(localStorage.getItem('token')){
            return <Navigate to='/profile'/>
        }

        //Show error message
        let message = "";
        let email_error = "";
        let password_error = "";
        if(this.state.message){
            message = (
                <div className="alert alert-danger" role="alert">
                    {this.state.message}
                </div>
            );
        }
        if(this.state.email_error){
            email_error = (
                <div className="text-danger" role="alert">
                    {this.state.email_error}
                </div>
            );
        }
        if(this.state.password_error){
            password_error = (
                <div className="text-danger" role="alert">
                    {this.state.password_error}
                </div>
            );
        }
        return (
            <div><br></br>
                <div className='row'>
                    <div className='jumbotron col-lg-4 offset-lg-4'>
                        <h3 className='text-center'>Login</h3>

                        {message}

                        <form onSubmit={this.formSubmit}>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" name='email' className="form-control" placeholder="Enter email"
                                onChange={(e) => {this.setState({email: e.target.value})}}/>
                                {email_error}
                            </div>                           

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name='password' className="form-control" placeholder="Password"
                                onChange={(e) => {this.setState({password: e.target.value})}}/>
                                {password_error}
                            </div>
                            
                            <button type="submit" className="btn btn-primary btn-block">Login</button>
                            <Link to='/forget'>Forget Password </Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
