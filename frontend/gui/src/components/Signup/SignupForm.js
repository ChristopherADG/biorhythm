import React from 'react';
import { Link } from 'react-router-dom';
import './SignupForm.css';
import { LOGIN_LINK } from '../../util/constants'

const SignupForm = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-10 col-xl-9 mx-auto">
                    <div className="card card-signin flex-row my-5">
                        <div className="card-img-left d-none d-md-flex"></div>
                        <div className="card-body">
                            <h5 className="card-title text-center">Register</h5>

                            <form onSubmit={props.submitHandler}>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Firstname</span>
                                    </div>
                                    <input type="text" className="text form-control" onChange={props.fnameHandler} required aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Lastname</span>
                                    </div>
                                    <input type="text" className="text form-control" onChange={props.lnameHandler} required aria-describedby="basic-addon1" />
                                </div>
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
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon2">Confirm</span>
                                    </div>
                                    <input type="password" className="text form-control" onChange={props.confpwordHandler} required aria-describedby="basic-addon2" />
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon2">Birthdate</span>
                                    </div>
                                    <input type="date" className="text form-control" onChange={props.bdateHandler} required aria-describedby="basic-addon2" />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Register</button>
                                <br />
                                <p>Have already an account? <Link to={LOGIN_LINK}>Login here</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupForm;