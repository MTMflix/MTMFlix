import React, { useState, useEffect } from "react";
import MovieContainer from "../movies/MovieContainer";
import { useLocation } from "react-router-dom";

function SearchResults() {
  const {VITE_MOVIE_API_KEY} = import.meta.env;  
  const location = useLocation(); 
  const searchTerm = location.state?.searchTerm;
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${VITE_MOVIE_API_KEY}`;
        let url = `${movieUrl}&page=${currentPage}`;

        if (searchTerm) {
          url += `&query=${searchTerm}`; 
        }

        const response = await fetch(url);
        const data = await response.json();
        setMovieList(data.results); 
        setTotalPages(data.total_pages);
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError(err);
      }
    };

    getMovieList();
  }, [searchTerm, currentPage]);

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1); 
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  function changeMovieData(data) {
    const list = [];
    for (let i = 0; i < movieList.length; i++) {
      if (movieList[i].id == data.id) {
        list.push(data)
      } else {
        list.push(movieList[i])
      }
    }
    setMovieList(list);
  }


  return (
    <div>
        <>
        <h1 style={{ display: "block", color: "grey", marginTop: "10vw", marginRight: "50vw", marginLeft:"6vw" }}>Search...</h1>
        <div className="movieGrid" style={{ padding: "5vw" }}>
            {movieList.map((data) => {
              return <>
              <MovieContainer 
              data={data} 
              changeMovieData={changeMovieData} 
              />
              </>
            })}
          </div>

          <div className="buttons">
            {currentPage > 0 && (
              <button className="previous" onClick={previousPage}>
                Previous
              </button>
            )}

            <p id="page">Page {currentPage} of {totalPages}</p>

            {currentPage < totalPages && (
              <button className="next" onClick={nextPage}>
                Next
              </button>
            )}
          </div>
        </>
    </div>
  );
}

export default SearchResults;