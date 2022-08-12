import React, {ChangeEvent, FC} from 'react';
import Pagination from "./pagination";
import geners from "../data/genre";
import {
    SORT_BY_FAME_DOWN,
    SORT_BY_FAME_UP,
    SORT_BY_RATE_UP,
    SORT_BY_RATE_DOWN,
    setSort,
    SORT_BY_YEAR_2020,
    SORT_BY_YEAR_2019,
    SORT_BY_YEAR_2018,
    SORT_BY_YEAR_2017, setPage, setYear
} from "../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {iState} from "../types/filmTypes";

interface FilterProps {
    totalPages: number;
}

const Filters:FC<FilterProps> = ({totalPages}) => {
    const dispatch = useDispatch();

    const handleSort = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSort(event.target.value));
        dispatch(setPage(1));
    }
    const handleReset = () => {
        dispatch(setSort(SORT_BY_FAME_DOWN));
        dispatch(setPage(1));
    }

    const handleYear = (event: ChangeEvent<HTMLSelectElement>) => {
        const year = Number(event.target.value);
        dispatch(setYear(year))
        dispatch(setPage(1));
    }

    return (
        <div className="filters">
            <h2 style={{fontWeight: 500}}>Фильтры:</h2>
            <button className="btn btn-primary"
                    style={{backgroundColor:"#203338", border:"none"}}
                    onClick={() => handleReset()}
            >Cбросить все фильтры</button>
            <span>Cортировать по:</span>
            <select className="form-select form-select-mg mb-3" onChange={handleSort}>
                <option value={SORT_BY_FAME_DOWN}>Популярные по убыванию</option>
                <option value={SORT_BY_FAME_UP}>Популярные по возрастанию</option>
                <option value={SORT_BY_RATE_DOWN}>Рейтинг по убыванию</option>
                <option value={SORT_BY_RATE_UP}>Рейтинг по возрастанию</option>
            </select>
            <span>Год релиза:</span>
            <select className="form-select form-select-mg mb-3" onChange={handleYear}>
                <option value={2020}>2020</option>
                <option value={2019}>2019</option>
                <option value={2018}>2018</option>
                <option value={2017}>2017</option>
            </select>
            <div className="checkboxFilter">
                {geners.map(item =>
                    <div className="filterName" key={item.id}><input type="checkbox" value={item.name}/>{" " + item.name}</div>
                )}
            </div>
            <Pagination  totalPages={totalPages}/>
        </div>
    );
};

export default Filters;