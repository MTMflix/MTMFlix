import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./TopRated.css";

function TopRatedDetails() {
    const { VITE_MOVIE_API_KEY } = import.meta.env;
    const { movieId } = useParams();

    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        const getMovieDetails = async () => {
            try {
                const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${VITE_MOVIE_API_KEY}&append_to_response=watch/providers`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`API request failed with status ${response.status}`);
                }
                const data = await response.json();
                setMovieDetails(data); 
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
            
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
                            className="movie-poster"
                            />
                        )}
                    </div>
                    <div className="col-md-8">
                        <h2>{movieDetails.title}</h2>
                        <p className="movie-date">Release Date: {movieDetails.release_date}</p>
                        <p className="movie-overview">{movieDetails.overview}</p>
                        
                        

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopRatedDetails;