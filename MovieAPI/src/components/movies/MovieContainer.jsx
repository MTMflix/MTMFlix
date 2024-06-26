import React, { useState } from "react";
import MovieListModal from "./MovieListModal";
import MovieDetails from "./MovieDetails";

function MovieContainer(props) {

    const {data, changeMovieData} = props;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {
        changeMovieData(data);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <img 
            style={{ width: "300px", height: "250px", marginTop: "10px", marginLeft: "10px" }}
            src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
            onClick={handleClick}
            />
            {isModalOpen && <MovieListModal data={data} closeModal={closeModal} />}
        </div>
    );
}

export default MovieContainer;