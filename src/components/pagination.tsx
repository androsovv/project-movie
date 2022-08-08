import React, {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { iState} from "../types/filmTypes";
import {setPage} from "../store/actions";

interface PaginationProps {
    totalPages: number;
}

const Pagination:FC<PaginationProps> = ({ totalPages}) => {
    const dispatch = useDispatch();
    const state = useSelector((state: iState) => state);
    const {currentPage} = state;


    const handlePageChange = (index: number) => {
        dispatch(setPage(currentPage + index));
    }

    return (
        <div>
            <div className="pagination">
                { currentPage > 1 &&
                    <button className="btn btn-primary m-2" onClick={() => handlePageChange(-1)}>Назад</button>}
                {
                    currentPage !== totalPages &&
                    <button className="btn btn-primary m-2" onClick={() => handlePageChange(1)}>Вперёд</button>
                }
            </div>
            <div className="paginationNumbers">
                <p>{currentPage + " of " + totalPages}</p>
            </div>
        </div>
    );
};

export default Pagination;