import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store/store";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import FilmCardDescription from "./components/filmCard-description";
import Layout from "./components/Layout";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<App/>}/>
                        <Route path="film/:filmId" element={<FilmCardDescription/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);


