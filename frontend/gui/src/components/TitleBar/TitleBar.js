import React from 'react';
import './TitleBar.css'


const TitleBar = (props) => {
    return (
        <div className="bar">
            <div className="container">
                <h4>{props.title}</h4>
            </div>
        </div>
    )
}

export default TitleBar;