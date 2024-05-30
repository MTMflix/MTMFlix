import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./TopRated.css";

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

    const navigate = useNavigate();
   

    const handleClick = (movieId) => {
        
        navigate(`/movies/${movieId}`);
    };

    
   

    return (
        <div className="container">
            <div className="row">
                {topRated.map((movie) => (
                    <div key={movie.id} className="col-md-4 mb-3">
                        {movie.poster_path && (
                             <img
                             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                             alt={movie.title}
                             className="img-fluid"
                             />
                        )}
                        <p>{movie.title}</p>
                        <button onClick={() => handleClick(movie.id)}>Details</button>
                    </div>
                ))}
            </div>
        </div>
            
        
    );

    
};

export default TopRatedList;
