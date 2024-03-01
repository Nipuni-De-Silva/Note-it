# Note-it Backend

This is the backend for the Note Application. It provides APIs for creating, reading, updating, and deleting notes (CRUD).

Clone the repository:  `git clone https://github.com/Nipuni-De-Silva/Note-it.git`

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm
- MongoDB

### Installing

1. Navigate into the directory: `cd backend`
3. Install the dependencies: `npm install`
4. Start the server: `npm start`

## API Endpoints

- `GET /api/notes`: Get all notes
- `GET /api/notes/:id`: Get a single note by ID
- `POST /api/notes`: Create a new note
- `PUT /api/notes/:id`: Update a note by ID
- `DELETE /api/notes/:id`: Delete a note by ID

## Running the tests

Run `npm test` to execute the unit tests.

## Built With

- [Node.js](https://nodejs.org/) - The runtime environment
- [Express.js](https://expressjs.com/) - The web framework used
- [MongoDB](https://www.mongodb.com/) - The database used


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
