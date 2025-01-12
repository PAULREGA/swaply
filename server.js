// const express = require('express');
// const routes = require('./routes');

// const app = express(); // Initialize Express app
// const port = process.env.PORT || 3000; // Define the port

// // Middleware
// app.use(express.json());

// // Default route for testing
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // API Routes
// app.use('/api', routes); // Use the modular routes

// // Start the server
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });


const app = require('./src/app'); // Import the Express app
const PORT = process.env.PORT || 3000; // Import the PORT constant from config

// Start the server
app.listen(PORT, () => {
  console.log(`Swaply backend running on http://localhost:${PORT}`);
});
