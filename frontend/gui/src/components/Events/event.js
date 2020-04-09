import React from 'react'
import EditEventForm from './editEventForm';

const Event = (props) => {
    return (
        <div>
            <div className="card event">
                <div className="card-header">
                    {props.title + "    "}
                    {props.owner &&
                        < i className="material-icons eventIcon">house</i>
                    }
                    {props.owner &&
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#editModal">
                            < i className="material-icons eventIcon">edit</i>
                        </button>
                    }
                    {!props.public &&
                        < i className="material-icons eventIcon lock">lock</i>
                    }

                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="card-text">{props.description}</p>
                            <h6 className="card-subtitle mb-2 text-muted">{props.date}</h6>
                            {props.scope === 1 &&
                                <p className="col-6 bio-label"> <span className="circle color-purple"></span> Physical</p>

                            }
                            {props.scope === 3 &&
                                <p className="col-6 bio-label"> <span className="circle color-yellow"></span> Intellectual</p>
                            }
                            {props.scope === 2 &&
                                <p className="col-6 bio-label"> <span className="circle color-green"></span> Emotional</p>
                            }
                            {props.joinable &&
                                <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target={'#joinModal' + props.id}>Join</button>
                            }
                        </div>
                        <div className="col-lg-6">
                            {props.join &&
                                <p className="card-text"><i className="material-icons lock">favorite</i>Forecast: {props.bio * 100}%</p>
                            }
                        </div>
                    </div>

                </div>
            </div >

            <div className="modal fade" id={'joinModal' + props.id} role="dialog" aria-labelledby="joinModalLabel" >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            Are you sure?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => props.join(props.id, props.user)}>OK</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create Event</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <EditEventForm
                                titleVal={props.title}
                                descVal={props.description}
                                editTitleHandler={props.editTitleHandler}
                                editDescHandler={props.editDescHandler}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => props.updateHandler(props.id)}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default Event;