# Realtime Chat App with MERN Stack (Backend)

## Introduction
This repository contains the backend part of a Realtime Chat Application built using the MERN stack. It was developed as a learning project to understand React and the associated technologies. The frontend repository can be found [here](https://github.com/NagabalajiKN/chat-app-client).

## Features
- **JWT Authentication**
- **One-on-One Private Chat**: Chat privately with other users.
- **Room Chat**: Create rooms and start conversations with a specific group of users.
- **Real-Time Updates**: Receive real-time updates for conversation messages, user online/offline status, read/unread status, user join/leave notifications, etc.
- **Responsive Web Design (RWD)**: Supports different themes with light and dark modes.

## Technologies
- **Database**: MongoDB
- **Backend**: Express.js & Node.js
- **Frontend**: React.js (with styled-components)
- **Real-Time Messaging**: Socket.io

## Deployment
- **Database**: MongoDB Atlas




## How to Use

1. **Clone the Repository**
    ```sh
    git clone https://github.com/your-username/chat-app-server.git
    ```

2. **Enter the Directory**
    ```sh
    cd chat-app-server
    ```

3. **Install Dependencies**
    ```sh
    yarn install
    ```

4. **Change .env.example File**
    - Rename the file to `.env`
    - Update the `MONGO_URI` with your MongoDB Atlas connection string. Follow [this video](https://www.youtube.com/watch?v=your-video-link) if you need help with this step.
    - Update `CLIENT_URL` to your local client port (e.g., `http://localhost:3000` if the client runs on port 3000).
    - Generate random tokens for `ACCESS_TOKEN_SECRET`, `REFRESH_TOKEN_SECRET`, and `COOKIE_SIGNATURE`.

5. **Run the App**
    ```sh
    yarn dev
    ```
    Once you see the message "App is listening to port YOUR_PORT DB connection Success", you can start the client side.


