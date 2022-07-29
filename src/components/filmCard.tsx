import React from 'react';
import filmList from "../data/filmList"

const FilmCard = ({filmCrop}) => {
    return (
        filmCrop.map((item) => {
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
        }));
};

export default FilmCard;

