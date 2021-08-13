import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILED,
} from "../../../constants/ActionTypes";

const initialState = {
    loading: false,
    error: null,
    user: {}
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                user: action.payload
            }
        case GET_USER_FAILED:
            return {
                ...state,
                loading: false,
                error: `message: ${action.payload.message}`
            }
        default:
            return state;
    }
}

export default UserReducer;