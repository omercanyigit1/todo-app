import React, {useEffect} from "react";
import {Switch, Route, useHistory} from "react-router-dom";
import {connect, useSelector} from "react-redux";
import HomePage from "./Home";
import SignInPage from "./auth/SignIn";
import PrivateRoute from "./PrivateRoute";

const Pages = (props) => {

    return (
        <Switch>
            <Route path={`/signin`} component={SignInPage} />
            <PrivateRoute path='/' exact component={HomePage}/>
        </Switch>
    )
}

const mapStateToProps = state => {
    return {
        isEmpty: state.firebase.auth.isEmpty
    }
}


export default connect(mapStateToProps, {})(Pages);