import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
    const { VITE_MOVIE_API_KEY } = import.meta.env

    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        const getMovieDetails = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/{movie_id}?api_key=${VITE_MOVIE_API_KEY}`)
            const data = await response.json();
            setMovieDetails(data);
        };

        getMovieDetails();
    }, [movieId]);

    if (!movieDetails) {
        return <p>Loading movie...</p>;
    }

    return (
        <div>
            <h2>{movieDetails.title}</h2>
        </div>
    );
};

export default MovieDetails;