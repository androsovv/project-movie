import React from 'react';
import {useParams} from "react-router-dom";
import {filmList} from "../data/filmList";
import './filmCard-description.css'
import {IFilmData} from "../types/filmTypes";



const FilmCardDescription = () => {
    const {filmId} = useParams();
    function getFilm (id: number)  {
        return filmList.find(item => item.id === id) as IFilmData;
    }
    const {
        title,
        overview,
        backdrop_path,
        original_language,
        popularity,
        release_date,
        vote_average,
        genre_ids,
        id,
        poster_path,
        original_title
    } = getFilm(Number(filmId));

    console.log(getFilm(Number(filmId)));

    return (
        <div>
            <div className="filmInfo">
                <div className="mainInfo" style={{
                    background: `url(https://image.tmdb.org/t/p/w500${backdrop_path}) no-repeat left / 200%`}}>
                    <div className="leftSide" style={{
                        background: `url(https://image.tmdb.org/t/p/w500${poster_path}) no-repeat center/contain `}}>
                    </div>
                    <div className="rightSide">
                        <div className="title">{title}</div>
                        <div className="raiting">{"Рейтинг: " + vote_average}</div>
                        <div className="overview">{overview}</div>
                    </div>
                </div>
                <div className="filmDetails">
                    <ul className='filmDetails__left'>
                        <li>Статус</li>
                        <li>Дата выхода</li>
                        <li>Язык оригинала</li>
                        <li>Оригинальное название</li>
                        <li>Рейтинг</li>
                    </ul>
                    <ul className='filmDetails__right'>
                        <li>Вышел</li>
                        <li>{release_date}</li>
                        <li>{original_language}</li>
                        <li>{original_title}</li>
                        <li>{vote_average}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FilmCardDescription;