import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Signup from '../../containers/Signup/Signup';
import Signin from '../../containers/Signin/Signin';
import { LOGIN_LINK, SIGNUP_LINK } from '../../util/constants'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={null} exact />
            <Route path={SIGNUP_LINK} component={Signup} exact />
            <Route path={LOGIN_LINK} component={Signin} exact />
        </Switch>
    );
}

export default Routes;