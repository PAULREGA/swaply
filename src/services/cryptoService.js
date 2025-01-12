const axios = require('axios');
const { COINGECKO_API_URL } = require('../config/constants');

async function fetchAllCoinPrices() {
  try {
    const response = await axios.get(`${COINGECKO_API_URL}/simple/price`, {
      params: {
        ids: 'bitcoin,ethereum,cardano,solana,polkadot,dogecoin,ripple,binancecoin,chainlink,litecoin',
        vs_currencies: 'usd',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching coin prices:', error.message);
    throw error;
  }
}

module.exports = { fetchAllCoinPrices };
