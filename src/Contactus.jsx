import React, { useState } from "react";
import './contactus.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
//js
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };
//react codes
  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Reach out with any questions or feedback.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        {["name", "email", "message"].map((field) => (
          <div className="form-field" key={field}>
            <label htmlFor={field}>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            {field === "message" ? (
              <textarea
                id={field}
                placeholder={`Enter your ${field}`}
                value={formData[field]}
                onChange={handleChange}
                required
              />
            ) : (
              <input
                type={field === "email" ? "email" : "text"}
                id={field}
                placeholder={`Enter your ${field}`}
                value={formData[field]}
                onChange={handleChange}
                required
              />
            )}
            {errors[field] && <span className="error-msg">{errors[field]}</span>}
          </div>
        ))}
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;