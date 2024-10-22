const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../config/db');
const router = express.Router();
// Route to handle user signup
router.post('/signup', async (req, res) => {
  const { name, email, password, age, height } = req.body;

  // Validate inputs
  if (!name || !email || !password || !age || !height) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    // Calculate BMI (BMI = weight in kg / (height in meters)^2)
    const heightInMeters = height / 100;
    const bmi = (age / (heightInMeters * heightInMeters)).toFixed(2);

    // Insert the user data into the database
    const query = 'INSERT INTO users (name, email, password, age, height, bmi) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [name, email, hashedPassword, age, height, bmi], (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Failed to create user.' });
      }

      res.status(201).json({ message: 'User created successfully!' });
    });
  } catch (error) {
    console.error('Error in signup:', error);
    res.status(500).json({ message: 'Server error.' });
  }
});


// Route to handle user login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
  
    // Validate inputs
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }
  
    try {
      // Check if the user exists in the database
      const query = 'SELECT * FROM users WHERE email = ?';
      db.query(query, [email], async (err, results) => {
        if (err) {
          console.error('Database error:', err);
          return res.status(500).json({ message: 'Server error.' });
        }
  
        // Check if user was found
        if (results.length === 0) {
          console.log('No user found with this email:', email);
          return res.status(401).json({ message: 'Invalid email or password.' });
        }
  
        const user = results[0];
  
        // Compare passwords (plaintext vs hashed)
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
          console.log('Password mismatch for user:', email);
          return res.status(401).json({ message: 'Invalid email or password.' });
        }
  
        // Successful login
        console.log('Login successful for user:', user.name);
        res.status(200).json({ message: 'Login successful!', name: user.name });
      });
    } catch (error) {
      console.error('Error in login:', error);
      res.status(500).json({ message: 'Server error.' });
    }
  });

module.exports = router;
