import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';  // Link to the CSS file
import Header from '../Header/Header';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    height: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await fetch('http://localhost:5000/api/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  
    const data = await response.json();
    if (response.ok) {
      alert('User created successfully!');
    } else {
      console.log(data);
      alert(data.message || 'Signup failed!');
    }
  };
  
  

  return (<>
 
    <div className="signup-container">
    <Header/>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="signup-header">Create Account</h2>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" required />
        <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
        <input type="number" name="height" value={formData.height} onChange={handleChange} placeholder="Height (cm)" required />
        <button type="submit" className="signup-button" >Sign Up</button>
      </form>
      <div className="login-link">
        Already have an account? <Link to="/login" className="signup-link">Login</Link>
      </div>
    </div></>
  );
};

export default Signup;
