import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'; 




export default class OptionsTabs extends Component{
   render(){


    return (
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link eventKey="link-1">Genres</Nav.Link>
        <Nav.Link eventKey="link-2">Top Rated</Nav.Link>
        
      </Nav>
    );
   }
}
