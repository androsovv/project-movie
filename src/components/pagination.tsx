import React from 'react';

const Pagination = () => {
    return (
        <div>
            <div className="pagination">
                <button className="btn btn-primary m-2">Назад</button>
                <button className="btn btn-primary m-2">Вперёд</button>
            </div>
            <div className="paginationNumbers">
                <p>1 of 1455</p>
            </div>
        </div>
    );
};

export default Pagination;