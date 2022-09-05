import React from 'react';
import {IFilmData, iState} from "../types/filmTypes";
import {useDispatch, useSelector} from "react-redux";
import {setModal} from "../store/actions";

interface IFilmCard {
    pagesCrop: IFilmData[];
}

const FilmCard = ({pagesCrop}: IFilmCard) => {
    const dispatch = useDispatch();
    const isLogin = useSelector((state: iState) => state.isLogIn);
    const showModal = () => {
        if(!isLogin) {
            dispatch(setModal(true));
        }
    }
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
                                <i
                                    onClick={showModal}
                                    className="bi bi-star"></i>
                                <i className="bi bi-bookmark" onClick={showModal}></i>
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

