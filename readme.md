Swaply

Overview

Swaply is a backend application designed to fetch real-time cryptocurrency prices in USD from service providers such as CoinGecko or Binance. The application provides RESTful APIs to display these prices, convert cryptocurrency amounts to their USD equivalents, and, as a bonus, convert one cryptocurrency to another.

Features

Fetch real-time cryptocurrency prices in USD.

API to display paginated coin prices.

API to convert cryptocurrency amounts to USD.

Bonus API to convert from one cryptocurrency to another (e.g., Bitcoin to Ethereum).

Technology Stack

Node.js: Backend runtime.

Express.js: Web framework for building RESTful APIs.

Axios: For making HTTP requests to fetch real-time cryptocurrency data.

CoinGecko API: Used as the data source for cryptocurrency prices.

Project Structure

swaply/
├── src/
│   ├── controllers/       # Handles API logic
│   │   └── cryptoController.js
│   ├── services/          # External API calls and business logic
│   │   └── cryptoService.js
│   ├── routes/            # API route definitions
│   │   └── cryptoRoutes.js
│   ├── config/            # Configuration constants
│   │   └── constants.js
│   └── app.js             # Express app setup
├── server.js              # Entry point for the application
└── package.json           # Node.js dependencies

APIs

1. Root Route

URL: /

Method: GET

Description: Displays a welcome message.

Example Request:

curl http://localhost:3000/

Response:

"Welcome to Swaply API"

2. Get Cryptocurrency Prices

URL: /api/prices

Method: GET

Query Parameters:

page (optional): Page number (default: 1)

limit (optional): Number of coins per page (default: 20)

Description: Fetches cryptocurrency prices in USD with pagination.

Example Request:

curl "http://localhost:3000/api/prices?page=1&limit=5"

Response:

{
  "page": 1,
  "limit": 5,
  "total": 10,
  "data": [
    { "coin": "bitcoin", "usd": 20000 },
    { "coin": "ethereum", "usd": 1500 },
    { "coin": "cardano", "usd": 0.4 },
    { "coin": "solana", "usd": 10 },
    { "coin": "dogecoin", "usd": 0.08 }
  ]
}

3. Convert Cryptocurrency to USD

URL: /api/convert/usd

Method: GET

Query Parameters:

coin (required): Cryptocurrency ID (e.g., bitcoin, ethereum)

amount (required): Amount of the cryptocurrency to convert.

Description: Converts a specific amount of a cryptocurrency to its USD equivalent.

Example Request:

curl "http://localhost:3000/api/convert/usd?coin=bitcoin&amount=2"

Response:

{
  "coin": "bitcoin",
  "amount": 2,
  "usd": 40000
}

4. Convert Cryptocurrency to Another Cryptocurrency

URL: /api/convert/crypto

Method: GET

Query Parameters:

from (required): Source cryptocurrency ID (e.g., bitcoin)

to (required): Target cryptocurrency ID (e.g., ethereum)

amount (required): Amount of the source cryptocurrency to convert.

Description: Converts a specific amount of one cryptocurrency to another.

Example Request:

curl "http://localhost:3000/api/convert/crypto?from=bitcoin&to=ethereum&amount=1"

Response:

{
  "from": "bitcoin",
  "to": "ethereum",
  "amount": 1,
  "converted": 13.33
}

Installation and Setup

Prerequisites

Node.js (v14 or later)

npm (Node Package Manager)

Steps

Clone the repository:

git clone <repository-url>

Navigate to the project directory:

cd swaply

Install dependencies:

npm install

Start the application:

node server.js

Access the API at http://localhost:3000/.

Deployment

Ensure you have a production-ready environment.

Use tools like PM2 or Docker to manage your Node.js application in production.

Configure environment variables (e.g., PORT) in a .env file or deployment settings.

Contribution

Create a new branch with your full name:

git checkout -b your-full-name

Commit changes with clear messages:

git commit -m "Added feature XYZ"

Push your branch and create a pull request.

Additional Notes

The application uses CoinGecko's free tier API. Ensure you adhere to their API usage policies.

For large-scale production, consider caching API responses using Redis or similar tools to reduce API call frequency.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Happy Coding! 🚀

