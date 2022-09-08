import React from 'react';
import {IFilmData, iState} from "../types/filmTypes";
import {useDispatch, useSelector} from "react-redux";
import {addFavorite, removeFavorite, setModal} from "../store/actions";
import {paginate} from "../utils/paginate";


const FilmCard = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: iState) => state);
    const {movies, isLogIn, favoriteFilms, currentPage} = state;
    const cropMovies: Array<IFilmData> = paginate(movies, currentPage, 10);

    const showModal = (id: number) => {
        if(!isLogIn) {
            dispatch(setModal(true));
        } else {
            dispatch(favoriteFilms.includes(id) ? removeFavorite(id) : addFavorite(id));
            console.log(favoriteFilms);
        }
    }



    return (
        <>
            {cropMovies.map((item) => {
                const imagePath = item.poster_path || item.backdrop_path;
                return (
                    <div key={item.id} className="film__card">
                        <img className="poster" src={`https://image.tmdb.org/t/p/w500${imagePath}`}/>
                        <div className="description">
                            <div className="top">
                                <div className="rate">{"Рейтинг: " + item.vote_average}</div>
                                <i
                                    onClick={() => showModal(item.id)}
                                    className="bi bi-star"></i>
                                <i className="bi bi-bookmark" onClick={() => showModal(item.id)}></i>
                            </div>
                            <div className="middle" style={{fontWeight: 500}}>{item.title}</div>
                            <button className="more__btn">Подробнее</button>
                        </div>
                    </div>
                )
            })}
            {cropMovies.length === 0 &&
                <h2 style={{color: "red"}}>Нет подходящих фильмов</h2>
            }
        </>
    );

};

export default FilmCard;

