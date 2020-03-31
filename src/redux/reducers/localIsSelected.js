import { LOCAL_SELECTED } from "../actions/action-types";

const initialState = {
    selected: null
};

export const localSelectedReducer = (state = initialState, action) => {
    if (action.type === LOCAL_SELECTED) {
        return {
            ...state,
            selected: action.selected
        }
    }

    return state;
}
