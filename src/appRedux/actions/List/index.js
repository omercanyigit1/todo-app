import {
    ADD_TASK_REQUEST,
    ADD_TASK_SUCCESS,
    ADD_TASK_FAILED,
    REMOVE_TASK_REQUEST,
    REMOVE_TASK_SUCCESS,
    REMOVE_TASK_FAILED,
    GET_TASK_REQUEST,
    GET_TASK_SUCCESS,
    GET_TASK_FAILED,
    UPDATE_TASK_REQUEST,
    UPDATE_TASK_SUCCESS,
    UPDATE_TASK_FAILED,
} from "../../../constants/ActionTypes";

//this is the request function to start redux state
export const fetchTaskRequest = () => ({
    type: GET_TASK_REQUEST
});

//this is the failed function if the response has any error
export const fetchTaskFailed = error => ({
    type: GET_TASK_FAILED,
    payload: error
});

//this is the success function if the response status 200 and result has value.
export const fetchTaskSuccess = data => ({
    type: GET_TASK_SUCCESS,
    payload: data
});

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
export const removeTaskSuccess = data => ({
    type: REMOVE_TASK_SUCCESS,
    payload: data
});

//this is the request function to start redux state
export const updateTaskRequest = () => ({
    type: UPDATE_TASK_REQUEST
});

//this is the failed function if the response has any error
export const updateTaskFailed = error => ({
    type: UPDATE_TASK_FAILED,
    payload: error
});

//this is the success function if the response status 200 and result has value.
export const updateTaskSuccess = data => ({
    type: UPDATE_TASK_SUCCESS,
    payload: data
});

export const fetchTask = () => {
    let tasks = [];

    return (dispatch, getState, {getFirebase}) => {
        const authorId = getState().firebase.auth.uid;
        const firestore = getFirebase().firestore();
        dispatch(fetchTaskRequest());
        firestore.collection("tasks").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let taskAuthorId = doc.data().authorId;

                let task = {
                    id: doc.id,
                    ...doc.data()
                }

                if(taskAuthorId === authorId) {
                    tasks.push(task);
                }
            });
            dispatch(fetchTaskSuccess(tasks));
        }).catch((err) => {
            dispatch(fetchTaskFailed(err));
        });
    };
};

export const addTask = (task) => {

    return (dispatch, getState, {getFirebase}) => {
        const firestore = getFirebase().firestore();
        const authorId = getState().firebase.auth.uid;
        const authorName = localStorage.getItem('username');
        dispatch(addTaskRequest());

        //we create a task with fields
        let taskObj = {
            task: task,
            authorId: authorId,
            authorName: authorName,
            date: new Date()
        }

        firestore.collection("tasks").add(taskObj).then((querySnapshot) => {
            taskObj.id = querySnapshot.id;
            dispatch(addTaskSuccess(taskObj));
        }).catch((err) => {
            dispatch(addTaskFailed(err));
        });
    };
};

export const updateTask = (task, value) => {

    return (dispatch, getState, {getFirebase}) => {
        const firestore = getFirebase().firestore();
        dispatch(updateTaskRequest());
        firestore.collection("tasks").doc(task.id).update({'task': value}).then(() => {
            task.task = value;
            dispatch(updateTaskSuccess(task));
        }).catch((err) => {
            dispatch(updateTaskFailed(err));
        });
    };
};

export const removeTask = (task) => {

    return (dispatch, getState, {getFirebase}) => {
        const firestore = getFirebase().firestore();
        dispatch(removeTaskRequest());
        firestore.collection("tasks").doc(task.id).delete().then(() => {
            dispatch(removeTaskSuccess(task));
        }).catch((err) => {
            dispatch(removeTaskFailed(err));
        });
    };
};