// SearchResults.jsx
import React from 'react';

function SearchResults({ movie }) {
  if (!movie) {
    return <p>loading</p>; 
  }

  const { imageurl, genre, imdbid, imdbrating, released, synopsis, title } = movie;

  return (
    <div className="search-result">
      <img src={imageurl[0]} alt={`${title} poster`} /> 
      <div className="info">
        <h2>{title}</h2>
        <p>
          Genre: {genre.join(', ')} 
        </p>
        <p>
          Rating: {imdbrating} (IMDb)
        </p>
        <p>Released: {released}</p>
        <p>{synopsis}</p>
      </div>
    </div>
  );
}

export default SearchResults;