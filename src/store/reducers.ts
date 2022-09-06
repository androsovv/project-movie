import {combineReducers} from 'redux';
import {
    actionGenre,
    actionModal,
    actionPage,
    actionSort,
    actionYear,
    actionLogin,
    actionFavorite
} from "../types/actionTypes";
import {
    SET_FAVORITE,
    REMOVE_FAVORITE,
    SET_GENRE, SET_LOGIN, SET_MODAL,
    SET_PAGE, SET_SORT, SET_YEAR,
    SORT_BY_RATE_DOWN, SORT_BY_YEAR_2020,
    SET_SORT_2
} from "./actions";

import {filmList} from "../data/filmList";
import {sortMovies} from "../utils/filter";


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

function sortGenre(state = 0, action: actionGenre) {
    switch (action.type) {
        case SET_GENRE:
            return action.id;
        default:
            return state;
    }
}

function modalActive(state = false, action: actionModal) {
    switch (action.type) {
        case SET_MODAL:
            return action.isActive;
        default:
            return state;
    }
}

function isLogIn(state = localStorage.getItem('admin') || false, action: actionLogin) {
    switch (action.type) {
        case SET_LOGIN:
            return action.isLogin;
        default:
            return state;
    }
}

function favoriteFilms(state= [], action: actionFavorite) {
    switch (action.type) {
        case SET_FAVORITE:
            return [...state, action.favoriteId]
        case REMOVE_FAVORITE:
            return [...state].filter(item => item !== action.favoriteId);
        default:
            return state;
    }
}

function movies(state = filmList, action: any) {
    switch (action.type) {
        case SET_SORT_2:
            return sortMovies(action.type, state);
        default:
            return state;
    }
}

const mainReducer = combineReducers({
    currentPage,
    sortBy,
    sortYear,
    sortGenre,
    modalActive,
    isLogIn,
    favoriteFilms,
    movies
});

export default mainReducer;