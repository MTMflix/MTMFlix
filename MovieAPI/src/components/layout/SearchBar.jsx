import React, { Component } from 'react'
import "./SearchBar.css"
import {FaSearch} from "react-icons/fa"

export default class SearchBar extends Component {
  render() {
    return (
      <div className='input-wrapper'>
        <FaSearch id='search-icon'/>
        <input placeholder=' search to browse...' />
      </div>
    )
  }
}
