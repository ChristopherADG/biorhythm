import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Signup from '../../containers/Signup/Signup';
import Signin from '../../containers/Signin/Signin';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={null} exact />
            <Route path="/signup" component={Signup} exact />
            <Route path="/login" component={Signin} exact />
        </Switch>
    );
}

export default Routes;