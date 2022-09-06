export const SET_PAGE = 'SET_PAGE';
export const SET_SORT = 'SET_SORT';
export const SET_YEAR = 'SET_YEAR';
export const SET_GENRE = 'SET_GENRE';
export const SET_MODAL = 'SET_MODAL';
export const SET_LOGIN = 'SET_LOGIN';
export const SET_FAVORITE = 'SET_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const SET_WATCH_LATER = 'SET_WATCH_LATER';
export const SORT_BY_RATE_DOWN = 'SORT_BY_RATE_DOWN';
export const SORT_BY_RATE_UP = 'SORT_BY_RATE_UP';
export const SORT_BY_FAME_DOWN = 'SORT_BY_FAME_DOWN';
export const SORT_BY_FAME_UP = 'SORT_BY_FAME_UP';
export const SORT_FAVORITE = 'SORT_FAVORITE';
export const SORT_WATCH_LATER = 'SORT_WATCH_LATER';
export const SORT_BY_YEAR_2020 = 2020;
export const SORT_BY_YEAR_2019 = 2019;
export const SORT_BY_YEAR_2018 = 2018;
export const SORT_BY_YEAR_2017 = 2017;

export function setPage(page: number) {
    return {type: SET_PAGE, page}
}

export function setSort(sort: string) {
    return {type: SET_SORT, sort}
}

export function setYear(year: number) {
    return {type: SET_YEAR, year}
}

export function setGenre(id: number) {
    return {type: SET_GENRE, id}
}

export function setModal(isActive: boolean) {
    return {type: SET_MODAL, isActive}
}

export function setLogin(isLogin: boolean) {
    return {type: SET_LOGIN, isLogin}
}

export function addFavorite(favoriteId: number) {
    return {type: SET_FAVORITE, favoriteId}
}

export function removeFavorite(favoriteId: number) {
    return {type: REMOVE_FAVORITE, favoriteId}
}


