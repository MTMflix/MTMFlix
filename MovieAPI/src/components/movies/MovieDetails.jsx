import React from "react";

function MovieDetails({ data }) {

  return (
    <h3>{data.original_title}</h3>
  )

  // const getDetails = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${VITE_MOVIE_API_KEY}`;
  // const response = fetch(getDetails);
  // const data = response.json();
  // return data;
}

export default MovieDetails;
  