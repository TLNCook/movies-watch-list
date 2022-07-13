import React from "react";

function MovieCard({ movie, onMovieClicked, onMovieDelete }) {
    const { id, title, release_date, watched, genre_id } = movie

    return (
        <div id="movieCard">
            <div key={id} onClick={() => onMovieClicked(movie)}>
                <div className="logo">
                <img className="logo" alt="Movies!" src={img} />
            </div>
            <div>
                <span class="name">
                    {title}
                </span>
            </div>
        </div>
    </div>
    );
}

export default MovieCard;