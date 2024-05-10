import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import OptionsTabs from './OptionsTabs';

const GenreList = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetchGenres();
    }, []);

    const fetchGenres = async () => {
        try {
            const response = await fetch('api');
            const data = await response.json();
            setGenres(data.genres);
        } catch (error) {
            console.error('Error fetching genres', error);
        }
    };

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