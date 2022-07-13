import React, { useEffect } from "react";
import MovieCard from "./MovieCard"

function MovieCollection({ movies, setMovies, removeForever }) {
// useEffect(() => {
//     fetch("http://localhost:9292/movies")
//     .then((r) => r.json())
//     .then((data) => setMovies(data))
//   }, [setMovies]);

  const movieInfo = movies.map((movie) => (
    <MovieCard
        key={movie.id}
        movie={movie}
        onMovieDelete={removeForever}
        />
  ))
  return (
    <div>
        <div className="row" id="header">
            {movieInfo}
        </div>
    </div>
  );
}
export default MovieCollection;