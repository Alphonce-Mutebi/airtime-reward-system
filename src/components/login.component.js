import React from 'react'
import { useHistory } from 'react-router-dom';


const Login = () => {
    const history = useHistory();
    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form>
                    <h3>Sign In</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <button type="submit"
                    className="btn btn-primary btn-block mt-4"
                    onClick={()=> history.push('/dashboard')}>Submit</button>
                    <p className="forgot-password text-right">
                        Don't have an account <a href="/sign-up">Sign Up</a>
                    </p>
                </form>
            </div>
            
        </div>
    )
}

export default Login
