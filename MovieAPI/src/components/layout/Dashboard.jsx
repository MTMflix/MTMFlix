import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './dashboard.css';
import MovieList from '../movies/MovieList';

function Dashboard() {
 return (
  <>
  <div className="carousel-containter" style={{ marginTop: "5vw", marginLeft: "auto", marginRight: "auto", marginBottom: "auto",  width: '775px', height: '810px', color:"white" }}>
    <h1>EDITOR'S PICKS</h1>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://image.tmdb.org/t/p/w780/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg"
          alt="First slide"
          style={{ width: 'auto', height: '810px' }}
        />
        <Carousel.Caption>
          <h5>Avengers: Endgame</h5>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://image.tmdb.org/t/p/w780/fIwiFha3WPu5nHkBeMQ4GzEk0Hv.jpg"
          alt="Second slide"
          style={{ width: 'auto', height: '810px' }}
        />
        <Carousel.Caption>
          <h5>Everything Everywhere All At Once</h5>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://image.tmdb.org/t/p/w780/dgMdsBbGXp9h6sLsfqsM3texzym.jpg"
          alt="Third slide"
          style={{ width: 'auto', height: '810px' }}
        />
        <Carousel.Caption>
          <h5>The Curious Case of Benjamin Button</h5>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
          alt="Fourth slide"
          style={{ width: 'auto', height: '810px' }}
        />
        <Carousel.Caption>
          {/* <h5>The Godfather</h5>
          <p>An offer you can't refuse.</p> */}
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://image.tmdb.org/t/p/w780/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg"
          alt="Fifth slide"
          style={{ width: 'auto', height: '810px' }}
        />
        <Carousel.Caption>
          {/* <h5>GoodFellas</h5>
          <p>Three decades of life in the mafia.</p> */}
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://image.tmdb.org/t/p/w780/mIKuvEhBvDf9LGxE9x6m0hDR9Au.jpg"
          alt="Sixth slide"
          style={{ width: 'auto', height: '810px' }}
        />
        <Carousel.Caption>
          <h5>Crooklyn</h5>
          {/* <p>A new look at the old neighborhood.</p> */}
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
          alt="Seventh slide"
          style={{ width: 'auto', height: '810px' }}
        />
        <Carousel.Caption>
          {/* <h5>Interstellar</h5>
          <p>Mankind was born on Earth. It was never meant to die here.</p> */}
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://image.tmdb.org/t/p/original/sDbO6LmLYtyqAoFTPpRcMgPSCEO.jpg"
          alt="Eigth slide"
          style={{ width: 'auto', height: '810px' }}
        />
        <Carousel.Caption>
          {/* <h5>A Bronx Tale</h5>
          <p>One man lives in the neighborhood, another man owns it. A devoted father battles the local crime boss for the life of his son.</p> */}
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://image.tmdb.org/t/p/original/2mxS4wUimwlLmI1xp6QW6NSU361.jpg"
          alt="Ninth slide"
          style={{ width: 'auto', height: '810px' }}
        />
        <Carousel.Caption>
          {/* <h5>Big Hero 6</h5>
          <p>Drop everything. Save the world.</p> */}
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://image.tmdb.org/t/p/original/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg"
          alt="Tenth slide"
          style={{ width: 'auto', height: '810px' }}
        />
        <Carousel.Caption>
          {/* <h5>Spider-Man: Into the Spider-Verse</h5>
          <p>More than one wears the mask.</p> */}
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://image.tmdb.org/t/p/original/wA4lgl8gmoICSShviCkEB61nIBB.jpg"
          alt="Eleventh slide"
          style={{ width: 'auto', height: '810px' }}
        />
        <Carousel.Caption>
          {/* <h5>The Princess Diaries</h5>
          <p>She rocks. She rules. She reigns.</p> */}
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://image.tmdb.org/t/p/original/7fn624j5lj3xTme2SgiLCeuedmO.jpg"
          alt="Twelfth slide"
          style={{ width: 'auto', height: '810px' }}
        />
        <Carousel.Caption>
          {/* <h5>Whiplash</h5>
          <p>The road to greatness can take you to the edge.</p> */}
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://image.tmdb.org/t/p/original/nNh8PDzkx4dUdNYtlzAiprpNs5e.jpg"
          alt="Thirteenth slide"
          style={{ width: 'auto', height: '810px' }}
        />
        <Carousel.Caption>
          {/* <h5>New Year's Eve</h5>
          <p>The one night anything is possible.</p> */}
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://image.tmdb.org/t/p/original/t3vaWRPSf6WjDSamIkKDs1iQWna.jpg"
          alt="Fourteenth slide"
          style={{ width: 'auto', height: '810px' }}
        />
        <Carousel.Caption>
          {/* <h5>Ratatouille</h5>
          <p>He's dying to become a chef.</p> */}
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://image.tmdb.org/t/p/original/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg"
          alt="Fifteenth slide"
          style={{ width: 'auto', height: '810px' }}
        />
        <Carousel.Caption>
          {/* <h5>WALL - </h5>
          <p>Life isn't measured in minutes, but in moments.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </div>
   <MovieList />
   </>
 );
}


export default Dashboard;
