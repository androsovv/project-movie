import { combineReducers } from 'redux';
import {actionPage} from "../types/actionTypes";
import {SET_PAGE} from "./actions";


function currentPage(state = 1, action: actionPage) {
    switch (action.type) {
        case SET_PAGE:
           return action.page;
        default:
            return state;
    }
}

const mainReducer = combineReducers({
    currentPage
});

export default mainReducer;