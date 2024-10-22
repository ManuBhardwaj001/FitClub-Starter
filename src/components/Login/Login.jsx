import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../Alert/Alert"; // Import the new Alert component
import "./Login.css"; // Your login styles

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState(null); // State to handle the alert message
  const navigate = useNavigate(); // Replacing useHistory with useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(null); // Reset error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      setAlert({ type: 'success', message: 'Login successful!' }); // Show success alert
      localStorage.setItem('userName', data.name);
      setFormData({ email: '', password: '' }); // Reset the form
      navigate('/'); // Navigate to the home page after successful login
    } else {
      setAlert({ type: 'error', message: data.message || 'Login failed!' }); // Show error alert
    }
  };

  // Close alert function
  const handleCloseAlert = () => {
    setAlert(null); // Remove the alert
  };

  return (
    <div className="login-container">
      {alert && <Alert type={alert.type} message={alert.message} onClose={handleCloseAlert} />} {/* Show Alert if exists */}
      
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="login-button">Login</button>
      </form>
      
      {error && <p className="error-message">{error}</p>} {/* Display error message if login fails */}

      <p>
        Don't have an account?{" "}
        <Link to="/signup" className="signup-link">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
