import React from 'react';
import Home from '../Home/Home';
import Error from '../Error/Error';
import Login from '../Login/Login';
import AuthRoute from '../HOC/AuthHoc';
import LoginRoute from '../HOC/LoginHoc';
import FlatView from '../FlatView/FlatView';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";



function Navigation() {

    return <React.StrictMode>
        <Router>
            <Switch>
                <LoginRoute path="/login">
                    <Login />
                </LoginRoute>
                <AuthRoute path="/home">
                    <Home />
                </AuthRoute>
                <AuthRoute path="/view/:id">
                    <FlatView />
                </AuthRoute>
                <AuthRoute exact path="/">
                    <Home />
                </AuthRoute>
                <AuthRoute>
                    <Error />
                </AuthRoute>
            </Switch>
        </Router>
    </React.StrictMode>


}

export default Navigation;
