import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./OptionsTabs.css";
import Nav from 'react-bootstrap/Nav';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import GenreList from "./GenreList";
//import TopRatedList from "./TopRatedList";

function OptionsTab () {
    

    

    
    

    

    return (
        <div>
            <Nav defaultActiveKey="/home" className="options-tab flex-column">
              <Nav.Link as={NavLink} className='options-tab-link' to="/top-rated">
                Top Rated
              </Nav.Link>
                
            </Nav>  
        </div>
    )
   
};

export default OptionsTab;


