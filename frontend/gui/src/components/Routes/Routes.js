import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Signup from '../../containers/Signup/Signup';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={null} exact />
            <Route path="/signup" component={Signup} exact />
        </Switch>
    );
}

export default Routes;