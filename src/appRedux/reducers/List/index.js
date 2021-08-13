import {
    ADD_TASK_REQUEST,
    ADD_TASK_SUCCESS,
    ADD_TASK_FAILED,
    REMOVE_TASK_REQUEST,
    REMOVE_TASK_SUCCESS,
    REMOVE_TASK_FAILED,
} from "../../../constants/ActionTypes";

const initialState = {
    loading: false,
    error: null,
    tasks: []
};

const ListReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_TASK_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case ADD_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
            }
        case ADD_TASK_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case REMOVE_TASK_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case REMOVE_TASK_SUCCESS: {
            return state;
        }
        case REMOVE_TASK_FAILED: {
            return state;
        }
        default:
            return state;
    }
}

export default ListReducer;