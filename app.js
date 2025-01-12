// const express = require('express');
// const routes = require('./routes/index.js');

// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware
// app.use(express.json());

// // Default route for testing
// app.get('/', (req, res) => {
//   res.send('Welcome to Swaply API');
// });

// // Swaply routes
// app.use('/api', routes);

// // Start the server
// app.listen(port, () => {
//   console.log(`Swaply backend running on http://localhost:${port}`);
// });

const express = require('express');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

const app = express(); // Initialize Express app

// Middleware
app.use(express.json());

// Swagger UI route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to Swaply API');
});

// Modular API routes
app.use('/api', routes);

module.exports = app; // Export the app for use in server.js
