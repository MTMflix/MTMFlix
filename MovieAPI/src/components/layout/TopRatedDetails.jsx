import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
            <h2>{movieDetails.title}</h2>
        </div>
    );
};

export default TopRatedDetails;