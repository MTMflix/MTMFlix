import React from "react";
import MovieDetails from "./MovieDetails";
import "./MovieListModal.css";

function MovieListModal({ data, closeModal }) {
    return (
        <div className="movie-modal">
            <div className="modal-content">
                <img 
                src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
                alt={data.original_title}
                />
                <MovieDetails data={data} />
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
}

export default MovieListModal;

// export default function MovieListModal() {

//     const [movieDetails, setMovieDetails] = useState(null);

//     useEffect

//     return (
//         <div>
//             <div className="container">
//                 <div className="row">
//                     <div className="cool-md-4">
//                         {movieDetails.poster_path && (
//                             <img
//                             src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
//                             alt={movieDetails.title}
//                             className="img-fluid"
//                             />
//                         )}
//                     </div>
//                     <div className="col-med-8">
//                         <h2>{MovieDetails.title}</h2>
//                         <p>Release D</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

