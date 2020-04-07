import React from 'react';


const EditProfile = (props) => {
    return (
        <div id="write-only-profile" className="slim-box">
            <div className="row inner-content-profile">
                <div className="col-md-4">
                    <div id="profileCircle"></div>
                </div>
                <div className="col inner-content-profile">
                    <div className="row">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Name</span>
                            </div>
                            <input className="text form-control" defaultValue={props.fname} onChange={props.onChangeFirstname} aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Lastname</span>
                            </div>
                            <input className="text form-control" defaultValue={props.lname} onChange={props.onChangeLastname} aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-group input-group-sm mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Date</span>
                            </div>
                            <input id="datepicker" type="date" defaultValue={props.bdate} onChange={props.onChangeBirthdate} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <button type="button" className="btn btn-outline-danger" onClick={props.updateUserHandler}>Update</button>
                        <button type="button" className="btn btn-outline-primary" onClick={props.onUpdateClicked}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;