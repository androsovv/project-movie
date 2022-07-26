import React from 'react';
import Pagination from "./pagination";

const Filters = () => {
    return (
        <div className="filters">
            <h2 style={{fontWeight: 500}}>Фильтры:</h2>
            <button className="btn btn-primary" style={{backgroundColor:"#203338", border:"none"}}>Cбросить все фильтры</button>
            <span>Cортировать по:</span>
            <select className="form-select form-select-lg mb-3">
                <option>Сортировать по</option>
            </select>
            <span>Год релиза:</span>
            <select className="form-select form-select-lg mb-3">
                <option>Сортировать по</option>
            </select>
            <div className="checkboxFilter">
                    <p><input type="checkbox" value="боевик"/> боевик</p>
                    <p><input type="checkbox" value="приключение"/> приключение</p>
                    <p><input type="checkbox" value="мультфильм"/> мультфильм</p>
                    <p><input type="checkbox" value="комедия"/> комедия</p>
                    <p><input type="checkbox" value="криминал"/> криминал</p>
                    <p><input type="checkbox" value="документальный"/> документальный</p>
                    <p><input type="checkbox" value="драма"/> драма</p>

            </div>
            <Pagination/>
        </div>
    );
};

export default Filters;