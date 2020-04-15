import React from 'react';

const EditEventForm = (props) => {
    return (

        <div className="container">
            <div className="row">
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Title</span>
                    </div>
                    <input type="text" onChange={props.editTitleHandler} defaultValue={props.titleVal} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </div>
            </div>
            <div className="row">
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Description</span>
                    </div>
                    <textarea className="form-control" onChange={props.editDescHandler} defaultValue={props.descVal} aria-label="Small" aria-describedby="inputGroup-sizing-sm" rows="5" cols="50" />
                </div>
            </div>

        </div>
    )
}

export default EditEventForm;