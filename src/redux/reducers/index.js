import { combineReducers } from 'redux';
import { isLoggedReducer } from "./isLoggedReducer";

export const Reducers = combineReducers({
    isLoggedState: isLoggedReducer
});