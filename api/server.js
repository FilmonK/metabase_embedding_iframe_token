const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors'); 
const app = express();

app.use(cors());  
require('dotenv').config();


// Endpoint to generate JWT token
app.get('/api/generate-token', (req, res) => {
  const payload = {
    email: 'ab@cd.com',  // hardcoded for testing
    // exp: Math.floor(Date.now() / 1000) + (10 * 60)  // Expiration 10 minutes
    exp: Math.floor(Date.now() / 1000) + 10
  };

  const secretKey = process.env.JWT_SECRET_KEY

  // Sign the token with the payload and secret key
  const token = jwt.sign(payload, secretKey);
  res.json({ token });
});

app.listen(3000, () => {
  console.log('Backend server running on http://localhost:3000');
});
