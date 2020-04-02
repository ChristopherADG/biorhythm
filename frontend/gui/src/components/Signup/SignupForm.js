import React from 'react';
import { Link } from 'react-router-dom';
import './SignupForm.css';

const SignupForm = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-10 col-xl-9 mx-auto">
                    <div className="card card-signin flex-row my-5">
                        <div className="card-img-left d-none d-md-flex"></div>
                        <div className="card-body">
                            <h5 className="card-title text-center">Register</h5>
                            <form>

                                <div className="form-label-group">
                                    <input name="email" onChange={props.emailHandler} type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
                                    <label htmlFor="inputEmail">Email address</label>
                                </div>

                                <div className="form-label-group">
                                    <input name="firstname" onChange={props.fnameHandler} type="text" id="inputFirstname" className="form-control" placeholder="Firstname" required />
                                    <label htmlFor="inputFirstname">Firstname</label>
                                </div>

                                <div className="form-label-group">
                                    <input name="lastname" onChange={props.lnameHandler} type="text" id="inputLastname" className="form-control" placeholder="Lastname" required />
                                    <label htmlFor="inputLastname">Lastname</label>
                                </div>

                                <hr />

                                <div className="form-label-group">
                                    <input name="password" onChange={props.pwordHandler} type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                    <label htmlFor="inputPassword">Password</label>
                                </div>

                                <div className="form-label-group">
                                    <input type="password" onChange={props.confpwordHandler} id="inputConfirmPassword" className="form-control" placeholder="Password" required />
                                    <label htmlFor="inputConfirmPassword">Confirm password</label>
                                </div>

                                <hr />

                                <div className="form-label-group">
                                    <input name="birthdate" onChange={props.bdateHandler} type="date" id="inputBirthdate" className="form-control" required />
                                    <label htmlFor="inputBirthdate">Birthdate</label>
                                </div>

                                <hr className="my-4" />

                                <input className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" value="register" onClick={props.submitHandler} />
                                <Link to='/login' className="d-block text-center mt-2 small">Log in</Link>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupForm;