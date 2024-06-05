import React, { useState, useEffect } from "react";
import MovieContainer from "./MovieContainer";
import "./MovieList.css";

function MovieList() {
  const {VITE_MOVIE_API_KEY} = import.meta.env;  

  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${VITE_MOVIE_API_KEY}&page=${currentPage}`
        );
        const data = await response.json(); 
        setMovieList(data.results.slice(0, 20));
        setTotalPages(data.total_pages);
      } catch (err) {
        console.error('Error fetching movies:', err);
        setError(err); 
      }
    };

    getMovieList();
  }, [currentPage]);

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
        <div className="movieGrid">
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

export default MovieList;
