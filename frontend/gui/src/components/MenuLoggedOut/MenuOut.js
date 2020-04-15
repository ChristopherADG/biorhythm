import React from 'react';
import { Link } from 'react-router-dom';

const clickNav = () => {
    let button = document.getElementById("closeNav");
    if (window.getComputedStyle(button).display !== "none") {
        button.click();
    }
}

const MenuOut = () => {
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
                            <Link to='/login' className="nav-link" onClick={clickNav}>Log in</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/signup' className="nav-link" onClick={clickNav}>Sign up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default MenuOut;