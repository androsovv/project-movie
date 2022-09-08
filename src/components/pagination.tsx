import React, {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { iState} from "../types/filmTypes";
import {setPage} from "../store/actions";

const Pagination = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: iState) => state);
    const {currentPage, movies} = state;
    const totalPages = Math.ceil(movies.length / 10);

    const handlePageChange = (index: number) => {
        dispatch(setPage(currentPage + index));
    }

    return (
        <div>
            <div className="pagination">
                { currentPage > 1 && totalPages !== 0 &&
                    <button className="btn btn-primary m-2" onClick={() => handlePageChange(-1)}>Назад</button>
                }
                {
                    currentPage !== totalPages && totalPages !== 0 &&
                    <button className="btn btn-primary m-2" onClick={() => handlePageChange(1)}>Вперёд</button>
                }
            </div>
            <div className="paginationNumbers">
                { totalPages !== 0 &&
                    <p>{currentPage + " of " + totalPages}</p>
                }
            </div>
        </div>
    );
};

export default Pagination;