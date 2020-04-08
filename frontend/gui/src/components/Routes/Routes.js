import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Signup from '../../containers/Signup/Signup';
import Signin from '../../containers/Signin/Signin';
import { LOGIN_LINK, SIGNUP_LINK, DASHBOARD_LINK, PROFILE_LINK, EVENTS_LINK } from '../../util/constants'
import Dashboard from '../../containers/Dashboard/Dashboard';
import Profile from '../../containers/Profile/Profile';
import Events from '../../containers/Events/Events';


class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={Dashboard} exact />
                <Route path={SIGNUP_LINK} component={Signup} exact />
                <Route path={LOGIN_LINK} component={Signin} exact />
                <Route path={DASHBOARD_LINK} component={Dashboard} exact />
                <Route path={PROFILE_LINK} component={Profile} exact />
                <Route path={EVENTS_LINK} component={Events} exact />
            </Switch >
        );
    }
}

export default Routes;