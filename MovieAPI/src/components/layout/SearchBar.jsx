import React, { useState } from 'react';
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

// const {searchKey} = import.meta.env;
// const {searchPoint} = import.meta.env;

// const url = searchPoint;


function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    if (searchTerm.length >=0){
      navigate('/search', { state: { searchTerm } })}; 
    console.log(event.target.value)
  };


  return (
    <div className='input-wrapper'>
      <FaSearch id='search-icon' />
      <input
        placeholder='search next watch '
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;