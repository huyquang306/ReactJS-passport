import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <div><br></br>
                <div className='row'>
                    <div className='jumbotron col-lg-4 offset-lg-4'>
                        <h3 className='text-center'>Login</h3>
                        <form>
                            <div class="form-group">
                                <label>Email address</label>
                                <input type="email" class="form-control" placeholder="Enter email"/>
                            </div>

                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" placeholder="Password"/>
                            </div>

                            <button type="submit" class="btn btn-primary btn-block">Login</button>
                            <Link to='/forget'>Forget Password </Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
