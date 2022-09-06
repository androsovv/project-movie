import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setLogin, setModal} from "../store/actions";
import {iState} from "../types/filmTypes";

const Header = () => {
    const dispatch = useDispatch();
    const modalActive = () => {
        dispatch(setModal(true));
    }
    const isLogin = useSelector((state: iState) => state.isLogIn);

    const logout = () => {
        dispatch(setLogin(false));
        localStorage.removeItem('admin');
    }

    return (
        <nav>
            <div className="navigation">
                <button className="btn btn-light">Home</button>
            </div>
            {!isLogin &&
                <div className="login" onClick={modalActive}>
                    <button className="btn btn-success" style={{backgroundColor: "#29A745"}}>Login</button>
                </div>
            }
            {isLogin &&
                <div className="login" onClick={logout}>
                    <button className="btn btn-success" style={{backgroundColor: "#203338",}}>Logout</button>
                </div>
            }
        </nav>
    );
};

export default Header;