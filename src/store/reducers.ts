import {combineReducers} from 'redux';
import {actionPage, actionSort, actionYear} from "../types/actionTypes";
import {
    SET_PAGE, SET_SORT, SET_YEAR,
    SORT_BY_RATE_DOWN, SORT_BY_YEAR_2020
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

function sortYear(state = SORT_BY_YEAR_2020, action: actionYear) {
    switch (action.type) {
        case SET_YEAR:
            return action.year;
        default:
            return state;
    }
}

const mainReducer = combineReducers({
    currentPage,
    sortBy,
    sortYear
});

export default mainReducer;