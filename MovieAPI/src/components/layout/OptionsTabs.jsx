import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./OptionsTabs.css";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import GenreList from "./GenreList";
import TopRatedList from "./TopRatedList";

function OptionsTab () {
    

    

    
    

    

    return (
        <div>
            <Nav defaultActiveKey="/home" className="options-tab flex-column">
              <Nav.Link className='options-tab-link' to="/home">
                Home
              </Nav.Link>
              <NavDropdown title="Genre" id="basic-nav-dropdown" className="genre-dropdown">
          
                <GenreList />
              
              </NavDropdown>
              <NavDropdown title="Top Rated" id='basic-nav-dropdown'className='topRated-dropdown'>
                <TopRatedList />
                <Link className="dropdown-item" to="/top-rated">
                  See All Top Rated
                </Link>
              </NavDropdown>
            </Nav>  
        </div>
    )
   
};

export default OptionsTab;


