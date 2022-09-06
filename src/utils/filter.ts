import {IFilmData, iState} from "../types/filmTypes";
import {
    SORT_BY_FAME_DOWN,
    SORT_BY_FAME_UP,
    SORT_BY_RATE_DOWN,
    SORT_BY_RATE_UP,
    SORT_BY_YEAR_2019,
    SORT_BY_YEAR_2018,
    SORT_BY_YEAR_2017, SORT_FAVORITE,
} from "../store/actions";
import * as _ from 'lodash';


export function sortMovies(sort: string, movies: IFilmData[]){
    switch (sort) {
        case SORT_BY_RATE_DOWN:
            return _.orderBy(movies, ['vote_average'], 'desc');
        case SORT_BY_RATE_UP:
            return _.orderBy(movies, ['vote_average'], 'asc');
        case SORT_BY_FAME_DOWN:
            return _.orderBy(movies, ['popularity'], 'desc');
        case SORT_BY_FAME_UP:
            return _.orderBy(movies, ['popularity'], 'asc');
        default:
            return _.orderBy(movies, ['popularity'], 'desc');
    }
}

export function sortByYear(sort: number, films: IFilmData[]) {
    switch (sort) {
        case SORT_BY_YEAR_2019:
            return films.filter(item =>(((Number(item.release_date.slice(0, 4))) === 2019)));
        case SORT_BY_YEAR_2018:
            return films.filter(item =>(((Number(item.release_date.slice(0, 4))) === 2018)));
        case SORT_BY_YEAR_2017:
            return films.filter(item =>(((Number(item.release_date.slice(0, 4))) === 2017)));
        default:
            return films.filter(item =>(((Number(item.release_date.slice(0, 4))) === 2020)));
    }
}

export function sortByGenre(films: IFilmData[], id: number) {
    return (id === 0 ? films : films.filter(item => item.genre_ids.includes(id)));
}