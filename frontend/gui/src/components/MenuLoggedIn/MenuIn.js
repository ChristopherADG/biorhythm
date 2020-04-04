import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { LOGOUT_USER_API_ROUTE } from '../../util/constants'
import SessionHandler from '../../util/sessions'

const logout = () => {
    axios.get(LOGOUT_USER_API_ROUTE)
        .then(res => {
            SessionHandler.clearAuthInStorage()
        })
        .catch(err => console.log(err));
}

const MenuIn = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <span className="navbar-brand">Biorhythm</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to='/dashboard' className="nav-link">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/events' className="nav-link">Events</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Account
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link to='/profile' className="dropdown-item">Profile</Link>
                                <Link to='/login' className="dropdown-item" onClick={logout}>Log out</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default MenuIn;