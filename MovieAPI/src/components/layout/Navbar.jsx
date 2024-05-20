import React from 'react';
import MTMflix_logo from './logo/MTMflix_logo.png';
import SearchBar from './SearchBar';

function Navbar() {
  const [searchValue, setSearchValue] = useState(""); 

  const handleSearch = (inputValue) => {
    updateSearch(inputValue);
}
  return (
    <div>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top'>
        <a className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">
          <img src={MTMflix_logo} alt="MTMflix logo" />
        </a>
        <SearchBar onSearch={handleSearch} />
      </nav>
    </div>
  );
}

export default Navbar;