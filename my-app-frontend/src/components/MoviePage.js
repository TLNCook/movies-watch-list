import React, { useState } from "react";
import MovieCollection from "./MovieCollection";

function MoviePage() {
    const [movies, setMovies] = useState([])

    function removeForever(e, movieId) {
        e.stopPropagation();
        fetch(`http://localhost:9292/movies/${movieId}`, {
          method: "DELETE",
        });
        setMovies((currentMovies) => currentMovies.filter((movie) => movie.id !== movieId)
        );
      }
    return (
        <div>
            <MovieCollection
            movies={movies}
            setMovies={setMovies}
            removeForever={removeForever}
            />
        </div>
    )
}

export default MoviePage