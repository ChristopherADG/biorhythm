import React, { Component } from 'react';
import axios from 'axios';
import { CALC_BIO_API_ROUTE } from '../../util/constants'
import SingleBioBox from '../../components/Dashboard/SingleBioBox/SingleBioBox';
import './Dashboard.css'
import TitleBar from '../../components/TitleBar/TitleBar';
import EventsBox from '../../components/Dashboard/EventsBox/EventsBox';
import BigGraphBox from '../../components/Dashboard/BigGraphBox/BigGraphBox';
import UserContext from '../../context/user-context'
import { withRouter } from 'react-router-dom'

class Dashboard extends Component {
    static contextType = UserContext

    state = {
        myBiorhythm: {},
        listBioRhythm: [],
        tempDate: '',
        dateStr: 'Today',
        bigChartData: {}
    }

    componentDidMount() {

        const { state } = this.context

        if (state.user.email === undefined) {
            return
        }

        axios.get(CALC_BIO_API_ROUTE + `/${state.user.email}`)
            .then(res => {
                this.setState({
                    myBiorhythm: res.data
                })
            })
            .catch(err => console.log(err));

        axios.get(CALC_BIO_API_ROUTE + `/${state.user.email}`, {
            params: {
                range: 15,
                limit: 5
            }
        })
            .then(res => {
                this.setState({
                    listBioRhythm: res.data
                })
                this.prepareListData()
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
                    <TitleBar title="Dashboard" />
                    <div className="row">
                        <div className="offset-lg-1 col-lg-3">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SingleBioBox
                                        phy={this.toPercent(this.state.myBiorhythm.phy)}
                                        emo={this.toPercent(this.state.myBiorhythm.emo)}
                                        inte={this.toPercent(this.state.myBiorhythm.int)}
                                        dateString={this.state.dateStr}
                                        changeDateHandler={this.changeDateHandler}
                                        submitNewDate={this.reloadSingleBioBox}
                                    />
                                </div>
                                <div className="col-lg-12">
                                    <EventsBox />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <BigGraphBox data={this.state.bigChartData} dateString={this.state.myBiorhythm.target_date_str} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">

                        </div>
                    </div>
                </div>

            </div>
        );
    }


    prepareListData() {
        let data = { phy: [], emo: [], int: [], date: [] }
        this.state.listBioRhythm.forEach(bio => {
            data.phy.push(bio.phy)
            data.emo.push(bio.emo)
            data.int.push(bio.int)
            data.date.push(bio.target_date_str.slice(5))
        })

        let bigChartData = {
            labels: data.date,
            datasets: [{
                label: 'Physical',
                fill: false,
                data: data.phy,
                borderColor: ['rgb(168, 140, 216)'],
                pointBackgroundColor: 'rgb(168, 140, 216)',
                borderWidth: 2
            },
            {
                label: 'Emotional',
                fill: false,
                data: data.emo,
                borderColor: ['rgb(15,195,171)'],
                pointBackgroundColor: 'rgb(15,195,171)',
                borderWidth: 2
            },
            {
                label: 'Intellectual',
                fill: false,
                data: data.int,
                borderColor: ['rgb(249,193,5)'],
                pointBackgroundColor: 'rgb(249,193,5)',
                borderWidth: 2
            }]
        }

        this.setState({
            bigChartData: bigChartData
        })
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
        const { state } = this.context
        if (this.state.tempDate !== '') {
            axios.get(CALC_BIO_API_ROUTE + `/${state.user.email}`, {
                params: {
                    target_date: this.state.tempDate
                }
            })
                .then(res => {
                    this.setState({
                        myBiorhythm: res.data,
                        dateStr: this.state.tempDate
                    })
                })
                .catch(err => console.log(err));
        }
    }


}

export default withRouter(Dashboard);