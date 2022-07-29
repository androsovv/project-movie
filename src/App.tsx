import React, {useState} from 'react';
import './App.css';
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.css"
import Filters from "./components/filters";
import FilmList from "./components/filmList";
import filmList from "./data/filmList";
import {paginate} from "./utils/paginate";

function App() {

    const itemsOnPage = 10;
    const numberOfFilms = filmList.length;
    const totalPages = numberOfFilms / itemsOnPage;

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (index: number) => {
        setCurrentPage(prevState => prevState + index);
    };

    const filmCrop = paginate(currentPage, itemsOnPage, filmList);

    return (
        <div className="App">
            <Header/>
            <div className="app__content">
                <Filters currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange}/>
                <FilmList filmCrop={filmCrop}/>
            </div>
        </div>
    );
}

export default App;
