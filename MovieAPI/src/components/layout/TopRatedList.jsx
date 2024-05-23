import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./OptionsTabs.css";

function TopRatedList () {
    const { VITE_MOVIE_API_KEY } = import.meta.env

    const [topRated, setTopRated] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const getTopRated = async(pageNumber) => {
        try {
            const pageSize = 5;
            const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${VITE_MOVIE_API_KEY}`
            const response = await fetch(url);
            const data = await response.json();

            const filteredMovies = data.results.filter((movie) => movie.vote_average > 8);
            setTopRated(filteredMovies);

            const totalResults = data.total_results;
            setTotalPages(Math.ceil(totalResults / pageSize));
        } catch (err) {
            console.err(err);
        }
    };

    useEffect(() => {
        getTopRated(currentPage);
    }, [currentPage]);

    const handleClick = (movieId) => {
        const navigate = useNavigate();
        navigate(`/movies/${movieId}`);
    };

   

    return (
        <div>
            
            {topRated.length === 0 ? (
                <p>Loading top rated movies...</p>
            ) : (
                <ul>
                    {topRated.map((movie) => (
                        <li key={movie.id}>
                            <Link to={`/movies/${movie.id}`} onClick={() => handleClick(movie.id)}>{movie.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )

    
};

export default TopRatedList;
