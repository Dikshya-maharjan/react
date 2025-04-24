import React from 'react';
import { Link } from 'react-router-dom';
import './petadopt.css';

const Homepage = () => {
  return (
    <>
      <div className="main">
        <div className="nav">
          <div className="logo">PawCreation</div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/donate" className="donate">Donate</Link></li>
            <li><Link to="/adopt">Adopt</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="mid-div">
          <h2>
            Give a Loving Home to a Loyal Companion<br />
            Adopt a Dog Today!
          </h2>
          <div className="photo">
            <img src="./streetdog.jpg" alt="Happy dog" />
          </div>
        </div>
        <div className="information">
          
          <div className="Meet">
            <button className="findbtn"><Link to='/donate'>Adopt</Link></button>
            <h4>Adopt a Dog</h4>
            <p>Bring home a dog and fill your life with love</p>
          </div>
          <div className="adopt">
            <button className="findbtn"><Link to='adopt'>Donate</Link></button>
            <h4>Donate for Dog</h4>
            <p>Help a dog find hope — donate today and change a life.</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <p className="foot">&copy; 2025 Pet Adoption. Designed by PawCreations</p>
      </div>
    </>
  );
};

export default Homepage;
