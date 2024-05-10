import React, { Component } from 'react';
import "./OptionsTabs.css"
import Nav from 'react-bootstrap/Nav'; 
import NavDropdown from 'react-bootstrap/NavDropdown';
import GenreList from './GenreList';




export default class OptionsTabs extends Component{
   render(){


    return (
      <Nav defaultActiveKey="/home" className="options-tab flex-column">
        <Nav.Link className='options-tab-link' href="/home">Home</Nav.Link>
        <NavDropdown title="Genre" id="basic-nav-dropdown" className="genre-dropdown">
          <GenreList /> {}
        </NavDropdown>
        <Nav.Link className='options-tab-link' eventKey="link-2">Top Rated</Nav.Link>
        
      </Nav>
    );
   }
}
