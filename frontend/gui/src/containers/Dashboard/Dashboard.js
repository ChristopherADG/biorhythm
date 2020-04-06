import React, { Component } from 'react';
import axios from 'axios';
import { CALC_BIO_API_ROUTE } from '../../util/constants'
import SingleBioBox from '../../components/Dashboard/SingleBioBox/SingleBioBox';
import './Dashboard.css'
import TitleBar from '../../components/TitleBar/TitleBar';
import EventsBox from '../../components/Dashboard/EventsBox/EventsBox';
import SessionHandler from '../../util/sessions'

class Dashboard extends Component {

    state = {
        myBiorhythm: {},
        tempDate: '',
        dateStr: 'Today'
    }

    componentDidMount() {
        axios.get(CALC_BIO_API_ROUTE + `/${SessionHandler.getStorageValue()}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    myBiorhythm: res.data
                })
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
                            <SingleBioBox
                                phy={this.toPercent(this.state.myBiorhythm.phy)}
                                emo={this.toPercent(this.state.myBiorhythm.emo)}
                                inte={this.toPercent(this.state.myBiorhythm.int)}
                                dateString={this.state.dateStr}
                                changeDateHandler={this.changeDateHandler}
                                submitNewDate={this.reloadSingleBioBox}
                            />
                        </div>
                        <div className="col-lg-8">
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


    toPercent(num) {
        return parseInt(num * 100)
    }

    changeDateHandler = (event) => {
        const target = event.target;
        let date = target.value;
        this.setState({
            tempDate: date
        })
    }

    reloadSingleBioBox = (event) => {
        event.preventDefault();
        if (this.state.tempDate !== '') {
            axios.get(CALC_BIO_API_ROUTE + `/${SessionHandler.getStorageValue()}`, {
                params: {
                    target_date: this.state.tempDate
                }
            })
                .then(res => {
                    console.log(res.data);
                    this.setState({
                        myBiorhythm: res.data,
                        dateStr: this.state.tempDate
                    })
                })
                .catch(err => console.log(err));
        }
    }


}

export default Dashboard;