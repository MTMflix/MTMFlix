import React, { Component } from 'react'
import { useState, useEffect } from 'react';
import { movie } from './SearchBar';

function SearchResults({ movie }) {
  return (
    <div className='search-result'> {/* Container for single search result */}
      <img src={movie.imageurl} alt={movie.title} /> {/* Display movie poster */}
      <h2>{movie.title}</h2> {/* Display movie title */}
      <p>{movie.synopsis}</p> {/* Display movie overview */}
      {/* Add more details as needed (release date, genre, etc.) */}
    </div>
  );
}
