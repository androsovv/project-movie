import React from 'react';

const Pagination = ({currentPage, totalPages, handlePageChange}) => {
    return (
        <div>
            <div className="pagination">
                <button className="btn btn-primary m-2" onClick={() => handlePageChange(-1)}>Назад</button>
                <button className="btn btn-primary m-2" onClick={() => handlePageChange(1)}>Вперёд</button>
            </div>
            <div className="paginationNumbers">
                <div className="pagination">{currentPage + " of " + totalPages}</div>
            </div>
        </div>
    );
};

export default Pagination;