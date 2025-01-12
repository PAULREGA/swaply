const express = require('express');
const cryptoRoutes = require('./routes/cryptoRoutes');

const app = express();
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to Swaply API');
});

// Routes
app.use('/api', cryptoRoutes);

module.exports = app;
