import React, { Component } from 'react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import MTMflix_logo from './logo/MTMflix_logo.png'
import SearchBar from './SearchBar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';



function Navbar(){
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    }
        return(
            <div>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top'>
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center cursor pointer"
                        onClick={handleLogoClick}> 
                    <img src={MTMflix_logo} alt="MTMflix logo"/>
                    </a>
                    <h1 className="navbar-brand"><SearchBar setResults={setResults}/></h1>
                    <Nav className="ms-auto">
                        <NavLink to="/liked-movies" style={{
                            color: 'fff',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            paddingRight: '1rem',
                            marginRight: '1rem',
                            borderRight:'1px solid #ddd',}}>Liked Movies</NavLink>
                        <NavLink 
                        className='nav-link' 
                        activeClassName='active'
                        to="/top-rated"
                        style={{
                            color: 'fff',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            paddingRight: '1rem',
                            marginRight: '1rem',
                            borderRight:'1px solid #ddd',
                        }}>
                        
                            Top Rated
                        </NavLink>
                    </Nav>
                </nav>
                
            </div>
        )
    }
export default Navbar;