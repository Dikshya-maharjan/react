// formValidation.js

export const validateDonationForm = (formData) => {
    const errors = {};
  
    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    
    }
  
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid.";
    }
  
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!/^\d{7,15}$/.test(formData.phone)) {
      errors.phone = "Enter a valid phone number.";
    }
  
    if (!formData.amount) {
      errors.amount = "Amount is required.";
    } else if (Number(formData.amount) < 1) {
      errors.amount = "Amount must be at least NPR 1.";
    }
  
    return errors;
  };
  