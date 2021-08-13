import {
    ADD_TASK_REQUEST,
    ADD_TASK_SUCCESS,
    ADD_TASK_FAILED,
    REMOVE_TASK_REQUEST,
    REMOVE_TASK_SUCCESS,
    REMOVE_TASK_FAILED,
} from "../../../constants/ActionTypes";

//this is the request function to start redux state
export const addTaskRequest = () => ({
    type: ADD_TASK_REQUEST
});

//this is the failed function if the response has any error
export const addTaskFailed = error => ({
    type: ADD_TASK_FAILED,
    payload: error
});

//this is the success function if the response status 200 and result has value.
export const addTaskSuccess = data => ({
    type: ADD_TASK_SUCCESS,
    payload: data
});

//this is the request function to start redux state
export const removeTaskRequest = () => ({
    type: REMOVE_TASK_REQUEST
});

//this is the failed function if the response has any error
export const removeTaskFailed = error => ({
    type: REMOVE_TASK_FAILED,
    payload: error
});

//this is the success function if the response status 200 and result has value.
export const removeTaskSuccess = () => ({
    type: REMOVE_TASK_SUCCESS,
});


export const addTask = (task) => {
    return (dispatch, getState, {getFirebase}) => {
        const firestore = getFirebase().firestore();
        const authorId = getState().firebase.auth.uid;
        dispatch(addTaskRequest());
        firestore.collection("tasks").add({
            ...task,
            authorId: authorId,
            date: new Date(),
        }).then(() => {
            dispatch(addTaskSuccess(task));
        }).catch((err) => {
            dispatch(addTaskFailed(err));
        });
    };
};

export const removeTask = (task) => {
    return (dispatch, getState, {getFirebase}) => {
        const firestore = getFirebase().firestore();
        dispatch(removeTaskRequest());
        firestore.collection("tasks").doc(task.id).delete().then(() => {
            dispatch(removeTaskSuccess());
        }).catch((err) => {
            dispatch(removeTaskFailed(err));
        });
    };
};