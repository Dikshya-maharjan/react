import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Adopt.css';
import './petadopt.css';

function Adopt({ onAdopt }) {
  const [pets, setPets] = useState([
    { id: 1, name: 'Dalley', desc: 'Playful and friendly.', image: 'injury1.jpg', adopted: false },
    { id: 2, name: 'Kalu', desc: 'Loves running around.', image: 'injury2.jpg', adopted: false },
    { id: 3, name: 'Sheru', desc: 'Brave and loyal.', image: 'street2.jpg', adopted: false },
    { id: 4, name: 'Lucy', desc: 'Sweet and cuddly.', image: 'street1.jpg', adopted: false },
    { id: 5, name: 'Leo', desc: 'Energetic and playful', image: 'leo.jpg', adopted: false },
    { id: 6, name: 'Suri', desc: 'Loyal and sweet', image: 'cat1.jpg', adopted: false }
  ]);

  const [selectedPet, setSelectedPet] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const adoptPet = (id, formData) => {
    const newList = pets.map(pet =>
      pet.id === id ? { ...pet, adopted: true } : pet
    );
    setPets(newList);
    onAdopt && onAdopt(id, formData);
    alert(`Thank you for adopting ${pets.find(pet => pet.id === id).name}!`);
  };

  return (
    <>
      <div className="main">
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
              {pet.adopted ? (
                <button disabled className="adopted-btn">
                  Adopted
                </button>
              ) : (
                <button
                  className="adopt-btn"
                  onClick={() => {
                    setSelectedPet(pet);
                    setShowForm(true);
                  }}
                >
                  Adopt
                </button>
              )}
            </div>
          ))}
        </div>

        {showForm && selectedPet && (
          <div className="adopt-form-modal">
            <div className="form-box">
              <h3>Adopt {selectedPet.name}</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = {
                    name: e.target.name.value,
                    email: e.target.email.value,
                    phone: e.target.phone.value,
                    location: e.target.location.value
                  };
                  adoptPet(selectedPet.id, formData);
                  setShowForm(false);
                  setSelectedPet(null);
                }}
              >
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <input type="tel" name="phone" placeholder="Your Phone" required />
                <input type="text" name="location" placeholder="Your Location" required />
                <button type="submit">Confirm Adoption</button>
                <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
              </form>
            </div>
          </div>
        )}
      </div>

      <div className="footer">
        <p className="foot">© 2025 Pet Adoption. Designed by PawCreations</p>
      </div>
    </>
  );
}

export default Adopt;
