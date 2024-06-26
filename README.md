# Sports Management App - Assignment-5-Server

Welcome to the repository for the server-side of the Sports Management App - Assignment-5-Server.

## Overview

This server handles authentication and data management for the Sports Management App. It provides endpoints for user registration, login, products, and sold products. The server is built with Node.js using Express as the web framework, MongoDB as the database, and TypeScript for enhanced development.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Programming-Hero-web-course/assignment-5-server.git
   ```

2. Install dependencies:

   ```bash
   cd assignment-5-server
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the necessary variables, such as `MONGODB_URI` and `JWT_SECRET`. Refer to the `.env.example` file for guidance.

4. Run the development server:

   ```bash
   npm run start:dev
   ```

   This will start the development server, and you can access the API at [http://localhost:3000/](http://localhost:3000/).

## API Endpoints

- **User Authentication:**
  - `POST /api/auth/register`: Register a new user.
  - `POST /api/auth/login`: Log in a user.

- **Products:**
  - `POST /api/products/create-product`: Create a new product.
  - `DELETE /api/products/delete-product/:id`: Delete a product by ID.
  - `DELETE /api/products/delete-products`: Delete all products.
  - `PATCH /api/products/update-product/:id`: Update a product by ID.
  - `GET /api/products/`: Retrieve a list of products.
  - `GET /api/products/:id`: Retrieve a product by ID.

- **Sold Products:**
  - `POST /api/product/add-sell`: Sell a product.
  - `GET /api/product/get-sells`: Retrieve a list of sold products.

## Technologies Used

- Express: Web framework for Node.js
- MongoDB: NoSQL database for data storage
- TypeScript: Superset of JavaScript for enhanced development
- JWT: JSON Web Tokens for secure user authentication
- Bcrypt: Hashing library for password encryption
- Cors: Middleware for enabling CORS (Cross-Origin Resource Sharing)

## Contributors

- [Al-Amin Hossain]

Feel free to contribute and enhance the server-side functionality of this sports management app!

---

Happy coding! 🚀