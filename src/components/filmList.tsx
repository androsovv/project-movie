import React, {useEffect} from 'react';
import FilmCard from "./filmCard";



const FilmList = ({filmCrop}) => {

    return (
        <div className="film__list">
            <FilmCard filmCrop={filmCrop}/>
        </div>
    );
};

export default FilmList;