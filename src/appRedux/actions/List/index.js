import {
    FETCH_LIST_REQUEST,
    FETCH_LIST_SUCCESS,
    FETCH_LIST_FAILED,
    API_URL
} from "../../../constants/ActionTypes";

import axios from "axios";

//this is the request function to start redux state
export const getListRequest = () => ({
    type: FETCH_LIST_REQUEST
});

//this is the failed function if the response has any error
export const getListFailed = error => ({
    type: FETCH_LIST_FAILED,
    payload: error
});

//this is the success function if the response status 200 and result has value.
export const getListSuccess = data => ({
    type: FETCH_LIST_SUCCESS,
    payload: data
});

//this is the list function to get lists. You can fetch the difference datas with the value parameters.
export const getList = (value, offset, query) => {

    return dispatch => {
        dispatch(getListRequest());
    }
};
