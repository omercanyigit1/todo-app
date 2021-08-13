import React from "react";
import asyncComponent from "./../utils/asyncComponent";
import {Switch, Route} from "react-router-dom";
import {connect} from "react-redux";

const Pages = (props) => {
    const {auth, firebase} = props;

    return (
        <Switch>
            <Route path={`/`} exact component={asyncComponent(() => import('./Home'))}/>
            <Route path={`/signin`} component={asyncComponent(() => import('./auth/SignIn'))} />
        </Switch>
    )
}

const mapStateToProps = (state) => {
    return {
        //auth: state.firebase.auth,
        firebase: state.firebase
    }
}

export default connect(mapStateToProps, {})(Pages);