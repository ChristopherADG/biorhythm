import React from 'react';
import { Link } from 'react-router-dom';
import '../Signup/SignupForm.css';
import { SIGNUP_LINK } from '../../util/constants'

const LoginForm = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-10 col-xl-9 mx-auto">
                    <div className="card card-signin card-login flex-row my-5">
                        <div className="card-img-left d-none d-md-flex"></div>
                        <div className="card-body">
                            <h5 className="card-title text-center">Login</h5>

                            <form onSubmit={props.submitHandler}>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Email</span>
                                    </div>
                                    <input type="email" className="text form-control" onChange={props.emailHandler} required aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon2">Password</span>
                                    </div>
                                    <input type="password" className="text form-control" onChange={props.pwordHandler} required aria-describedby="basic-addon2" />
                                </div>
                                {props.message &&
                                    <div className="alert alert-danger" role="alert">{props.message}</div>
                                }


                                <button type="submit" className="btn btn-primary btn-block" >Login</button>
                                <br />
                                <p>Don't have an account? <Link to={SIGNUP_LINK} className="ForgetPwd">Create one</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;