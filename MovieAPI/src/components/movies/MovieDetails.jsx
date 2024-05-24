import React from "react";

function MovieDetails({ data, onBack }) {

  return (
    <div className="movie-details">
      <h3>{data.original_title}</h3>
      {/* <p>{data.budget}</p> */}
      <p>{data.overview}</p>
      <p>Release Date: {data.release_date}</p>
      <p>{data.runtime}</p>
      <button onClick={onBack}>X</button>
    </div>
    
  )

  // const getDetails = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${VITE_MOVIE_API_KEY}`;
  // const response = fetch(getDetails);
  // const data = response.json();
  // return data;
}

export default MovieDetails;
  