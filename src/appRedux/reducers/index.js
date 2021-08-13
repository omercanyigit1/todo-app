import {combineReducers} from "redux";
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";
import ListReducer from "./List";
import AuthReducer from "./Auth";

//i combined the reducers here. I added the router because i always want to detect the router.
const RootReducer = () => combineReducers({
    auth: AuthReducer,
    list: ListReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
});

export default RootReducer;
