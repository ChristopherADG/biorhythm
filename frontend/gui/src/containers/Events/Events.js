import React, { Component } from 'react';
import axios from 'axios';
import { CREATE_EVENT, GET_EVENTS, GET_MY_EVENTS, GET_ORGANIZED_EVENTS, GET_JOINED_EVENTS, JOIN_EVENT, CALC_BIO_API_ROUTE } from '../../util/constants'
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
        scope: '1',
        date: '',
        myEventsState: 'all',
        availableState: 'all',
        events: [],
        myEvents: [],
        user: {},
        myBio: {}
    }

    constructor(props) {
        super(props);
        this.getEvents = this.getEvents.bind(this)
        this.getScopedEvents = this.getScopedEvents.bind(this)
        this.getMyEvents = this.getMyEvents.bind(this);
        this.getOrganizedEvents = this.getOrganizedEvents.bind(this);
        this.getJoinedEvents = this.getJoinedEvents.bind(this);
    }

    componentDidMount() {

        const { state } = this.context
        this.setState({
            user: state.user
        }, () => {
            this.getEvents();
            this.getMyEvents();
        })
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
        if (date === '') {
            this.setState({
                myBio: {}
            })
        } else {
            this.calcBio(date)
        }
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
                    this.getMyEvents();
                })
                .catch(err => console.log(err));
        }
    }

    processEvents(events) {
        let finalEvents = [];
        let key = 1;
        events.forEach(element => {
            element.key = key;
            finalEvents.push(element)
            key++;
        });

        finalEvents.sort((a, b) => {
            let temp1 = new Date(a.date).getTime();
            let temp2 = new Date(b.date).getTime();
            return temp1 - temp2;
        })
        return finalEvents;
    }

    getEvents() {
        axios.get(GET_EVENTS + '?pk=' + this.state.user.id)
            .then(res => {
                this.setState({
                    events: this.processEvents(res.data),
                    availableState: 'All'
                })
            })
            .catch(err => console.log(err));
    }

    getScopedEvents(scope) {
        let title = '';
        if (scope === 1) {
            title = 'Physical'
        } else if (scope === 2) {
            title = 'Emotional'
        } else {
            title = 'Intellectual'
        }

        axios.get(GET_EVENTS, {
            params: {
                pk: this.state.user.id,
                scope: scope
            }
        })
            .then(res => {
                this.setState({
                    events: this.processEvents(res.data),
                    availableState: title
                })
            })
            .catch(err => console.log(err));
    }

    getMyEvents() {
        axios.get(GET_MY_EVENTS + '?pk=' + this.state.user.id)
            .then(res => {
                this.setState({
                    myEvents: this.processEvents(res.data),
                    myEventsState: 'All'
                })
            })
            .catch(err => console.log(err));
    }

    getOrganizedEvents() {
        axios.get(GET_ORGANIZED_EVENTS + '?pk=' + this.state.user.id)
            .then(res => {
                this.setState({
                    myEvents: this.processEvents(res.data),
                    myEventsState: 'Hosted'
                })
            })
            .catch(err => console.log(err));
    }

    getJoinedEvents() {
        axios.get(GET_JOINED_EVENTS + '?pk=' + this.state.user.id)
            .then(res => {
                this.setState({
                    myEvents: this.processEvents(res.data),
                    myEventsState: 'Joined'
                })
            })
            .catch(err => console.log(err));
    }

    join = (event, user) => {
        axios.post(JOIN_EVENT, {
            event: event,
            user: user
        })
            .then(res => {
                this.getJoinedEvents();
                this.getEvents();
            })
            .catch(err => console.log(err));

    }

    calcBio(targetDate) {
        axios.get(CALC_BIO_API_ROUTE + `/${this.state.user.id}`, {
            params: {
                target_date: targetDate,
                limit: 2
            }
        })
            .then(res => {
                this.setState({
                    myBio: res.data
                })
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
                    <TitleBar title="Events" />
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        Create Event
                    </button>
                    <div className="row">
                        <div className="offset-lg-1 col-lg-5">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h3>My Events - <span>{this.state.myEventsState}</span></h3><hr />
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-secondary" onClick={this.getMyEvents}>All</button>
                                        <button type="button" className="btn btn-secondary" onClick={this.getOrganizedEvents}>Hosted</button>
                                        <button type="button" className="btn btn-secondary" onClick={this.getJoinedEvents}>Joined</button>
                                    </div>
                                    <br /><br />
                                    {this.state.myEvents.length > 0 &&
                                        this.state.myEvents.map((myEvent) => (
                                            <Event key={myEvent.key}
                                                title={myEvent.title}
                                                description={myEvent.description}
                                                date={myEvent.date}
                                                public={myEvent.isPublic}
                                                scope={myEvent.scope}
                                                owner={myEvent.creator + '' === state.user.id + ''}
                                                joinable={false}
                                                join={this.join}
                                                user={this.state.user.id}
                                                id={myEvent.id}
                                                bio={myEvent.myScopeBio}
                                            />
                                        ))
                                    }
                                    {this.state.myEvents.length < 1 &&
                                        <h6 className="text-center">No Events</h6>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h3>Available Events - <span>{this.state.availableState}</span></h3><hr />
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button onClick={this.getEvents} type="button" className="btn btn-secondary">All</button>
                                        <button onClick={() => this.getScopedEvents(1)} type="button" className="btn btn-secondary">Physical</button>
                                        <button onClick={() => this.getScopedEvents(2)} type="button" className="btn btn-secondary">Emotional</button>
                                        <button onClick={() => this.getScopedEvents(3)} type="button" className="btn btn-secondary">Intellectual</button>
                                    </div>
                                    <br /><br />
                                    {this.state.events.length > 0 &&
                                        this.state.events.map((post) => (
                                            <Event
                                                key={post.id}
                                                title={post.title}
                                                description={post.description}
                                                date={post.date}
                                                public={post.isPublic}
                                                scope={post.scope}
                                                owner={post.creator === state.user.id}
                                                join={this.join}
                                                joinable={true}
                                                user={this.state.user.id}
                                                id={post.id}
                                                bio={post.myScopeBio}
                                            />
                                        ))
                                    }
                                    {this.state.events.length < 1 &&
                                        <h6 className="text-center">No Events</h6>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    bio={this.state.myBio}
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