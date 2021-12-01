import React, { Component } from 'react'
import axios from 'axios';
class Reset extends Component {
    state = {
        token: '',
        email: '',
        password: '',
        confirm_password: '',
        token_error: '',
        email_error: '',
        password_error: '',
        confirm_error: '',
        message: '',
    }

    formSubmit = (e) => {
        e.preventDefault();
        this.setState({
            token_error: '',
            email_error: '',
            password_error: '',
            confirm_error: '',
            message: '',
        });
        const data = {
            email: this.state.email,
            token: this.state.token,
            password: this.state.password,
            confirm_password: this.state.confirm_password,
        }
        axios.post('/resetpassword', data)
        .then((response) => {
            this.setState({
                message: response.data.message,
                loggedIn: true,
            });
            document.getElementById("resetform").reset();
        })
        .catch((error) => {
            if(error.response.data.errors){
                this.setState({
                    email_error: error.response.data.errors.email,
                    token_error: error.response.data.errors.token,
                    password_error: error.response.data.errors.password,
                    confirm_error: error.response.data.errors.confirm_password,
                });
            }
            this.setState({message: error.response.data.message});
        });
    }

    render() {
        let message = "";
        let email_error = "";
        let password_error = "";
        let token_error = "";
        let confirm_error = "";
        if(this.state.message){
            message = (
                <div className="alert alert-success" role="alert">
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
        if(this.state.token_error){
            token_error = (
                <div className="text-danger" role="alert">
                    {this.state.token_error}
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
                        <h3 className='text-center'>Reset Password</h3>

                        {message}

                        <form onSubmit={this.formSubmit} id='resetform'>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" name='email'
                                onChange={(e) => {this.setState({email: e.target.value})}}
                                />
                                {email_error}
                            </div>

                            <div className="form-group">
                                <label>Token</label>
                                <input type="text" className="form-control" placeholder="Enter token" name='token'
                                onChange={(e) => {this.setState({token: e.target.value})}}
                                />
                                {token_error}
                            </div>

                            <div className="form-group">
                                <label>New Password</label>
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

                            <button type="submit" className="btn btn-primary btn-block">Reset</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reset
