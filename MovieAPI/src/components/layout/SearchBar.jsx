import React, { Component, useState } from 'react';
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchResults from './SearchResults';

const url = `https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest`;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '403b5dd185msh764dbc8b58680d1p14747bjsnd35a6e0df69',
        'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
 
    }
};

function SearchBar() {
  const [input, setInput] = useState("");
  const [movie, setMovie] = useState();

  const fetchData = async (value) => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const results = data.results.filter((movie) =>{
        return value && movie && movie.title && movie.title.toLowerCase().includes(value)
      })
      setMovie(results[0])
      console.log(results[0]); 
        
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (event) => {
    setInput(event.target.value);
    // fetchData(event.target.value);
  };

  const enterKey = (event) => {
    if (event.key === 'Enter') {
      fetchData(input); 
    }
  };
  

  return (
    <div className='input-wrapper'>
      <FaSearch id='search-icon' />
      <input
        placeholder='search next watch '
        value={input}
        onChange={handleChange}
        onKeyDown={enterKey}
      />
      <SearchResults movie={movie}/>
    </div>
  );
}

export default SearchBar;
