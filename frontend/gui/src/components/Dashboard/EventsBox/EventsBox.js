import React from 'react';
import EventElement from './EventElement/EventElement';


const EventsBox = (props) => {
    return (
        <div className="box">
            <div className="container">
                <div className="inner-content">
                    <div className="row">
                        <h5>Next Events</h5>
                    </div>
                    <div className="row">
                        <p className="subtitle"></p>
                    </div>
                    {props.myEvents.length > 0 &&
                        props.myEvents.map((myEvent) => (
                            <EventElement key={myEvent.id} name={myEvent.title} date={myEvent.date} scope={myEvent.scope} />
                        ))
                    }
                    {props.myEvents.length < 1 &&
                        <h6 className="text-center">No Events</h6>
                    }
                </div>
            </div>
        </div>
    )
}

export default EventsBox;