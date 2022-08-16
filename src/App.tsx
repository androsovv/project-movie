import React from 'react';
import './App.css';
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.css"
import Filters from "./components/filters";
import FilmList from "./components/filmList";
import {filmList} from "./data/filmList";
import {paginate} from "./utils/paginate";
import {IFilmData, iState} from "./types/filmTypes";
import {useSelector} from "react-redux";
import {sortByYear, sortMovies} from "./utils/filter";


function App() {
    const state = useSelector((state: iState) => state);
    const {currentPage, sortBy, sortYear} = state;
    const sortedFilms = sortByYear(sortYear, sortMovies(sortBy, filmList));
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
