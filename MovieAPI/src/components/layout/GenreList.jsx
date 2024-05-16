import React, { useState, useEffect} from 'react';

const GenreList = () => {
    const { VITE_MOVIE_API_KEY } = import.meta.env

    const [genres, setGenres] = useState([]);
    

    const getGenres = async() => {
        try {
          fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${VITE_MOVIE_API_KEY}`)
          .then(res => res.json())
          .then(json => setGenres(json.genres))  
        } catch (err) {
            console.error(err)
        }
    }
    
    useEffect(() => {
        getGenres()
    }, []);

    console.log(genres);
    if (!genres || genres.length === 0) {
        return <p>Loading genres...</p>;
    }
    genres.map( genre => console.log(genre));
    return (
        <div>
            <ul>
                {genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default GenreList;