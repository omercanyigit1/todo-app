import {
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILED,
    SIGN_OUT_REQUEST,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_FAILED,
} from "../../../constants/ActionTypes";
import firebase from "../../../constants/firebase";

//this is the request function to start redux state
export const postSignInRequest = () => ({
    type: SIGN_IN_REQUEST
});

//this is the failed function if the response has any error
export const postSignInFailed = error => ({
    type: SIGN_IN_FAILED,
    payload: error
});

//this is the success function if the response status 200 and result has value.
export const postSignInSuccess = data => ({
    type: SIGN_IN_SUCCESS,
    payload: data
});

//this is the request function to start redux state
export const postSignOutRequest = () => ({
    type: SIGN_OUT_REQUEST
});

//this is the failed function if the response has any error
export const postSignOutFailed = error => ({
    type: SIGN_OUT_FAILED,
    payload: error
});

//this is the success function if the response status 200 and result has value.
export const postSignOutSuccess = () => ({
    type: SIGN_OUT_SUCCESS,
});

export const postSignIn = (credentials) => {
    let data = {
        username: credentials.username,
        name: credentials.name,
        lastname: credentials.lastname,
    }

    return (dispatch) => {
        dispatch(postSignInRequest());

    }
};

export const postSignOut = () => {
    return (dispatch) => {
        dispatch(postSignOutRequest());

    }
}
