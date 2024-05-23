import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function GenreDetails() {
    const { VITE_MOVIE_API_KEY } = import.meta.env

    const { movieId } = useParams();
    const [genreDetails, setGenreDetails] = useState(null);

    useEffect(() => {
        const getGenreDetails = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/{movie_id}?api_key=${VITE_MOVIE_API_KEY}`)
            const data = await response.json();
            setGenreDetails(data);
        };

        getGenreDetails();
    }, [movieId]);

    if (!genreDetails) {
        return <p>Loading movie...</p>;
    }

    return (
        <div>
            <h2>{genreDetails.title}</h2>
        </div>
    );
};

export default GenreDetails;