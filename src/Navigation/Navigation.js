import React from 'react';
import Home from '../Home/Home';
import Error from '../Error/Error';
import Login from '../Login/Login';
import AuthRoute from '../HOC/AuthHoc';
import LoginRoute from '../HOC/LoginHoc';
import FlatView from '../FlatView/FlatView';
import Details from '../Details/Details';
import EditView from '../EditView/EditView';
import AddView from '../EditView/AddView';
import Bills from '../Bills/Bills';
import AddBill from '../Bills/AddBill';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";



function Navigation() {

    return <Router>
        <Switch>
            <LoginRoute path="/login">
                <Login />
            </LoginRoute>
            <AuthRoute path="/home">
                <Home />
            </AuthRoute>
            <AuthRoute path="/details">
                <Details />
            </AuthRoute>
            <AuthRoute path="/view/:id">
                <FlatView />
            </AuthRoute>
            <AuthRoute path="/edit/:id">
                <EditView />
            </AuthRoute>
            <AuthRoute path="/addRoom">
                <AddView />
            </AuthRoute>
            <AuthRoute path="/bills">
                <Bills />
            </AuthRoute>
            <AuthRoute path="/addBill">
                <AddBill />
            </AuthRoute>
            <AuthRoute exact path="/">
                <Home />
            </AuthRoute>
            <AuthRoute>
                <Error />
            </AuthRoute>
        </Switch>
    </Router>

}

export default Navigation;
