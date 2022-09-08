import React, {ChangeEvent, FC} from 'react';
import Pagination from "./pagination";
import geners from "../data/genre";
import {
    SORT_BY_FAME_DOWN,
    SORT_BY_FAME_UP,
    SORT_BY_RATE_UP,
    SORT_BY_RATE_DOWN,
    setPage,
    setYear, setGenre, SORT_WATCH_LATER, SORT_FAVORITE, setSort2
} from "../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {iState} from "../types/filmTypes";



const Filters = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: iState) => state);
    const {isLogIn} = state;

    const handleSort = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSort2(event.target.value));
        dispatch(setPage(1));
    }

    const handleReset = () => {
        dispatch(setGenre(0));
        dispatch(setSort2(SORT_BY_FAME_DOWN));
        dispatch(setPage(1));
        dispatch(setYear(2020));
    }

    const handleYear = (event: ChangeEvent<HTMLSelectElement>) => {
        const year = Number(event.target.value);
        dispatch(setYear(year))
        dispatch(setSort2(SORT_BY_FAME_DOWN));
        dispatch(setPage(1));
    }

    const handleGenre = (id: number) => {
        dispatch(setGenre(id));
        dispatch(setPage(1));
    }

    const showFavorite = () => {

    }

    return (
        <div className="filters">
            <h2 style={{fontWeight: 500}}>Фильтры:</h2>
            <button className="btn btn-primary"
                    style={{backgroundColor: "#203338", border: "none"}}
                    onClick={() => handleReset()}
            >Cбросить все фильтры
            </button>
            <span>Cортировать по:</span>
            <select className="form-select form-select-mg mb-3" onChange={handleSort}>
                <option value={SORT_BY_FAME_DOWN}>Популярные по убыванию</option>
                <option value={SORT_BY_FAME_UP}>Популярные по возрастанию</option>
                <option value={SORT_BY_RATE_DOWN}>Рейтинг по убыванию</option>
                <option value={SORT_BY_RATE_UP}>Рейтинг по возрастанию</option>
            </select>
            {isLogIn &&
                <>
                    <span>Ваш выбор:</span>
                    <select className="form-select form-select-mg mb-3" >
                        <option value={SORT_WATCH_LATER}>Смотреть позже</option>
                        <option value={SORT_FAVORITE}>Избранные</option>
                    </select>
                </>
            }
            <span>Год релиза:</span>
            <select className="form-select form-select-mg mb-3" onChange={handleYear}>
                <option value={2020}>2020</option>
                <option value={2019}>2019</option>
                <option value={2018}>2018</option>
                <option value={2017}>2017</option>
            </select>
            <div className="checkboxFilter">
                {geners.map(item =>
                    <div className="filterName" key={item.id}>
                        <input
                            type="checkbox"
                            value={item.name}
                            onClick={(event) => handleGenre(item.id)}
                        />
                        {" " + item.name}
                    </div>
                )}
            </div>
            <Pagination />
        </div>
    );
};

export default Filters;