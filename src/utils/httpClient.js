const axios = require('axios');

const httpClient = axios.create({
  timeout: 10000, // 10-second timeout
});

module.exports = httpClient;
