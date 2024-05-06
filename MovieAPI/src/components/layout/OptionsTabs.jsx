import React, { Component } from 'react';
import "./OptionsTabs.css"
import Nav from 'react-bootstrap/Nav'; 
import NavDropdown from 'react-bootstrap/NavDropdown';




export default class OptionsTabs extends Component{
   render(){


    return (
      <Nav defaultActiveKey="/home" className="options-tab flex-column">
        <Nav.Link className='options-tab-link' href="/home">Home</Nav.Link>
        <NavDropdown title="Genre" id="basic-nav-dropdown" className="genre-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Adventure
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Comedy</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.4">Drama</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.5">Comedy</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.6">Horror</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.7">Romance</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.8">Thriller</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.9">War</NavDropdown.Item>
              
              </NavDropdown>
        <Nav.Link className='options-tab-link' eventKey="link-2">Top Rated</Nav.Link>
        
      </Nav>
    );
   }
}
