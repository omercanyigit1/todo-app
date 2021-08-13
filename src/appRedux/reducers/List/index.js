import {
    GET_TASK_REQUEST,
    GET_TASK_SUCCESS,
    GET_TASK_FAILED,
    ADD_TASK_REQUEST,
    ADD_TASK_SUCCESS,
    ADD_TASK_FAILED,
    UPDATE_TASK_REQUEST,
    UPDATE_TASK_SUCCESS,
    UPDATE_TASK_FAILED,
    REMOVE_TASK_REQUEST,
    REMOVE_TASK_SUCCESS,
    REMOVE_TASK_FAILED,
} from "../../../constants/ActionTypes";
import _ from 'lodash';

const initialState = {
    loading: false,
    error: null,
    tasks: []
};

const ListReducer = (state = initialState, action) => {
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
                tasks: [action.payload, ...state.tasks]
            }
        case ADD_TASK_FAILED:
            return {
                ...state,
                loading: false,
                error: `code: ${action.payload.code} \n message: ${action.payload.message}`
            }
        case REMOVE_TASK_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case REMOVE_TASK_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: null,
                tasks: state.tasks.filter((task) => task !== action.payload)
            };
        }
        case REMOVE_TASK_FAILED: {
            return {
                ...state,
                loading: false,
                error: `message: ${action.payload.message}`
            }
        }
        case UPDATE_TASK_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case UPDATE_TASK_SUCCESS: {
            const newTasks = _.extend({}, state.tasks, action.payload)

            return {
                ...state,
                loading: false,
                error: null,
            };
        }
        case UPDATE_TASK_FAILED: {
            return {
                ...state,
                loading: false,
                error: `message: ${action.payload.message}`
            }
        }
        case GET_TASK_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                tasks: action.payload
            }
        case GET_TASK_FAILED:
            return {
                ...state,
                loading: false,
                error: `code: ${action.payload.code} \n message: ${action.payload.message}`
            }
        default:
            return state;
    }
}

export default ListReducer;