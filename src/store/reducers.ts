import {combineReducers} from 'redux';
import {
    actionModal,
    actionPage,
    actionLogin,
    actionFavorite
} from "../types/actionTypes";
import {
    SET_FAVORITE,
    REMOVE_FAVORITE,
    SET_GENRE, SET_LOGIN, SET_MODAL,
    SET_PAGE, SET_YEAR,
    SET_SORT_2
} from "./actions";

import {filmList} from "../data/filmList";
import {sortMovies} from "../utils/filter";
import {useSelector} from "react-redux";
import {iState} from "../types/filmTypes";

function currentPage(state = 1, action: actionPage) {
    switch (action.type) {
        case SET_PAGE:
            return action.page;
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


function movies(state = filmList.filter(item => (((Number(item.release_date.slice(0, 4))) === 2020))), action: any) {
    switch (action.type) {
        case SET_SORT_2:
            return sortMovies(action.sort, state);
        case SET_YEAR:
             return filmList.filter(item => (((Number(item.release_date.slice(0, 4))) === action.year)));
        case SET_GENRE:
            return (action.id === 0 ? state : state.filter(item => item.genre_ids.includes(action.id)));
        default:
            return state;
    }
}

const mainReducer = combineReducers({
    currentPage,
    modalActive,
    isLogIn,
    favoriteFilms,
    movies
});

export default mainReducer;