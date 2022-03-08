import React, { useState, useEffect } from 'react';
import MovieList from "../movie-list";
import MovieDetails from '../movie-details';
import Header from "../header";
import MovieForm from "../movie-form";

function MoviePage() {

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editedMovie, setEditedMovie] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/movies/", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 9a82d088aecd26f01d11e52cdfea36a28156a753'
      }
    })
    .then(response => response.json())
    .then(response => setMovies(response))
    .catch(error => console.log(error))
  }, [])

  const loadMovie = movie => {
    setSelectedMovie(movie);
    setEditedMovie(null);
  }

  const editClicked = movie => {
    setEditedMovie(movie);
    setSelectedMovie(null);
  }

  const updatedMovie = movie => {
    const newMovies = movies.map(mov => {
      if (mov.id === movie.id) {
        return movie;
      }
      return mov;
    })
    setMovies(newMovies);
  }

  const newMovie = () => {
    setEditedMovie({title: '', description: ''})
    setSelectedMovie(null);
  }

  const movieCreated = movie => {
    const newMovies = [...movies, movie];
    setMovies(newMovies);
  }

  const removeClicked = movie => {
    const newMovies = movies.filter(mov => mov.id !== movie.id);
    setMovies(newMovies);
  }
  
  return (
    <div className="App">
      <Header/>    
      <div className="layout">
        <div>
          <MovieList 
            movies={movies} 
            movieClicked={loadMovie} 
            editClicked={editClicked}
            removeClicked={removeClicked}
          />
          <button onClick={newMovie}>New movie</button>
        </div>
        <MovieDetails 
          movie={selectedMovie} 
          updateMovie={loadMovie}
        />
        { editedMovie 
          ? <MovieForm movie={editedMovie} updateMovie={updatedMovie} movieCreated={movieCreated}/> 
          : null
        }
      </div>
    </div>
  );
}

export default MoviePage;
