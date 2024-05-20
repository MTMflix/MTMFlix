import React, { useState, useEffect, useContext } from "react";
import SearchBar from "../layout/SearchBar";
import SearchContext from "../layout/SearchContext";


function MovieList () {

    
    const {VITE_MOVIE_API_KEY} = import.meta.env;

    const [movieList, setMovieList] = useState([]);
    const [select, setSelect] = useState("");
    const [searchValue, setSearchValue] = useContext(SearchContext);
    console.log(SearchContext)
    const getMovieList = async() => {
        try {
          fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${VITE_MOVIE_API_KEY}`)
          .then(res => res.json())
          .then(json => setMovieList(json.results))  
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        console.log("Search value:", searchValue);
        getMovieList()
    }, [])

    useEffect(() => {
        console.log("Search value:", searchValue);
      }, [searchValue])

    return (
        <div>
            <button onClick={() => setSelect("movie")}>Movie</button>
            {movieList.map((data) => {
                return <>
                <img style={{width:"300px", height:"250px", marginTop:"10px", marginLeft:"10px"}} src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} />
                </>
            })}
        </div>
    )
}

export default MovieList;
