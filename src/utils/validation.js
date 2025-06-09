export const validateName = (name) => {
  return name.length >= 2 && /^[A-Za-z\s]+$/.test(name);
};

export const validateUsername = (username) => {
  return username.length >= 4 && /^[A-Za-z0-9_]+$/.test(username);
};

export const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 8 && 
         /[A-Z]/.test(password) && 
         /[a-z]/.test(password) && 
         /[0-9]/.test(password) && 
         /[!@#$%^&*]/.test(password);
};

export const validatePhone = (phone) => {
  return /^\d{10}$/.test(phone);
};

export const validatePan = (pan) => {
  return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan);
};

export const validateAadhar = (aadhar) => {
  return /^\d{12}$/.test(aadhar);
}; 