import React from 'react';
import './EventElement.css'


const EventElement = (props) => {
    let letterStyle = "round-square color-"
    return (
        <div>
            <div className="row element">
                <span className={letterStyle + props.scope}>{props.name[0].toUpperCase()}</span>
                <div className="col">
                    <p className="row text-align-left">{props.name}</p>
                    <p className="row subtitle">Scheduled: <span><i>{props.date}</i></span></p>
                </div>
            </div>
        </div>
    )
}

export default EventElement;