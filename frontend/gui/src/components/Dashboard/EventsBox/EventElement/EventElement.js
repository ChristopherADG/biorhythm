import React from 'react';
import './EventElement.css'


const EventElement = (props) => {
    return (
        <div>
            <div className="row element">
                <span className="round-square color-purple">{props.name[0]}</span>
                <div className="col">
                    <p className="row text-align-left">{props.name}</p>
                    <p className="row subtitle">Scheduled: <span><i>Today</i></span></p>
                </div>
            </div>
        </div>
    )
}

export default EventElement;