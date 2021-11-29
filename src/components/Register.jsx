import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Register extends Component {
    render() {
        return (
            <div><br></br>
                <div className='row'>
                    <div className='jumbotron col-lg-4 offset-lg-4'>
                        <h3 className='text-center'>Register</h3>
                        <form>
                            <div class="form-group">
                                <label>Email address</label>
                                <input type="email" class="form-control" placeholder="Enter email"/>
                            </div>

                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" class="form-control" placeholder="User Name"/>
                            </div>

                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" placeholder="Password"/>
                            </div>

                            <div class="form-group">
                                <label>Confirm Password</label>
                                <input type="password" class="form-control" placeholder="Confirm Password"/>
                            </div>

                            <button type="submit" class="btn btn-primary btn-block">Login</button>
                            <Link to='/login'>Have an account?</Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register
