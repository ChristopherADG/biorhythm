import React from 'react';
import './EventsBox.css'
import EventElement from './EventElement/EventElement';


const EventsBox = () => {
    return (
        <div className="box">
            <div className="container">
                <div className="inner-content">
                    <div className="row">
                        <h5>Next Events</h5>
                    </div>
                    <div className="row">
                        <p className="subtitle">5 days from now</p>
                    </div>
                    <EventElement name="Marcha para que los chinos dejen de comer chihuahuas voladores" />
                    <EventElement name="Marcha para que los chinos dejen de comer chihuahuas voladores" />
                    <EventElement name="Marcha para que los chinos dejen de comer chihuahuas voladores" />
                </div>
            </div>
        </div>
    )
}

export default EventsBox;