import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
class Register extends Component {
    state = {
        email: '',
        name: '',
        password: '',
        confirm_password: '',
        name_error: '',
        email_error: '',
        password_error: '',
        confirm_error: '',
        message: '',
        loggedIn: false,
    }

    formSubmit = (e) => {
        e.preventDefault();
        this.setState({
            name_error: '',
            email_error: '',
            password_error: '',
            confirm_error: '',
            message: '',
        });
        const data = {
            email: this.state.email,
            name: this.state.name,
            password: this.state.password,
            confirm_password: this.state.confirm_password,
        }
        axios.post('/register', data)
        .then((response) => {
            localStorage.setItem('token', response.data.token);
            this.setState({
                loggedIn: true,
            });
            this.props.setUser(response.data.user);
        })
        .catch((error) => {
            if(error.response.data.errors){
                this.setState({
                    email_error: error.response.data.errors.email,
                    name_error: error.response.data.errors.name,
                    password_error: error.response.data.errors.password,
                    confirm_error: error.response.data.errors.confirm_password,
                });
            }
        });
    }

    render() {
        //After login redirect to Profile Page
        if(localStorage.getItem('token')){
            return <Navigate to='/profile' />
        }

        //Show error
        let message = "";
        let email_error = "";
        let password_error = "";
        let name_error = "";
        let confirm_error = "";
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
        if(this.state.name_error){
            name_error = (
                <div className="text-danger" role="alert">
                    {this.state.name_error}
                </div>
            );
        }
        if(this.state.confirm_error){
            confirm_error = (
                <div className="text-danger" role="alert">
                    {this.state.confirm_error}
                </div>
            );
        }
        return (
            <div><br></br>
                <div className='row'>
                    <div className='jumbotron col-lg-4 offset-lg-4'>
                        <h3 className='text-center'>Register</h3>

                        {message}

                        <form onSubmit={this.formSubmit}>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" name='email'
                                onChange={(e) => {this.setState({email: e.target.value})}}
                                />
                                {email_error}
                            </div>

                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" placeholder="User Name" name='name'
                                onChange={(e) => {this.setState({name: e.target.value})}}
                                />
                                {name_error}
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" name='password'
                                onChange={(e) => {this.setState({password: e.target.value})}}
                                />
                                {password_error}
                            </div>

                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" className="form-control" placeholder="Confirm Password" name='confirm_password'
                                onChange={(e) => {this.setState({confirm_password: e.target.value})}}
                                />
                                {confirm_error}
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Login</button>
                            <Link to='/login'>Have an account?</Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register
