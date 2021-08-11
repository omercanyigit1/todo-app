import React from "react";
import asyncComponent from "./../utils/asyncComponent";
import {Switch, Route} from "react-router-dom";

const Pages = () => {

    return (
        <Switch>
            <Route path={`/`} exact component={asyncComponent(() => import('./Home'))}/>
            <Route path={`/`} component={asyncComponent(() => import('./auth/SignIn'))} />
        </Switch>
    )
}

export default Pages;