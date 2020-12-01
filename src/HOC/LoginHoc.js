import React from "react";
import { Redirect, Route } from "react-router-dom";

const LoginRoute = props => {
    let loginInfo = localStorage.getItem("login");

    if (loginInfo === "loggedin") return <Redirect to="/home" />;
    else return <Route {...props} />;

};


export default LoginRoute;