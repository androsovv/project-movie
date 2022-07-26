import React, {useEffect} from 'react';
import FilmCard from "./filmCard";
import filmList from "../data/filmList";


const FilmList = () => {

useEffect( () => {
        let response = await fetch(filmList);
    }
)

    return (
        <div className="film__list">
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
        </div>
    );
};

export default FilmList;