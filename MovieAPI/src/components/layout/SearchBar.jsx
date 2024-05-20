import React, { useState, useContext } from 'react';
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import SearchContext from './SearchContext';

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");
  const { searchValue, updateSearch } = useContext(SearchContext); 

  const handleSearchChange = (e) => {
    setInput(e.target.value);
    updateSearch(e.target.value);
  };

  return (
    <div className='input-wrapper'>
      <FaSearch id='search-icon' />
      <input
        placeholder='search next watch '
        value={input}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBar;