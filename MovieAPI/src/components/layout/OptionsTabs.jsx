import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./OptionsTabs.css";
import Nav from 'react-bootstrap/Nav';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import GenreList from "./GenreList";
//import TopRatedList from "./TopRatedList";

function OptionsTab () {
    

    

    
    

    

    return (
        <div>
            <Nav defaultActiveKey="/home" className="options-tab flex-column">
              <Nav.Link className='options-tab-link' to="/top-rated">
                Top Rated
              </Nav.Link>
                <Link className="dropdown-item" to="/top-rated">
                  See All Top Rated
                </Link>
            </Nav>  
        </div>
    )
   
};

export default OptionsTab;


