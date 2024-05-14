import React, { Component } from 'react';
import "./OptionsTabs.css"
import Nav from 'react-bootstrap/Nav'; 
import NavDropdown from 'react-bootstrap/NavDropdown';
import GenreList from './GenreList';
import { fetchGenres } from '../../Api';

export default class OptionsTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: []
    };
  }

  componentDidMount() {
    this.fetchGenresData();
  }

  fetchGenresData = async () => {
    try {
      const genres = await fetchGenres();
      this.setState({ genres });
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  }

  render() {
    return (
      <div>
        <Nav defaultActiveKey="/home" className="options-tab flex-column">
          <Nav.Link className='options-tab-link' href="/home">Home</Nav.Link>
            <NavDropdown title="Genre" id="basic-nav-dropdown" className="genre-dropdown">
            
              <GenreList genres={this.state.genres} />
            </NavDropdown>
            <Nav.Link className='options-tab-link' eventKey="link-2">Top Rated</Nav.Link>
        </Nav>
      </div>
    )
  };
};



