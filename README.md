# Simple CRUD user app

This app uses a MERN stack (Mongodb, Express, React, Node.js)

## Requirements

Make sure you have mongodb running locally

## Available Scripts

In the project root directory you can run:

### `yarn development`

Run the app in development mode.\
Open and test the server with you prefered rest client [http://localhost:3000](http://localhost:3000)

## API endpoints for user CRUD

| Operation     | Endpoint           | HTTP Method |
| ------------- | ------------------ | ----------- |
| Create a user | /api/users         | POST        |
| Update a user | /api/users/:userId | PUT         |
| List users    | /api/users         | GET         |
| Get user      | /api/users/:userId | GET         |
| Delete user   | /api/users/:userId | DELETE      |
| User sign-in  | /auth/signin       | POST        |
| User sign-out | /auth/signout      | GET         |

## TODO

- Create a docker image that setup all the project dependencies and run It using docker
