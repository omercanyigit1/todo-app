import React, { useEffect, useState} from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom'
import { useSelector } from "react-redux";

const PrivateRoute = ({component: Component, ...rest}) => {
    let history = useHistory();
    const auth = useSelector(state => state.firebase.auth);
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        if(!auth.isEmpty) {
            setIsAuthenticated(true)
            history.push('/');
        } else {
            setIsAuthenticated(false)
            history.push('/signin');
        }
        // eslint-disable-next-line
    }, [auth])

    if(isAuthenticated === null) {
        return <></>
    }

    return (
        <Route {...rest} render={props =>
            !isAuthenticated ? (
                <Redirect to='/signin'/>
            ) : (
                <Component {...props} />
            )
        }
        />
    );
};

export default PrivateRoute;