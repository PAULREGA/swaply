const { fetchAllCoinPrices } = require('../services/cryptoService');

async function getCoinPrices(req, res) {
  try {
    const { page = 1, limit = 20 } = req.query;

    const prices = await fetchAllCoinPrices();
    const coins = Object.entries(prices).map(([key, value]) => ({ coin: key, usd: value.usd }));

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit, 10);
    const paginatedCoins = coins.slice(startIndex, endIndex);

    res.json({
      page: parseInt(page, 10),
      limit: parseInt(limit, 10),
      total: coins.length,
      data: paginatedCoins,
    });
  } catch (error) {
    console.error('Error fetching coin prices:', error.message);
    res.status(500).json({ error: 'Unable to fetch coin prices' });
  }
}

async function convertToUSD(req, res) {
  try {
    const { coin, amount } = req.query;
    if (!coin || !amount) {
      return res.status(400).json({ error: 'Coin and amount are required' });
    }

    const prices = await fetchAllCoinPrices();
    const coinPrice = prices[coin]?.usd;

    if (!coinPrice) {
      return res.status(404).json({ error: 'Coin not found' });
    }

    const converted = parseFloat(amount) * coinPrice;
    res.json({ coin, amount: parseFloat(amount), usd: converted });
  } catch (error) {
    console.error('Error converting to USD:', error.message);
    res.status(500).json({ error: 'Unable to convert to USD' });
  }
}

async function convertCrypto(req, res) {
  try {
    const { from, to, amount } = req.query;
    if (!from || !to || !amount) {
      return res.status(400).json({ error: 'From, to, and amount are required' });
    }

    const prices = await fetchAllCoinPrices();
    const fromPrice = prices[from]?.usd;
    const toPrice = prices[to]?.usd;

    if (!fromPrice || !toPrice) {
      return res.status(404).json({ error: 'One or both coins not found' });
    }

    const converted = (parseFloat(amount) * fromPrice) / toPrice;
    res.json({ from, to, amount: parseFloat(amount), converted });
  } catch (error) {
    console.error('Error converting crypto:', error.message);
    res.status(500).json({ error: 'Unable to convert cryptocurrency' });
  }
}

module.exports = { getCoinPrices, convertToUSD, convertCrypto };
