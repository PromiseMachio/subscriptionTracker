# 🛠️ Backend

**Path:** `/backend`

### Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JSON Web Tokens (JWT)
* ACJET
* Nodemon
* Dotenv

### Features

* User authentication 
* Middleware (For authentication)
* Subscription creation & cancellation
* CRUD
* Endpoints

### Install Dependencies

```
cd subscriptionTracker
npx express-gebnerator --no-view --git ./
```

### Environment Variables

Create a `.env` file:

```
PORT=5000
MONGODB_URI=your-mongodb-connection
JWT_SECRET=your-secret
JWT_EXPIRES_IN=xxx 
ARCJET_KEY=xxx
ARCJET_ENVY=xxx
NODE_ENV=xxx
```

### Run the Backend

```
npm run dev
```

---

---

### Screenshots
#### Authentication

<img width="1024" height="768" alt="image" src="https://github.com/user-attachments/assets/5a0f134f-8a2f-4061-8bf3-e8ea520a755d" />

This is to showcase the sign up 

<img width="1024" height="768" alt="image" src="https://github.com/user-attachments/assets/2788c711-8bf9-4aa4-a06b-ee3c6604dc31" />

This is to showcase sign in

#### Authorization
This authorizes shows who to see the users through token generation and arcjet
<img width="1024" height="768" alt="image" src="https://github.com/user-attachments/assets/e8e43ef0-3366-48f7-b0c6-6fba43333538" />

When trying to access without authorization
<img width="712" height="292" alt="image" src="https://github.com/user-attachments/assets/269cb557-022c-4ff8-ab40-2e4be5dc8e0e" />

