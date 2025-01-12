const express = require('express');
const { getCoinPrices, convertToUSD, convertCrypto } = require('../controllers/cryptoController');

const router = express.Router();

// Get paginated coin prices
router.get('/prices', getCoinPrices);

// Convert cryptocurrency to USD
router.get('/convert/usd', convertToUSD);

// Bonus: Convert one cryptocurrency to another
router.get('/convert/crypto', convertCrypto);

module.exports = router;
