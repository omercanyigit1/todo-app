import {
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILED,
    API_URL, FETCH_LIST_REQUEST, FETCH_LIST_FAILED, FETCH_LIST_SUCCESS
} from "../../../constants/ActionTypes";
import axios from "axios";
import {getListRequest} from "../List";

//this is the request function to start redux state
export const postSignInRequest = () => ({
    type: FETCH_LIST_REQUEST
});

//this is the failed function if the response has any error
export const postSignInFailed = error => ({
    type: FETCH_LIST_FAILED,
    payload: error
});

//this is the success function if the response status 200 and result has value.
export const postSignInSuccess = data => ({
    type: FETCH_LIST_SUCCESS,
    payload: data
});

export const postSignIn = (value, offset, query) => {

    return dispatch => {
        dispatch(postSignInRequest());

    }
};

