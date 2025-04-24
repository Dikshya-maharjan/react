import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Adopt.css';
import './petadopt.css';


function Adoption() {
  const [pets, setPets] = useState([
    { id: 1, name: 'Dalley', desc: 'Playful and friendly.', image: 'injury1.jpg', adopted: false },
    { id: 2, name: 'Kalu', desc: 'Loves running around.', image: 'injury2.jpg', adopted: false },
    { id: 3, name: 'Sheru', desc: 'Brave and loyal.', image: 'street2.jpg', adopted: false },
    { id: 4, name: 'Lucy', desc: 'Sweet and cuddly.', image: 'street1.jpg', adopted: false },
    {id:5,name:"Leo",desc:"Energetic and playful",image:'leo.jpg',adopted:false}
  ]);

  function adoptPet(id) {
    const newList = pets.map(pet =>
      pet.id === id ? { ...pet, adopted: true } : pet
    );
    setPets(newList);
  }

  return (
    <>
    <div className='main'>
      <div className="nav">
        <div className="logo">PawCreation</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/donate">Donate</Link></li>
          <li><Link to="/adopt">Adopt</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>

      <h1 className="heading">Adopt a Pet</h1>

      <div className="pet-container">
        {pets.map(pet => (
          <div key={pet.id} className="pet-card">
            <img src={pet.image} alt={pet.name} className="pet-img" />
            <h3>{pet.name}</h3>
            <p>{pet.desc}</p>
            <button onClick={() => adoptPet(pet.id)} disabled={pet.adopted}>
              {pet.adopted ? 'Adopted' : 'Adopt'}
            </button>
          </div>
        ))}
      </div>
      </div>
    <div className="footer">
    <p className="foot">&copy; 2025 Pet Adoption. Designed by PawCreations</p>
  </div>
    </>
  );
}

export default Adoption;
