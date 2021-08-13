import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILED,
} from "../../../constants/ActionTypes";
import {fetchTaskFailed, fetchTaskRequest, fetchTaskSuccess} from "../List";

//this is the request function to start redux state
export const getUserRequest = () => ({
    type: GET_USER_REQUEST
});

//this is the failed function if the response has any error
export const getUserFailed = error => ({
    type: GET_USER_FAILED,
    payload: error
});

//this is the success function if the response status 200 and result has value.
export const getUserSuccess = data => ({
    type: GET_USER_SUCCESS,
    payload: data
});

export const getUser = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        dispatch(getUserRequest());
        firebase.auth().onAuthStateChanged((user) => {
            dispatch(getUserSuccess(user));
        });
    };
};
