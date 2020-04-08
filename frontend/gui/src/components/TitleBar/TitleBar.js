import React from 'react';
import './TitleBar.css'


const TitleBar = (props) => {
    return (
        <div className="bar">
            <h4>{props.title}</h4>
        </div>
    )
}

export default TitleBar;