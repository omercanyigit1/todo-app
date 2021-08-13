import React from "react";
import {Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import HomePage from "./Home";
import SignInPage from "./auth/SignIn";

const Pages = (props) => {

    return (
        <Switch>
            <Route path={`/`} exact component={HomePage}/>
            <Route path={`/signin`} component={SignInPage} />
        </Switch>
    )
}


export default Pages;