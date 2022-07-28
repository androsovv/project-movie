import React, {useEffect} from 'react';
import FilmCard from "./filmCard";
import filmList from "../data/filmList";


const FilmList = () => {

    return (
        <div className="film__list">
            <FilmCard/>
        </div>
    );
};

export default FilmList;