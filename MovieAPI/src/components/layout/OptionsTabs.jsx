import React, { Component } from 'react';
import "./OptionsTabs.css"
import Nav from 'react-bootstrap/Nav'; 




export default class OptionsTabs extends Component{
   render(){


    return (
      <Nav defaultActiveKey="/home" className="options-tab flex-column">
        <Nav.Link className='options-tab-link' href="/home">Home</Nav.Link>
        <Nav.Link className='options-tab-link' eventKey="link-1">Genres</Nav.Link>
        <Nav.Link className='options-tab-link' eventKey="link-2">Top Rated</Nav.Link>
        
      </Nav>
    );
   }
}
