import React, { Component } from 'react';

const GenreList = ({ genres }) => {
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