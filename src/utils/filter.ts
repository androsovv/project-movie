import {IFilmData, iState} from "../types/filmTypes";
import {
    SORT_BY_FAME_DOWN,
    SORT_BY_FAME_UP,
    SORT_BY_RATE_DOWN,
    SORT_BY_RATE_UP,
} from "../store/actions";
import * as _ from 'lodash';


export function sortMovies(sort: string, movies: IFilmData[]) {
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
