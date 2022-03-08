import React from 'react';
import './App.css';
import MoviePage from './components/pages/movie-page';
import Auth from './components/auth';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Auth/>}/>
        <Route path="movies" element={<MoviePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
