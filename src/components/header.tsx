import React from 'react';
import {useDispatch} from "react-redux";
import {setModal} from "../store/actions";

const Header = () => {
    const dispatch = useDispatch();
    const modalActive = () => {
        dispatch(setModal(true));
    }
    return (
        <nav>
            <div className="navigation">
                <button className="btn btn-light">Home</button>
            </div>
            <div className="login" onClick={modalActive}>
                <button className="btn btn-success" style={{backgroundColor:"#29A745"}}>Login</button>
            </div>
        </nav>
    );
};

export default Header;