import React, {FormEventHandler, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setLogin, setModal} from "../store/actions";
import {iState} from "../types/filmTypes";

const Modal = () => {
    const dispatch = useDispatch();
    const modalDeactivate = () => {
        dispatch(setModal(false));
    }
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const modalActive = useSelector((state: iState) => state.modalActive);
    const isLogin = useSelector((state: iState) => state.isLogIn);

    const authorization = (event: any): void => {
        event.preventDefault();
        if (password === 'admin' && username === 'admin') {
            dispatch(setLogin(true));
            setUsername('');
            setPassword('');
            modalDeactivate();
            console.log(isLogin);
        } else {
            alert("Введены не верные логин или пароль")
            setUsername('');
            setPassword('');
            console.log(isLogin);
        }
    }


    return (
        <>
            {modalActive &&
                <div className="modal_window" onClick={modalDeactivate}>
                    <div className="modal__content" onClick={e => e.stopPropagation()}>
                        <div className="modal__top">
                            <button className="close_btn" onClick={modalDeactivate}></button>
                        </div>
                        <h2 className="login__header">Войдите в свой аккаунт</h2>
                        <form className="authorization__form">
                            <input onChange={(event) => setUsername(event.target.value)}
                                   type="text" className="login__input" placeholder="Имя пользователя"/>
                            <input onChange={(event) => setPassword(event.target.value)}
                                   type="text" className="password__input" placeholder="Пароль"/>
                            <button
                                onClick={authorization}
                                type="submit"
                                className="authorization__btn"
                            >
                                Авторизоваться
                            </button>
                        </form>
                    </div>
                </div>
            }
        </>
    );
};

export default Modal;