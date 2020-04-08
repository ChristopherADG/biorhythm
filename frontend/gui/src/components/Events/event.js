import React, { Component } from 'react'


const Event = (props) => {
    return (
        <div className="card event">
            <div class="card-header">
                {props.title + "    "}
                {!props.public &&
                    < i class="material-icons eventIcon lock">lock</i>
                }

            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-6">
                        <p className="card-text">{props.description}</p>
                        <h6 className="card-subtitle mb-2 text-muted">{props.date}</h6>
                        {props.scope == 1 &&
                            <p className="col-6 bio-label"> <span className="circle color-purple"></span> Physical</p>

                        }
                        {props.scope == 3 &&
                            <p className="col-6 bio-label"> <span className="circle color-yellow"></span> Intellectual</p>
                        }
                        {props.scope == 2 &&
                            <p className="col-6 bio-label"> <span className="circle color-green"></span> Emotional</p>
                        }
                        {props.join &&
                            <button type="button" className="btn btn-outline-primary" >Join</button>
                        }
                    </div>
                    <div className="col-lg-6">
                        {props.join &&
                            <p className="card-text">Compatibility < i class="material-icons lock">favorite</i></p>
                        }
                    </div>
                </div>

            </div>
        </div >
    );

}

export default Event;