# Activity Booking App API

A REST API backend for a Basic Activity Booking App built with Node.js, Express.js, and MongoDB.

## Features

- User Registration and Authentication
- Activity Listing
- Activity Booking
- Booking History
- JWT-based Authentication
- Input Validation
- Password Hashing

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication

#### Register User
- **POST** `/api/auth/register`
- Body:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "password": "password123"
  }
  ```

#### Login User
- **POST** `/api/auth/login`
- Body:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

### Activities

#### List Activities
- **GET** `/api/activities`
- Public endpoint
- Returns list of all available activities

#### Book Activity
- **POST** `/api/activities/:activityId/book`
- Requires authentication
- Headers: `Authorization: Bearer <token>`

#### Get My Bookings
- **GET** `/api/bookings`
- Requires authentication
- Headers: `Authorization: Bearer <token>`

## Testing

A Postman collection is provided in the `postman` directory for testing the API endpoints.

## Project Structure

```
src/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── middleware/     # Custom middleware
├── models/         # Database models
├── routes/         # API routes
├── utils/          # Utility functions
└── index.js        # Application entry point
``` 