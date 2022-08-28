export const SET_PAGE = 'SET_PAGE';
export const SET_SORT = 'SET_SORT';
export const SET_YEAR = 'SET_YEAR';
export const SET_GENRE = 'SET_GENRE';
export const SET_MODAL = 'SET_MODAL';
export const SORT_BY_RATE_DOWN = 'SORT_BY_RATE_DOWN';
export const SORT_BY_RATE_UP = 'SORT_BY_RATE_UP';
export const SORT_BY_FAME_DOWN = 'SORT_BY_FAME_DOWN';
export const SORT_BY_FAME_UP = 'SORT_BY_FAME_UP';
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

