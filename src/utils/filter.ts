import {IFilmData} from "../types/filmTypes";
import {SORT_BY_RATE_DOWN, SORT_BY_RATE_UP} from "../store/actions";
import * as _ from 'lodash';


export function sortMovies(sort: string, movies: IFilmData) {
    switch (sort) {
        case SORT_BY_RATE_DOWN:
            return _.orderBy(movies, ['vote_average'], 'desc');
        case SORT_BY_RATE_UP:
            return _.orderBy(movies, ['vote_average'], 'asc');
    }
}