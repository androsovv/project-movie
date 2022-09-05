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
import {sortByYear, sortMovies, sortByGenre} from "./utils/filter";
import Modal from "./components/modal";


function App() {
    const state = useSelector((state: iState) => state);
    const {currentPage, sortBy, sortYear, sortGenre} = state;
    let sortedFilms = sortByYear(sortYear, sortMovies(sortBy, filmList));
    const sortedGenre = sortByGenre(sortedFilms, sortGenre);
    const itemsOnPage = 10;
    const filmsAmount = sortedGenre.length;
    const totalPages = Math.ceil(filmsAmount / itemsOnPage);


    const pagesCrop: IFilmData[] = paginate(sortedGenre, currentPage, itemsOnPage);

    return (
        <div className="App">
            <Modal/>
            <Header/>
            <div className="app__content">
                <Filters totalPages={totalPages}/>
                <FilmList pagesCrop={pagesCrop}/>
            </div>
        </div>
    );
}

export default App;
