import React from 'react';
import './App.css';
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.css"
import Filters from "./components/filters";
import FilmList from "./components/filmList";
import {filmList} from "./data/filmList";
import * as _ from "lodash";
import {paginate} from "./utils/paginate";
import {IFilmData, iState} from "./types/filmTypes";
import {useSelector} from "react-redux";
import {
    SORT_BY_RATE_DOWN,
    SORT_BY_RATE_UP,
    SORT_BY_FAME_DOWN,
    SORT_BY_FAME_UP,
    SORT_BY_YEAR_2020,
    SORT_BY_YEAR_2019,
    SORT_BY_YEAR_2018,
    SORT_BY_YEAR_2017,
} from "./store/actions";


function App() {


    const state = useSelector((state: iState) => state);
    const {currentPage, sortBy} = state;

    let sortedFilms: IFilmData[] = _.orderBy(filmList, ['vote_average'], 'desc');

    if (sortBy === SORT_BY_RATE_DOWN) {
        sortedFilms = _.orderBy(filmList, ['vote_average'], 'desc');
    } else if (sortBy === SORT_BY_RATE_UP) {
        sortedFilms = _.orderBy(filmList, ['vote_average'], 'asc');
    } else if (sortBy === SORT_BY_FAME_DOWN) {
        sortedFilms = _.orderBy(filmList, ['popularity'], 'desc');
    } else if (sortBy === SORT_BY_FAME_UP) {
        sortedFilms = _.orderBy(filmList, ['popularity'], 'asc');
    } else if (sortBy === SORT_BY_YEAR_2020) {
        sortedFilms = filmList.filter(item =>
            (((Number(item.release_date.slice(0, 4))) === 2020))
        )
    } else if (sortBy === SORT_BY_YEAR_2019) {
        sortedFilms = filmList.filter(item =>
            (((Number(item.release_date.slice(0, 4))) === 2019))
        )
    } else if (sortBy === SORT_BY_YEAR_2018) {
        sortedFilms = filmList.filter(item =>
            (((Number(item.release_date.slice(0, 4))) === 2018))
        )
    } else if (sortBy === SORT_BY_YEAR_2017) {
        sortedFilms = filmList.filter(item =>
            (((Number(item.release_date.slice(0, 4))) === 2017))
        )
    }

    const itemsOnPage = 10;
    const filmsAmount = sortedFilms.length;
    const totalPages = Math.ceil(filmsAmount / itemsOnPage);


    const pagesCrop: IFilmData[] = paginate(sortedFilms, currentPage, itemsOnPage);

    return (
        <div className="App">
            <Header/>
            <div className="app__content">
                <Filters totalPages={totalPages}/>
                <FilmList pagesCrop={pagesCrop}/>
            </div>
        </div>
    );
}

export default App;
