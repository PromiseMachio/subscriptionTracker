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
<img width="1024" height="768" alt="image" src="https://github.com/user-attachments/assets/11bd3c67-c9bb-4e03-9a49-f905676b7fd4" />

So if after generating the token those who are authoritated can access 
<img width="1024" height="768" alt="image" src="https://github.com/user-attachments/assets/cea3d5f0-11c6-44f7-8358-fabcd2a517e7" />
#### Database
<img width="1023" height="671" alt="image" src="https://github.com/user-attachments/assets/63ce6041-c4ea-4081-92ab-48548c5908eb" />

---

# 🙌 Author

**Promise Machio**

GitHub: [https://github.com/PromiseMachio](https://github.com/PromiseMachio)




