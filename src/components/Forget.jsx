import React, { Component } from 'react'

class Forget extends Component {
    render() {
        return (
            <div><br></br>
                <div className='row'>
                    <div className='jumbotron col-lg-4 offset-lg-4'>
                        <h3 className='text-center'>Forget Password</h3>
                        <form>
                            <div class="form-group">
                                <label>Email address</label>
                                <input type="email" class="form-control" placeholder="Enter email"/>
                            </div>

                            <button type="submit" class="btn btn-primary btn-block">Send Email</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Forget
