import React, { useState, useEffect } from "react";
import MovieContainer from "./MovieContainer";
import MovieDetails from "./MovieDetails";


function MovieList () {

    
    const {VITE_MOVIE_API_KEY} = import.meta.env;
    // console.log({VITE_MOVIE_API_KEY})

    const [movieList, setMovieList] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movies, setMovies] = useState(null);
    // Tracks the movies details loading state
    // const [isLoading, setIsLoading] = useState(false);
    // Tracks API errors
    // const [error, setError] = useState(null);


    const getMovieList = async() => {
        try {
          fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${VITE_MOVIE_API_KEY}`)
          .then(res => res.json())
          .then(json => setMovieList(json.results))  
        } catch (err) {
            console.error(err)
        }
    }

    const clickToBack = () => {
        setSelectedMovie(null);
    }

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

    useEffect(() => {
        getMovieList()
    }, [])
      

    return (
        <div>
            {movieList.map((data) => {
                return <>
                <MovieContainer 
                data={data}
                changeMovieData={changeMovieData}
                onBack={clickToBack}
                />
                </>
            })}
            {selectedMovie && <MovieDetails movies={selectedMovie} onBack={clickToBack} />}
        </div>
    )
}

export default MovieList;
