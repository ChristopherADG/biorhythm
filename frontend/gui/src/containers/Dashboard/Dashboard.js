import React, { Component } from 'react';
import axios from 'axios';
import { CALC_BIO_API_ROUTE } from '../../util/constants'
import SingleBioBox from '../../components/Dashboard/SingleBioBox/SingleBioBox';
import './Dashboard.css'
import TitleBar from '../../components/TitleBar/TitleBar';
import EventsBox from '../../components/Dashboard/EventsBox/EventsBox';
import SessionHandler from '../../util/sessions'

class Dashboard extends Component {

    componentDidMount() {
        axios.get(CALC_BIO_API_ROUTE + `/${SessionHandler.getStorageValue()}`)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <TitleBar title="Dashboard" />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <SingleBioBox />
                        </div>
                        <div className="col-md-8">
                            <EventsBox />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <SingleBioBox />
                        </div>
                    </div>
                </div>

            </div>
        );
    }


}

export default Dashboard;