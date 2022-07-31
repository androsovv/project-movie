import React from 'react';
import {IFilmData} from "../types/filmTypes";

interface IFilmCard {
    pagesCrop: IFilmData[];
}

const FilmCard = ({pagesCrop}: IFilmCard) => {
    return (
        <>
            {pagesCrop.map((item) => {
                const imagePath = item.poster_path || item.backdrop_path;
                return (
                    <div key={item.id} className="film__card">
                        <img className="poster" src={`https://image.tmdb.org/t/p/w500${imagePath}`}/>
                        <div className="description">
                            <div className="top">
                                <div className="rate">{"Рейтинг: " + item.vote_average}</div>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-bookmark"></i>
                            </div>
                            <div className="middle" style={{fontWeight: 500}}>{item.title}</div>
                            <button className="more__btn">Подробнее</button>
                        </div>
                    </div>
                )
            })}
        </>
    );

};

export default FilmCard;

