import React from "react";
import { Link } from 'react-router-dom';
import './petadopt.css';
import './aboutus.css';

 const Aboutus=()=>{
    return(
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
                <div className="about">
                    <h2>Aboutus- PawCreation</h2>
                    <p>
At PawCreations, we believe every dog deserves a loving home and a second chance at life. What started as a small group of animal lovers has grown into a passionate community dedicated to rescuing, caring for, and rehoming stray and abandoned dogs.

Our mission is simple — to create brighter futures for our furry friends. Through adoption, awareness, and support, we strive to connect kind hearts with loyal companions. Whether you’re looking to adopt, donate, or simply spread the word, you're helping us make a difference — one paw at a time.

Join us on this journey. Together, let’s turn compassion into action and give every dog the life they deserve.


                    </p>
                </div>

                </div>
                <div className="footer">
        <p className="foot">&copy; 2025 Pet Adoption. Designed by PawCreations</p>
      </div>
        </>
    )
 }
 export default Aboutus;