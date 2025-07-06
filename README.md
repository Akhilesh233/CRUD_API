# CRUD_API

A simple Express.js REST API for managing users with in-memory storage.

## Features

- Create, Read, Update, and Delete (CRUD) operations for users
- Uses UUIDs for unique user identification
- In-memory data storage (no database required)
- Example endpoints for GET, POST, PATCH, and DELETE

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm

### Installation

1. Clone the repository or download the source code.
2. Install dependencies:

   ```sh
   npm install

### Running the server

1. Start the server with:

    ```sh
    npm start

The server will run on http://localhost:5000

### API Endpoints

1. GET all users
    ```sh
    GET/users

2. Add a new user
    ```sh
    POST/users

    This is a format of sample body(JSON):
    {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com"
    }

3. Get a user by ID
    ```sh
    GET/users/:id

4. Update a user
    ```sh
    PATCH/users/:id

    The body(JSON):
    Any of firstName, lastName, email

5. Delete a user
    ```sh
    DELETE/users/:id


## Notes

1. All data is stored in memory and will be lost when the server restarts.
2. This project is for learning and demonstration purposes only.

## License

ISC `````