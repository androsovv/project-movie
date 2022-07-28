import React from 'react';
import Pagination from "./pagination";
import geners from "../data/genre";

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
                {geners.map(item =>
                    <div className="filterName" key={item.id}><input type="checkbox" value={item.name}/>{" " + item.name}</div>
                )}
            </div>
            <Pagination/>
        </div>
    );
};

export default Filters;