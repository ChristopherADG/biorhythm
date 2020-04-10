import React from 'react'
import EditEventForm from './editEventForm';
import { Doughnut } from 'react-chartjs-2'


const calc = (number) => {
    return (number * 50) / 100
}

const Event = (props) => {
    return (
        <div className="eventSepartion">
            <div className="card event">
                <div className="card-header ">
                    {props.title + "    "}
                    {props.owner &&
                        < i className="material-icons eventIcon">house</i>
                    }
                    {!props.public &&
                        < i className="material-icons eventIcon lock">lock</i>
                    }

                </div>
                <div className="card-body text-center">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="card-text">{props.description}</p>
                        </div>
                    </div>
                    <br />
                    <div className="row text-center">
                        <div className="col-lg-6 col-12 space-sm">
                            <h6 className="card-subtitle mb-2 text-muted">{props.date}</h6>
                            {props.scope === 1 &&
                                <p > <span className="circle color-purple"></span> Physical</p>

                            }
                            {props.scope === 3 &&
                                <p > <span className="circle color-yellow"></span> Intellectual</p>
                            }
                            {props.scope === 2 &&
                                <p > <span className="circle color-green"></span> Emotional</p>
                            }
                            {props.joinable &&
                                <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target={'#joinModal' + props.id}>Join</button>
                            }
                            {!props.joinable && !props.owner &&
                                <button type="button" className="btn btn-outline-warning">Unjoin</button>
                            }
                            {props.owner &&
                                <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target={'#editModal' + props.id}>
                                    < i className="material-icons eventIcon">edit</i>
                                </button>
                            }
                            {props.owner &&
                                <button type="button" className="btn btn-outline-danger spaceBtn" data-toggle="modal" data-target={'#deleteModal' + props.id}>
                                    < i className="material-icons eventIcon">delete</i>
                                </button>
                            }
                            <br />
                        </div>
                        <div className="col-lg-6 col-12">
                            {props.join &&
                                <React.Fragment>
                                    <h6 className="card-subtitle mb-2 text-muted text-center">Forecast: {parseInt(props.bio * 100)}%</h6>
                                    <Doughnut data={{
                                        datasets: [
                                            {
                                                data: [
                                                    50 - calc(parseInt(props.bio * 100)),
                                                    50 + calc(parseInt(props.bio * 100))
                                                ],
                                                backgroundColor: ['rgb(255,0,0)', 'rgb(0, 255, 0)']
                                            }], labels: [
                                                'No',
                                                'Yes',
                                            ]
                                    }} options={{
                                        legend: {
                                            display: false
                                        }
                                    }} />
                                </React.Fragment>
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

            <div className="modal fade" id={'editModal' + props.id} tabIndex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Event</h5>
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

            <div className="modal fade" id={'deleteModal' + props.id} role="dialog" aria-labelledby="deleteModalLabel" >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            Are you sure you wish to delete this event?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => props.deleteHandler(props.id)}>OK</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default Event;