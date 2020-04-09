import React from 'react';


const ViewProfile = (props) => {
    return (
        <div id="read-only-profile" className="slim-box">
            <br />
            <div className="row">
                <div className="col-md-4 col-12">
                    <div className="row">
                        <img className="profileCircle" src={props.profilePicture} alt="avatar" />
                    </div>
                    <br />
                </div>
                <div className="col-md-5 col-12">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Name</span>
                        </div>
                        <input className="text form-control" disabled value={props.fname} aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Lastname</span>
                        </div>
                        <input className="text form-control " disabled value={props.lname} aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Email</span>
                        </div>
                        <input className="text form-control " disabled value={props.email} aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Date</span>
                        </div>
                        <input id="datepicker" type="date" disabled value={props.bdate} className="form-control " aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <br />
                    <button type="button" className="btn btn-outline-primary" onClick={props.onEditClicked}>Edit</button>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default ViewProfile;