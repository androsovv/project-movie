export const SET_PAGE = 'SET_PAGE';
export const SET_SORT = 'SET_SORT';
export const SORT_BY_RATE_DOWN = 'SORT_BY_RATE_DOWN';
export const SORT_BY_RATE_UP = 'SORT_BY_RATE_UP';
export const SORT_BY_FAME_DOWN = 'SORT_BY_FAME_DOWN';
export const SORT_BY_FAME_UP = 'SORT_BY_FAME_UP';
export const SORT_BY_YEAR_2020 = 'SORT_BY_YEAR_2020';
export const SORT_BY_YEAR_2019 = 'SORT_BY_YEAR_2019';
export const SORT_BY_YEAR_2018 = 'SORT_BY_YEAR_2018';
export const SORT_BY_YEAR_2017 = 'SORT_BY_YEAR_2017';

export function setPage(page: number) {
    return {type: SET_PAGE, page}
}

export function setSort(sort: string) {
    return {type: SET_SORT, sort}
}


