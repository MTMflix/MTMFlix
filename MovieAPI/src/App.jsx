// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import Navbar from "./components/layout/Navbar";
// import OptionsTabs from "./components/layout/OptionsTabs";
// import Dashboard from "./components/layout/Dashboard";
// import SearchResults from "./components/layout/SearchResults"; // Import SearchResults

// function App() {
//   const [searchResults, setSearchResults] = useState([]); // Manage search results state

//   return (
//     <div className="App">
//       <div id="home-page">
//         <Navbar onResultsChange={setSearchResults} /> {/* Pass results setter */}
//         <div className="options">
//           <OptionsTabs />
//         </div>
//         <div className="dashboard">
//           <Dashboard />
//         </div>
//         {searchResults.length > 0 && <SearchResults results={searchResults} />} {/* Conditionally render */}
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./components/layout/Navbar";
import OptionsTabs from "./components/layout/OptionsTabs";
import Dashboard from "./components/layout/Dashboard";
import SearchResults from "./components/layout/SearchResults";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <Router>
      <div className="App">
        <Navbar onSearch={handleSearch} /> 
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="options">
                  <OptionsTabs />
                </div>
                <div className="dashboard">
                  <Dashboard />
                </div>
              </>
            }
          />
          <Route
            path="/searchResults"
            element={<SearchResults results={searchResults} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

