import React from 'react';
import './App.css';
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.css"
import Filters from "./components/filters";
import FilmList from "./components/filmList";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="app__content">
            <Filters/>
            <FilmList/>
        </div>
    </div>
  );
}

export default App;
