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

// import React, { Component } from "react";
// import Slider from "./components/slider/slider.js";
// import apiKey from "./utils/key";

// require("./scss/App.scss");

// export class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       movies: [],
//     };
//   }

//   async componentDidMount() {
//     const res = await fetch(
//       `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
//     );
//     const data = await res.json();

//     this.setState({ movies: data.results });
//   }

//   render() {
//     const { movies } = this.state;

//     return (
//       <div className="App">
//         <h1 className="App-title">
//           <span>Netflix</span> Slider
//         </h1>
//         <Slider movies={movies} />
//       </div>
//     );
//   }
// }

// export default App;
