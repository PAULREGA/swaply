# Swaply

Swaply is a backend application that provides real-time cryptocurrency prices and conversion tools using RESTful APIs.

## Features
- Fetch real-time cryptocurrency prices in USD.
- Convert cryptocurrency amounts to USD.
- Bonus: Convert one cryptocurrency to another (e.g., Bitcoin to Ethereum).

## Technology Stack
- **Node.js** and **Express.js**: Backend and API framework.
- **Axios**: For HTTP requests to fetch data from CoinGecko.
- **CoinGecko API**: Real-time cryptocurrency data.

## APIs
1. **Get Prices**: `/api/prices` (Paginated cryptocurrency prices in USD).
2. **Convert to USD**: `/api/convert/usd` (Convert crypto amount to USD).
3. **Convert Crypto**: `/api/convert/crypto` (Convert one cryptocurrency to another).

## Setup
1. Clone the repo: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Start the server: `node server.js`

Access the API at `http://localhost:3000/`.

---

**THANK YOU! **
