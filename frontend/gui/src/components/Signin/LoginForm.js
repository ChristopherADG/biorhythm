import React from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = (props) => {
    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 login-form-1">
                    <h3>Login</h3>
                    <p className="error-text">{props.message}</p>
                    <form>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email *" onChange={props.emailHandler} required />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password *" onChange={props.pwordHandler} required />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btnSubmit" value="Login" onClick={props.submitHandler} />
                        </div>
                        <div className="form-group">
                            <Link to='/signup' className="ForgetPwd">Sign up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;