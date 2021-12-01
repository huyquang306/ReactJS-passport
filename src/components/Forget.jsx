import React, { Component } from 'react'
import axios from 'axios';

class Forget extends Component {
    state = {
        email: '',
        success: '',
        email_error: '',
        message: '',
    }

    formSubmit = (e) => {
        e.preventDefault();
        this.setState({
            message: '',
            success: '',
            email_error: '',
        })
        const data = {
            email: this.state.email,
        }
        axios.post('/forgetpassword', data)
        .then((response) => {
            this.setState({
                success: response.data.message,                                    //Email sent successfully
                email: '',                                                          
            });
            document.getElementById("forgetform").reset();
        })
        .catch((error) => {
            if(error.response.data.errors){                                         //Validation failed
                this.setState({email_error: error.response.data.errors.email,})
            }
            this.setState({                                                         //Invalid Email
                message: error.response.data.message,
            });
        });
    }

    render() {
        //Show error message
        let email_error = "";
        let success = "";
        let message = "";
        if(this.state.email_error){
            email_error = (
                <div className="text-danger" role="alert">
                    {this.state.email_error}
                </div>
            );
        }
        if(this.state.message){
            message = (
                <div className="text-danger" role="alert">
                    {this.state.message}
                </div>
            );
        }
        if(this.state.success){
            success = (
                <div className="alert alert-success" role="alert">
                    {this.state.success}
                </div>
            );
        }

        return (
            <div><br></br>
                <div className='row'>
                    <div className='jumbotron col-lg-4 offset-lg-4'>
                        <h3 className='text-center'>Forget Password</h3>
                        <form onSubmit={this.formSubmit} id="forgetform">

                            {success}
                            {message}

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" name='email' placeholder="Enter email"
                                onChange = {(e) => {this.setState({email: e.target.value})}}
                                />
                                {email_error}
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Send Email</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Forget
