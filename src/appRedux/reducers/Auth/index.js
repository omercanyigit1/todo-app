import {
    SIGN_IN_FAILED,
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_OUT_FAILED,
    SIGN_OUT_REQUEST,
    SIGN_OUT_SUCCESS
} from "../../../constants/ActionTypes";

const initialState = {
    loading: false,
    error: null,
    user: {},
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                user: action.payload
            };
        case SIGN_IN_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case SIGN_OUT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case SIGN_OUT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                user: null
            };
        case SIGN_OUT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default AuthReducer;