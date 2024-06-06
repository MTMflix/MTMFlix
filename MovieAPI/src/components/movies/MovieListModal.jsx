import React from "react";
import MovieDetails from "./MovieDetails";
import "./MovieListModal.css";

function MovieListModal({ data, closeModal }) {
    return (
        <div className="movie-modal">
            <div className="modal-content">
                <img 
                src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
                alt={data.original_title}
                />
                <MovieDetails data={data} />
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
}

export default MovieListModal;