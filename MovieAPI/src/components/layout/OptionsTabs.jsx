import React, { Component, useState, useEffect } from 'react';
import "./OptionsTabs.css"
import Nav from 'react-bootstrap/Nav'; 
import NavDropdown from 'react-bootstrap/NavDropdown';
import GenreList from './GenreList';
import { fetchGenres } from '../../Api';

const OptionsTabs = () => {
  const [genres, setGenres] = useState([]);


  const fetchGenresData = async () => {
    try {
      const genres = await fetchGenres();
      setGenres(genres);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  useEffect(() => {
    fetchGenresData();
  }, []);

  
    return (
      <div>
        <Nav defaultActiveKey="/home" className="options-tab flex-column">
          <Nav.Link className='options-tab-link' href="/home">Home</Nav.Link>
            <NavDropdown title="Genre" id="basic-nav-dropdown" className="genre-dropdown">
            
              <GenreList genres={genres} />
            </NavDropdown>
            <Nav.Link className='options-tab-link' eventKey="link-2">Top Rated</Nav.Link>
        </Nav>
      </div>
    )
  
};

export default OptionsTabs;



