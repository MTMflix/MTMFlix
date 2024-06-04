import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./RatedDetails.css";

function TopRatedDetails() {
    const { VITE_MOVIE_API_KEY } = import.meta.env;
    const { movieId } = useParams();

    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        const getMovieDetails = async () => {
            const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${VITE_MOVIE_API_KEY}`;
            const response = await fetch(url);
            const data = await response.json();
            setMovieDetails(data);
        };

        getMovieDetails();
    }, [movieId]);

    if (!movieDetails) {
        return <p>Loading movie details...</p>;
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="cool-md-4">
                        {movieDetails.poster_path && (
                            <img
                            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                            alt={movieDetails.title}
                            className="img-fluid"
                            />
                        )}
                    </div>
                    <div className="col-md-8">
                        <h2>{movieDetails.title}</h2>
                        <p>Release Date: {movieDetails.release_date}</p>
                        <p>{movieDetails.overview}</p>
                        <p>{movieDetails.genre}</p>
                        

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopRatedDetails;