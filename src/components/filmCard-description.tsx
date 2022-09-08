import React from 'react';
import {Link} from "react-router-dom";

const FilmCardDescription = () => {
    return (
        <div>
            <Link to="/">
                <button className="btn btn-light">Home</button>
            </Link>
        </div>
    );
};

export default FilmCardDescription;