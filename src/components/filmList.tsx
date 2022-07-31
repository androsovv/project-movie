import React, {useEffect} from 'react';
import FilmCard from "./filmCard";
import {IFilmData} from "../types/filmTypes";

interface IFilmList {
    pagesCrop: IFilmData[];
}

const FilmList = ({pagesCrop}: IFilmList) => {

    return (
        <div className="film__list">
            <FilmCard pagesCrop={pagesCrop}/>
        </div>
    );
};

export default FilmList;