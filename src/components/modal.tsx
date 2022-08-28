import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setModal} from "../store/actions";
import {iState} from "../types/filmTypes";

const Modal = () => {
    const dispatch = useDispatch();
    const modalDeactivate = () => {
        dispatch(setModal(false));
    }
    const modalActive = useSelector((state: iState) => state.modalActive);
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
                            <input type="text" className="login__input" placeholder="Имя пользователя"/>
                            <input type="text" className="password__input" placeholder="Пароль"/>
                            <button type="submit" className="authorization__btn">Авторизоваться</button>
                        </form>
                    </div>
                </div>
            }
        </>
    );
};

export default Modal;