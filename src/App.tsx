import React, {useState} from 'react';
import './App.css';
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.css"
import Filters from "./components/filters";
import FilmList from "./components/filmList";
import {filmList} from "./data/filmList";
import {paginate} from "./utils/paginate";
import {IFilmData, iState} from "./types/filmTypes";
import {useSelector} from "react-redux";


function App() {

    const itemsOnPage = 10;
    const filmsAmount = filmList.length;
    const totalPages = Math.ceil(filmsAmount / itemsOnPage);
    const state = useSelector((state: iState) => state);
    const {currentPage} = state;
    const pagesCrop: IFilmData[] = paginate(filmList, currentPage, itemsOnPage);



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
