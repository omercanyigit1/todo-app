import {applyMiddleware, compose, createStore} from 'redux'
import {routerMiddleware} from 'connected-react-router'
import thunk from 'redux-thunk';
import createRootReducer from '../reducers'
import createLogger from 'redux-logger';

const createBrowserHistory = require('history').createBrowserHistory;

export const history = createBrowserHistory();

const routeMiddleware = routerMiddleware(history);

const middlewares = [thunk, routeMiddleware, createLogger];

export default function configureStore(preloadedState) {
    const store = createStore(
        createRootReducer(history), // root reducer with router state
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions
                ...middlewares
            ),
        ),
    );

    return store;
}
