import React from 'react';
import './SingleBioBox.css'


const SingleBioBox = (props) => {
    return (
        <div className="box small-box">
            <div className="container">
                <div className="inner-content">
                    <div className="row">
                        <h5>Biorhythm</h5>
                    </div>
                    <div className="row">
                        <p className="subtitle">Date: <span>{props.dateString}</span></p>
                    </div>
                    <div className="row">
                        <div className="col row">
                            <span className="circle color-purple"></span>
                            <p className="col-6 bio-label">Physical</p>
                        </div>
                        <p className="col"><span className="bio-label">{props.phy}%</span></p>
                    </div>
                    <div className="row">
                        <div className="col row">
                            <span className="circle color-green"></span>
                            <p className="col-6 bio-label">Emotional</p>
                        </div>
                        <p className="col"><span className="bio-label">{props.emo}%</span></p>
                    </div>
                    <div className="row">
                        <div className="col row">
                            <span className="circle color-yellow"></span>
                            <p className="col-6 bio-label">Intellectual</p>
                        </div>
                        <p className="col"><span className="bio-label">{props.inte}%</span></p>
                    </div>
                    <div className="row">
                        <div className="input-group input-group-sm mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Date</span>
                            </div>
                            <input id="datepicker" type="date" onChange={props.changeDateHandler} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                            <div className="input-group-append">
                                <button className="input-group-text" onClick={props.submitNewDate}>
                                    <span>
                                        <svg className="bi bi-arrow-clockwise" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M3.17 6.706a5 5 0 017.103-3.16.5.5 0 10.454-.892A6 6 0 1013.455 5.5a.5.5 0 00-.91.417 5 5 0 11-9.375.789z" clipRule="evenodd" />
                                            <path fillRule="evenodd" d="M8.147.146a.5.5 0 01.707 0l2.5 2.5a.5.5 0 010 .708l-2.5 2.5a.5.5 0 11-.707-.708L10.293 3 8.147.854a.5.5 0 010-.708z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBioBox;