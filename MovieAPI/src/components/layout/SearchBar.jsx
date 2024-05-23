import React, { Component, useState } from 'react';
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const {searchKey} = import.meta.env;
const {searchPoint} = import.meta.env;

const url = searchPoint;


function SearchBar() {
  const [input, setInput] = useState("");
  const [movie, setMovie] = useState();

  const fetchData = async (value) => {
    try {
      const response = await fetch(url, searchKey);
      const data = await response.json();
      const results = data.results;
      setMovie(results[0])
      console.log(results[0]); 
        
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (event) => {
    setInput(event.target.value);
    console.log(event.target.value)
    // fetchData(event.target.value);
  };

//taking out enter sign for now
  // const enterKey = (event) => {
  //   if (event.key === 'Enter') {
  //     fetchData(input); 
  //     <Link to="/SearchResults"></Link>
  //   }
  // };
  

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