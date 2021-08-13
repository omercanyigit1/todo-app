import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/App.css';
import reportWebVitals from './reportWebVitals';
import {Global} from "./components/styled";
import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {getFirebase, ReactReduxFirebaseProvider} from "react-redux-firebase";
import createRootReducer from "./appRedux/reducers";
import firebase from "./constants/firebase";
import {createFirestoreInstance} from 'redux-firestore';
import {Provider} from "react-redux";
import {routerMiddleware} from "connected-react-router";

const middlewares = [thunk.withExtraArgument({getFirebase}), createLogger];

const store = createStore(createRootReducer, {}, compose(applyMiddleware(...middlewares)));

const rrfProps = {
    firebase,
    config: {},
    dispatch: store.dispatch,
    createFirestoreInstance
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <Global/>
            <App/>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
