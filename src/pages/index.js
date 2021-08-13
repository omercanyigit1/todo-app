import React from "react";
import {Switch, Route} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import asyncComponent from "../utils/asyncComponent";

const Pages = () => {
    return (
        <Switch>
            <Route path={`/signin`} component={asyncComponent(() => import('./auth/SignIn'))} />
            <PrivateRoute path='/' exact component={asyncComponent(() => import('./Home'))} />
        </Switch>
    )
}


export default Pages;