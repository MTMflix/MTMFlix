import React from "react";
import "./MovieContainer.css";

function MovieDetails({ data }) {
  return (
    <div className="movie-details">
      <h3>{data.original_title}</h3>
      <p>{data.overview}</p>
      <p>Release Date: {data.release_date}</p>
      <p>{data.runtime}</p>
    </div>
  )
}

export default MovieDetails;