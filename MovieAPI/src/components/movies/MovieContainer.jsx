import React, { useState } from "react";
import MovieListModal from "./MovieListModal";
import MovieDetails from "./MovieDetails";

function MovieContainer(props) {


  const { data, changeMovieData } = props;
  const [isLiked, setIsLiked] = useState(false); // State for like button
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    changeMovieData(data);
    setIsModalOpen(true);
  };

const toggleLike = () => {
    setIsLiked(!isLiked); 
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <img
        style={{ width: "275px", height: "350px", marginTop: "50px", marginLeft: "50px", marginRight: "50px" }}
        src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
      />
      <button id="like" onClick={toggleLike}>
        {isLiked ? '❤️' : '🤍'}  
      </button>
      <button id="quickview" onClick={handleClick}> quick view </button>
      {isModalOpen && <MovieListModal data={data} closeModal={closeModal} />}

    </div>
  );
}

export default MovieContainer;