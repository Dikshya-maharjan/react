import React, { useState } from "react";
import './donateform.css';
import { validateDonationForm } from "./Formvalidate";

const Donateform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    const validationErrors = validateDonationForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Donation submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        amount: "",
        message: ""
      });
    }
  };

  return (
    <div className="donate-page">
      <div className="donate-header">
        <h2>Donate to Save a Life</h2>
        <p>Your generous contribution helps provide food, shelter, and medical care for dogs in need.</p>
      </div>
      <div className="donate-form-container">
        <div className="donate-form">
          {["name", "email", "phone", "amount"].map((field) => (
            <div className="form-field" key={field}>
              <label htmlFor={field}>
                {field === "amount" ? "Donation Amount (NPR)" : `Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              </label>
              <input
                type={field === "email" ? "email" : field === "phone" ? "tel" : field === "amount" ? "number" : "text"}
                id={field}
                placeholder={`Enter your ${field}`}
                value={formData[field]}
                onChange={handleChange}
                min={field === "amount" ? 1 : undefined}
                required
              />
              {errors[field] && <span className="error-msg">{errors[field]}</span>}
            </div>
          ))}
          <div className="form-field">
            <label htmlFor="message">Message (Optional)</label>
            <textarea
              id="message"
              placeholder="Share a message or dedication"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="button" className="submit-btn" onClick={handleSubmit}>Submit Donation</button>
        </div>
      </div>
      <div className="footer">
        <p className="foot">Copyright © 2025 Pet Adoption. Designed by PawCreations</p>
      </div>
    </div>
  );
};

export default Donateform;
