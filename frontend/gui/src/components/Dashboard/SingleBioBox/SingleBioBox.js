import React from 'react';
import './SingleBioBox.css'


const SingleBioBox = () => {
    return (
        <div className="box small-box">
            <div className="container">
                <div className="inner-content">
                    <div className="row">
                        <h5>Biorhythm</h5>
                    </div>
                    <div className="row">
                        <p className="subtitle">Date: <span>Today</span></p>
                    </div>
                    <div className="row">
                        <div className="col row">
                            <span className="circle color-purple"></span>
                            <p className="col-6 bio-label">Physical</p>
                        </div>
                        <p className="col"><span className="bio-label">40%</span></p>
                    </div>
                    <div className="row">
                        <div className="col row">
                            <span className="circle color-green"></span>
                            <p className="col-6 bio-label">Emotional</p>
                        </div>
                        <p className="col"><span className="bio-label">40%</span></p>
                    </div>
                    <div className="row">
                        <div className="col row">
                            <span className="circle color-yellow"></span>
                            <p className="col-6 bio-label">Intellectual</p>
                        </div>
                        <p className="col"><span className="bio-label">40%</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBioBox;