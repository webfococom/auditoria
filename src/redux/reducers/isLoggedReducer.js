import { IS_LOGGED } from "../actions/action-types";

const initialState = {
    status: false
};

export const isLoggedReducer = (state = initialState, action) => {
    if (action.type === IS_LOGGED) {
        return {
            ...state,
            status: action.status
        }
    }

    return state;
}
