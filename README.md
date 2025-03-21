# Job Board Platform

## Overview

Assignment given by **Zithara.ai**

This is a **Job Board Platform** where companies can post job listings and candidates can apply for jobs. The backend is built using **Node.js** and **MongoDB**, following clean code practices and industry standards.

## Tech Stack

- **Backend:** Node.js (Express)
- **Database:** MongoDB
- **Authentication:** JWT
- **WebSocket:** (To be implemented for real-time updates)

## Features Implemented

### 1️⃣ **User Authentication**

- Users can register as **employers** or **candidates**.
- JWT-based authentication.
- Password hashing with bcrypt.
- Protected routes requiring authentication.

### 2️⃣ **Job Postings API** (For Employers)

- Employers can **create, update, and delete** job postings.
- Everyone can **view** job listings.
- Employers can only modify or delete their own job postings.

### 3️⃣ **Job Applications API** (For Candidates)

- Candidates can apply for jobs.
- Each candidate can apply only once per job.
- Applications include resume links and optional cover letters.

---

## Project Setup

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/vishal-yadav18/backend-assignment.git
cd backend
```

### **2️⃣ Install Dependencies**

```sh
npm install
```

### **3️⃣ Setup Environment Variables**

Create a `.env` file in the root directory and add:

```env
PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret-key>
```

### **4️⃣ Start the Server**

```sh
npm run dev
```

---

## API Endpoints

### **Authentication Routes**

| Method | Endpoint           | Description              |
| ------ | ------------------ | ------------------------ |
| POST   | /api/auth/register | Register a new user      |
| POST   | /api/auth/login    | Login user and get token |

### **Job Postings Routes**

| Method | Endpoint       | Description                  |
| ------ | -------------- | ---------------------------- |
| POST   | /api/jobs      | Create a job (Employer only) |
| GET    | /api/jobs      | Fetch all job listings       |
| GET    | /api/jobs/\:id | Fetch job details by ID      |
| PUT    | /api/jobs/\:id | Update job (Employer only)   |
| DELETE | /api/jobs/\:id | Delete job (Employer only)   |

### **Job Applications Routes**

| Method | Endpoint          | Description                      |
| ------ | ----------------- | -------------------------------- |
| POST   | /api/applications | Apply for a job (Candidate only) |

---

## Next Steps

- **WebSockets:** Implement real-time job updates.
- **Employer Features:** View applications and update their status.

---