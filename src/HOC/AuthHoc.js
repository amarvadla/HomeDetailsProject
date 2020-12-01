import React from "react";
import { Redirect, Route } from "react-router-dom";

const AuthRoute = props => {
    let loginInfo = localStorage.getItem("login");

    if (loginInfo === "loggedin") return <Route {...props} />;
    else return <Redirect to="/login" />;

};


export default AuthRoute;