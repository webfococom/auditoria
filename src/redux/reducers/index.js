import { combineReducers } from 'redux';
import { isLoggedReducer } from "./isLoggedReducer";
import { localSelectedReducer } from "./localIsSelected";

export const Reducers = combineReducers({
    isLoggedState: isLoggedReducer,
    localSelectedState: localSelectedReducer
});