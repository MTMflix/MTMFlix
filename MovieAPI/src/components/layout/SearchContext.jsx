import React, { createContext, useState } from 'react';

const SearchContext = React.createContext({
  searchValue: "",
  updateSearch: () => {}, // Placeholder function for now
});

const SearchContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");

  const updateSearch = (newValue) => {
    setSearchValue(newValue);
  };

  const contextValue = {
    searchValue,
    updateSearch,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;