import React from "react";
import MovieCard from "./MovieCard"

function MovieCollection({ movies, updateMovie, removeForever }) {
    
  const movieInfo = movies.map((movie) => (
    <MovieCard
        key={movie.id}
        movie={movie}
        updateMovie={updateMovie}
        onMovieDelete={removeForever}
        />
  ))
  return (
    <div className="ui four column grid">
        <div id="movieCard">
            {movieInfo}
        </div>
    </div>
  );
}
export default MovieCollection;