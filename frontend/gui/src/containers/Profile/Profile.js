import React, { Component } from 'react';
import './Profile.css'
import TitleBar from '../../components/TitleBar/TitleBar';


class Profile extends Component {

    state = {
        loggedIn: false
    }

    componentDidMount() {

    }

    render() {
        return (

            <div>
                <TitleBar title="Profile" />
                <div className="container">
                    <div id="read-only-profile" className="slim-box">
                        <div className="row inner-content-profile">
                            <div className="col-md-4">
                                <div id="profileCircle"></div>
                            </div>
                            <div className="col inner-content-profile">
                                <div className="row">
                                    <span id="name">Klaus Chotomate</span>
                                </div>
                                <div className="row">
                                    <span id="email">klaus@mail.com</span>
                                </div>
                                <div className="row">
                                    <span id="date">1998-08-19</span>
                                </div>
                                <br />
                                <div className="row">
                                    <button type="button" className="btn btn-outline-primary" onClick={this.onEditClicked}>Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="write-only-profile" className="slim-box">
                        <div className="row inner-content-profile">
                            <div className="col-md-4">
                                <div id="profileCircle"></div>
                            </div>
                            <div className="col inner-content-profile">
                                <div className="row">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">Name</span>
                                        </div>
                                        <input className="text form-control" value="Klaus Kientzle" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">Email</span>
                                        </div>
                                        <input className="email form-control" value="klaus@mail.com" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-group input-group-sm mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroup-sizing-sm">Date</span>
                                        </div>
                                        <input id="datepicker" type="date" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <button type="button" className="btn btn-outline-danger" onClick={this.onUpdateClicked}>Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    onUpdateClicked() {
        document.getElementById('read-only-profile').style.display = "block"
        document.getElementById('write-only-profile').style.display = "none"
    }

    onEditClicked() {
        document.getElementById('read-only-profile').style.display = "none"
        document.getElementById('write-only-profile').style.display = "block"
    }

}


export default Profile;