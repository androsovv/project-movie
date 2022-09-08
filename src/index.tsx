import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store/store";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import FilmCardDescription from "./components/filmCard-description";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="film" element={<FilmCardDescription/>}/>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);


