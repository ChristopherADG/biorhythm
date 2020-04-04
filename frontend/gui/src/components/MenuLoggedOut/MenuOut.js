import React from 'react';
import { Link } from 'react-router-dom';

const MenuOut = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <span className="navbar-brand">Biorhythm</span>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to='/login' className="nav-link">Log in</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/signup' className="nav-link">Sign up</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default MenuOut;