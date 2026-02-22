# 🛠️ Backend

**Path:** `/backend`

### Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JSON Web Tokens (JWT)
* Cloudinary (optional for images)
* Nodemon
* Dotenv

### Features

* User authentication (patients)
* Doctor registration & validation
* Appointment creation & cancellation
* Admin endpoints

### Install Dependencies

```
cd backend
npm install
```

### Environment Variables

Create a `.env` file:

```
PORT=4000
MONGODB_URI=your-mongodb-connection
JWT_SECRET=your-secret
CLOUDINARY_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx
```

### Run the Backend

```
npm run server
```

---
