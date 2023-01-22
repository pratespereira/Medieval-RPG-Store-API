# Medieval RPG Store API

**This repository contains a simple Medieval RPG store API built with Node.js and Express.js. It allows players to purchase items such as weapons, armor, and potions to aid them in their adventures. The API features the following endpoints:**

## Products

-   `POST /products`: Allows to add new products to the store's inventory.
-   `GET /products`: Allows to retrieve all products available in the store's inventory.

## Users

-   `POST /users`: Allows to create new user accounts.
-   `GET /users`: Allows to retrieve all user accounts.

## Orders

-   `GET /orders`: Allows to retrieve all orders made by all users.
-   `POST /orders`: Allows to place new orders, protected by JWT authentication.

## Authentication

-   `POST /login`: Allows to login to the API and retrieve a JWT token, protected by login middleware.

## Getting Started

To run the application, you will need to run the node and db services with the command  `docker-compose up -d`. These service will initialize a container named  `medievalstore`  and another named  `medievalstore_db`.

Install the dependencies inside the  `medievalstore`  container with  `npm install`.

## Running the Application
To start the application, you will need to run the following command:  `npm start`

This will start the server and you will be able to access the application at  [http://localhost:3000](http://localhost:3000/).

> **This API serves as a simple example of how to create an medieval RPG store, including CRUD functionality for products, users, and orders.
> It also includes authentication and authorization using JWT tokens. It
> can be used as a starting point for building more complex
> applications.**