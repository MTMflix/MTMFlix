import React from "react";
import MovieDetails from "./MovieDetails";

function MovieContainer(props) {

    const {data, changeMovieData} = props;

    const handleClick = () => {
        data.showDetails = true;
        changeMovieData(data);
    }

    if (data.showDetails) {
        return <MovieDetails 
        data={data}
        />
    } else {
        return <img 
                style={{width:"300px", height:"250px", marginTop:"10px", marginLeft:"10px"}} 
                src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} 
                onClick={handleClick} />
    }
}

export default MovieContainer;