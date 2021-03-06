import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/user-context'

const clickNav = () => {
    let button = document.getElementById("closeNav");
    if (window.getComputedStyle(button).display !== "none") {
        button.click();
    }
}

class MenuIn extends Component {
    static contextType = UserContext

    render() {
        const { logout } = this.context

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                    <span className="navbar-brand">Biorhythm</span>
                    <button id="closeNav" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/dashboard' className="nav-link" onClick={clickNav}>Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/events' className="nav-link" onClick={clickNav}>Events</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Account
                            </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link to='/profile' className="dropdown-item" onClick={clickNav}>Profile</Link>
                                    <Link to='/login' className="dropdown-item" onClick={logout}>Log out</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default MenuIn;