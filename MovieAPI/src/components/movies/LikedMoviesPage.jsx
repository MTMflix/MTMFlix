import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
function LikedMoviesList() {
  const [likedMovies, setLikedMovies] = useState([]); 

  const fetchLikedMovies = () => {
    const storedLikedMovies = localStorage.getItem("likedMovies");
    if (storedLikedMovies) {
      setLikedMovies(JSON.parse(storedLikedMovies));
    }
  };

  useEffect(() => {
    fetchLikedMovies();
  }, []);

  if (likedMovies.length === 0) {
    return <p>You haven't liked any movies yet!</p>;
  }

  return (
    <div>
      <h2>Liked Movies</h2>
      <ul className="movie-list"> 
        {likedMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}> 
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-poster"
                />
              )}
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p className="movie-date">Release Date: {movie.release_date}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LikedMoviesList;