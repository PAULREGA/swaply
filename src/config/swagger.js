const swaggerJsdoc = require('swagger-jsdoc');

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0', // OpenAPI version
  info: {
    title: 'Swaply API', // API Title
    version: '1.0.0', // API Version
    description: 'API documentation for the Swaply cryptocurrency backend', // Description
  },
  servers: [
    {
      url: 'http://localhost:3000/api', // Base URL for APIs
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'], // Path to the API docs in your routes folder
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
