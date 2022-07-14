import React, { useState, useEffect } from "react";
import MovieCollection from "./MovieCollection";
import MovieForm from "./MovieForm";
import HeaderMain from "./Header";

function MoviePage({ isLoggedIn }) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/movies")
        .then((r) => r.json())
        .then((data) => setMovies(data))
    }, []);

    // if (!isLoggedIn) return <Navigate to="/.Login" />;

    function removeForever(e, id) {
        e.stopPropagation();
        fetch(`http://localhost:9292/movies/${id}`,{
            method: 'DELETE'
        })
        setMovies((currentMovies) =>
        currentMovies.filter((movie) => movie.id !== id)
      );
    }

    function handleUpdateMovie(updatedMovie, id) {
        fetch(`http://localhost:9292/movies/${id}`, {
            method: 'PATCH',
            headers: new Headers({ "content-type": "application/json" }),
            body: JSON.stringify(updatedMovie),
        })
    }

    function handleAddMovie(newMovie) {
        fetch('http://localhost:9292/movies', {
            method: 'POST',
            headers: new Headers({ "content-type": "application/json" }),
            body: JSON.stringify(newMovie),
        })
        setMovies([...movies, newMovie]);
    }
      
    return (
        <div id="moviePage">
            <HeaderMain />
            <MovieForm onAddMovie={handleAddMovie} />
            <MovieCollection movies={movies} addMovie={handleAddMovie} updateMovie={handleUpdateMovie} removeForever={removeForever} />
        </div>
    )
}

export default MoviePage