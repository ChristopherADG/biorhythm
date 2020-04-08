import React from 'react';

const CreateEvent = (props) => {
    return (

        <div className="container">
            <div className="row">
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Title</span>
                    </div>
                    <input type="text" onChange={props.titleHandler} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </div>
            </div>
            <div className="row">
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Description</span>
                    </div>
                    <textarea className="form-control" onChange={props.descHandler} aria-label="Small" aria-describedby="inputGroup-sizing-sm" rows="5" cols="50" />
                </div>
            </div>
            <div className="row">
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Public</span>
                    </div>
                    <input type="checkbox" className="isPublic" onChange={props.isPublicHandler} />
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Date</span>
                    </div>
                    <input id="datepicker" type="date" onChange={props.dateHandler} className="form-control datepicker" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </div>
            </div>
            <div className="row">
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Scope</span>
                    </div>
                    <select className="form-control" onChange={props.scopeHandler} aria-label="Small" aria-describedby="inputGroup-sizing-sm" rows="5" cols="50" >
                        <option value="1">Physical</option>
                        <option value="2">Emotional</option>
                        <option value="3">Intellectual</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default CreateEvent;