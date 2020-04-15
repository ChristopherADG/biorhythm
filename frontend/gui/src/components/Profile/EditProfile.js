import React from 'react';

const getFile = () => {
    document.getElementById("avatar").click();
}

const EditProfile = (props) => {
    return (
        <div id="write-only-profile" className="slim-box">
            <br />
            <div className="row ">
                <div className="col-md-4 col-12">
                    <div className="row">
                        <img id="editable-img" className="profileCircle" src={props.profilePicture} alt="avatar" onClick={getFile} />
                    </div>
                    <br />
                </div>
                <div className="col-md-5 col-12">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Name</span>
                        </div>
                        <input className="text form-control" defaultValue={props.fname} onChange={props.onChangeFirstname} aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Lastname</span>
                        </div>
                        <input className="text form-control" defaultValue={props.lname} onChange={props.onChangeLastname} aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Email</span>
                        </div>
                        <input className="text form-control" disabled value={props.email} aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Date</span>
                        </div>
                        <input id="datepicker" type="date" defaultValue={props.bdate} onChange={props.onChangeBirthdate} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <br />
                    <button type="button" className="btn btn-outline-primary" onClick={props.updateUserHandler}>Update</button>
                    <button type="button" className="btn btn-outline-danger spaceBtn" onClick={props.onUpdateClicked}>Cancel</button>
                    <input onChange={props.onChangePicture} type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
                </div>
            </div>
        </div>
    )
}

export default EditProfile;