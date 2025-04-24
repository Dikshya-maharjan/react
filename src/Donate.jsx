import React from 'react';
import { Link } from 'react-router-dom';
import './donate.css';
import './petadopt.css';

const Donate = () => {
  return (
    <>
      <div className='donate-main'>
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
                </div>
        <div className='donateimg'>
          <img src='./leo.jpg' alt="photo" className='street' width={'100%'} />
          <p className='donatepara'>
            Donate to help Animal House And Shelter.<br />
            Help us to save pets and provide them for loving a lifetime home
          </p>
          <button className='btnd'>
            <Link to={'/Donateform'} className='btnd'>Donate Now</Link>
          </button>
        </div>
        <div className='sub'>
          <div className='why'>
            <b className='bold'>Why To Donate?<br /></b>
            <p className='save'>
              Your donation can save a street animal’s life,<br />
              giving them a chance for a better tomorrow.
            </p>
            <p className='whydonate'>
            Donating to street dog shelters is a powerful way to make a difference in the lives of countless animals in need. Street dogs often face harsh conditions, including hunger, illness, and the constant threat of danger from traffic or abuse. Your donation helps provide essential food, clean water, and safe shelter, offering them a chance for a better life. It also funds crucial veterinary care, including vaccinations, treatments, and spaying/neutering programs that prevent overpopulation and promote long-term well-being. By supporting street dog initiatives, you contribute to rescue efforts, rehabilitation, and education about responsible pet ownership, ensuring a brighter, safer future for these vulnerable animals. Your kindness today can help save a life tomorrow
            </p>
            <div className='dogs'>
              <img src='./injury1.jpg' alt="injury" className='dog' />
              <img src='./injury2.jpg' alt="injury" className='dog' />
              <img src='./injury3.jpg' alt="injury" className='dog' />
            </div>
          </div>
        </div>
        <div className="how">
          <b className='howto'>
            Your donation will be a lifeline when it's needed the most, bringing hope and change to those who need it the most!
          </b>
         
        </div>
        <div className="footer">
        <p className="foot">&copy; 2025 Pet Adoption. Designed by PawCreations</p>
      </div>
      </div>
    </>
  );
};

export default Donate;
