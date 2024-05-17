import React, { useState, useEffect } from "react";
import "./OptionsTabs.css";

function TopRatedList () {
    const { VITE_MOVIE_API_KEY } = import.meta.env

    const [topRated, setTopRated] = useState([]);

    const getTopRated = async() => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/top_rated?api_key=${VITE_MOVIE_API_KEY}`
            );
            const data = await response.json();
            
            const filteredMovies = data.results.filter((movie) => movie.vote_average > 8);

            setTopRated(filteredMovies);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getTopRated()
    }, []);

   

    return (
        <div>
            
            {topRated.length === 0 ? (
                <p>Loading top rated movies...</p>
            ) : (
                <ul>
                    {topRated.map((movie) => (
                        <li key={movie.id}>
                            {movie.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )

    
};

export default TopRatedList;
