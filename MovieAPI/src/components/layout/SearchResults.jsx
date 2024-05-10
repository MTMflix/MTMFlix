import React, { Component } from 'react'
import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

export default function SearchResults() {
    return (
      <div>
        {movie.map((info) => {
            return <p>{info}</p>
        })}
      </div>
    )
}


