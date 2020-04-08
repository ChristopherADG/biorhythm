import React from 'react';


const ViewProfile = (props) => {
    return (
        <div id="read-only-profile" className="slim-box">
            <div className="row inner-content-profile">
                <div className="col-md-4 inner-content-profile">
                    <img className="profileCircle" src={props.profilePicture} alt="avatar" />
                </div>
                <div className="col inner-content-profile">
                    <div className="row">
                        <span id="name">{props.fname + ' ' + props.lname}</span>
                    </div>
                    <div className="row">
                        <span id="email">{props.email}</span>
                    </div>
                    <div className="row">
                        <span id="date">{props.bdate}</span>
                    </div>
                    <br />
                    <div className="row">
                        <button type="button" className="btn btn-outline-primary" onClick={props.onEditClicked}>Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProfile;