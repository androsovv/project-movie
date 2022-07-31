import React, {useState} from 'react';
import './App.css';
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.css"
import Filters from "./components/filters";
import FilmList from "./components/filmList";
import {filmList} from "./data/filmList";
import {paginate} from "./utils/paginate";
import {IFilmData} from "./types/filmTypes";


function App() {
    const [currentPage, setPage] = useState(1);

    const itemsOnPage = 10;
    const filmsAmount = filmList.length;
    const totalPages = Math.ceil(filmsAmount / itemsOnPage);

    const pagesCrop: IFilmData[] = paginate(filmList, currentPage, itemsOnPage);

    const handlePageChange = (index: number)=> setPage(prevState => prevState + index)





    return (
        <div className="App">
            <Header/>
            <div className="app__content">
                <Filters handlePageChange={handlePageChange} currentPage={currentPage} totalPages={totalPages}/>
                <FilmList pagesCrop={pagesCrop}/>
            </div>
        </div>
    );
}

export default App;
