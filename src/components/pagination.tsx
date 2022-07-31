import React, {FC} from 'react';



interface PaginationProps {
    handlePageChange: (index:number) => void;
    totalPages: number;
    currentPage: number;
}

const Pagination:FC<PaginationProps> = ({handlePageChange, currentPage, totalPages}) => {
    return (
        <div>
            <div className="pagination">
                <button className="btn btn-primary m-2" onClick={() => handlePageChange(-1)}>Назад</button>
                <button className="btn btn-primary m-2" onClick={() => handlePageChange(1)}>Вперёд</button>
            </div>
            <div className="paginationNumbers">
                <p>{currentPage + " of " + totalPages}</p>
            </div>
        </div>
    );
};

export default Pagination;