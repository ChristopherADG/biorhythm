import React, { Component } from 'react';
import axios from 'axios';
import { CREATE_EVENT, GET_EVENTS } from '../../util/constants'
import TitleBar from '../../components/TitleBar/TitleBar';
import UserContext from '../../context/user-context'
import Event from '../../components/Events/event'
import CreateEvent from '../../components/Events/eventForm';
import './Events.css'

class Events extends Component {
    static contextType = UserContext

    state = {
        title: '',
        description: '',
        isPublic: false,
        scope: '',
        date: '',
        events: []
    }

    componentDidMount() {
        this.getEvents();
    }

    changeTitle = (event) => {
        const target = event.target;
        let title = target.value;
        this.setState({
            title: title
        })
    }

    changeDesc = (event) => {
        const target = event.target;
        let desc = target.value;
        this.setState({
            description: desc
        })
    }

    changeIsPublic = (event) => {
        const target = event.target;
        let isPublic = target.checked;
        this.setState({
            isPublic: isPublic
        })
    }

    changeScope = (event) => {
        const target = event.target;
        let scope = target.value;
        this.setState({
            scope: scope
        })
    }

    changeDate = (event) => {
        const target = event.target;
        let date = target.value;
        this.setState({
            date: date
        })
    }

    create = (event) => {
        event.preventDefault();

        const { state } = this.context

        if (this.state.title === '' || this.state.description === '' || this.state.isPublic === ''
            || this.state.date === '' || this.state.scope === '') {
            alert('No field should be empty');
            return;
        } else {
            axios.post(CREATE_EVENT, {
                creator: state.user.id,
                title: this.state.title,
                isPublic: this.state.isPublic,
                description: this.state.description,
                date: this.state.date,
                scope: this.state.scope
            })
                .then(res => {
                    this.getEvents();
                })
                .catch(err => console.log(err));
        }
    }

    processEvents(events) {
        const { state } = this.context
        let finalEvents = [];
        events.forEach(element => {
            finalEvents.push(element)
        });

        return finalEvents.reverse();
    }

    getEvents() {
        axios.get(GET_EVENTS)
            .then(res => {
                this.setState({
                    events: this.processEvents(res.data)
                })
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }

    render() {

        const { state } = this.context

        if (state.user.id === undefined) {
            this.props.history.push('/login')
        }

        return (
            <div>
                <div className="container-fluid">
                    <br />
                    <TitleBar title="Events" />
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        Create Event
</button>
                    <div className="row">
                        <div className="offset-lg-1 col-lg-5">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h3>My Events</h3><hr />
                                    {
                                        this.state.events.map((post) => (
                                            <Event
                                                title={post.title}
                                                description={post.description}
                                                date={post.date}
                                                public={post.isPublic}
                                                scope={post.scope}
                                                join={post.creator != state.user.id}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h3>Available Events</h3><hr />
                                    {
                                        this.state.events.map((post) => (
                                            <Event
                                                title={post.title}
                                                description={post.description}
                                                date={post.date}
                                                public={post.isPublic}
                                                scope={post.scope}
                                                join={post.creator != state.user.id}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Create Event</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <CreateEvent
                                    titleHandler={this.changeTitle}
                                    descHandler={this.changeDesc}
                                    isPublicHandler={this.changeIsPublic}
                                    scopeHandler={this.changeScope}
                                    dateHandler={this.changeDate}
                                    createHandler={this.create}
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.create}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Events;