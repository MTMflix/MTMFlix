import React, { Component, useState } from 'react';
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

const url = 'https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ec9ef9a28dmsh275e37278b75032p13c95bjsn38291f0cc22b',
        'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
    }
};

function SearchBar() {
  const [input, setInput] = useState("");

  const fetchData = async (value) => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const results = data.results.filter((movie) =>{
        return movie && movie.title && movie.title.toLowerCase().includes(value)
      })
      console.log(results); 
        
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (event) => {
    setInput(event.target.value);
    fetchData(event.target.value);
  };

//   const enterKey = (event) => {
//     if (event.key === 'Enter') {
//       fetchData(input); 
//     }
//   };
  

  return (
    <div className='input-wrapper'>
      <FaSearch id='search-icon' />
      <input
        placeholder='search next watch '
        value={input}
        onChange={handleChange}
        // onKeyDown={enterKey}
      />
    </div>
  );
}

export default SearchBar;
