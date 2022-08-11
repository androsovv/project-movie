import {combineReducers} from 'redux';
import {actionPage, actionSort} from "../types/actionTypes";
import {
    SET_PAGE, SET_SORT,
    SORT_BY_RATE_DOWN
} from "./actions";


function currentPage(state = 1, action: actionPage) {
    switch (action.type) {
        case SET_PAGE:
            return action.page;
        default:
            return state;
    }
}

function sortBy(state = SORT_BY_RATE_DOWN, action: actionSort) {
    switch (action.type) {
        case SET_SORT:
            return action.sort;
        default:
            return state;
    }
}

const mainReducer = combineReducers({
    currentPage,
    sortBy
});

export default mainReducer;