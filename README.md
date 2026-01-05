# ✍️ Story Write - Backend API

![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

**Story Write** is a robust backend engine designed for storytellers and writers. It provides a seamless API infrastructure to manage creative content, user profiles, and digital narratives.

---

## 🚀 Features

* **🔐 Secure Authentication:** Implemented using **JWT** and **Bcrypt** for safe user registration and login.
* **📖 Content Management:** Full **CRUD** operations (Create, Read, Update, Delete) for stories.
* **📂 Structured Storage:** Optimized MongoDB schemas for handling story drafts, titles, and metadata.
* **🛡️ Middleware Security:** Includes security headers and CORS configuration to protect your data.
* **⚡ High Performance:** Built on an asynchronous architecture for fast response times.

---

## 🛠️ Tech Stack

* **Language:** Node.js
* **Web Framework:** Express.js
* **Database:** MongoDB (using Mongoose ODM)
* **Auth:** JSON Web Tokens (JWT) & Password Hashing
* **Environment:** Dotenv for configuration management

---

## 💻 Getting Started

Follow these steps to set up the project locally:

Install Dependencies
Bash

npm install

3. Environment Setup

Create a .env file in the root directory and provide your credentials:
Code snippet

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key

4. Run the Application
Bash

# To run in development mode (with nodemon)
npm run dev

# To run in production mode
npm start

🛣️ API Endpoints (Quick Reference)
Category	Method	Endpoint	Description
Auth	POST	/api/auth/register	Create a new user account
Auth	POST	/api/auth/login	Login and receive a token
Stories	GET	/api/stories	Fetch all public stories
Stories	POST	/api/stories	Create a new story (Protected)
Stories	PUT	/api/stories/:id	Update an existing story
🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create.

    Fork the Project

    Create your Feature Branch (git checkout -b feature/AmazingFeature)

    Commit your Changes (git commit -m 'Add some AmazingFeature')

    Push to the Branch (git push origin feature/AmazingFeature)

    Open a Pull Request
git clone [https://github.com/prasadidurage/strory_write_be.git](https://github.com/prasadidurage/strory_write_be.git)
Live Backend API: https://strory-write-be.onrender.com



