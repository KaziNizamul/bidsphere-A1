# Bidsphere (Assignment 1)

Bidsphere-A1 is a comprehensive platform for managing tender bidding processes. This application includes features for tender creation, management, contract awarding, Q&A sections, notifications, and payment gateways, ensuring a seamless experience for both bidders and administrators.

<hr>

Deployment Link: https://bidsphere-a1-frontend.onrender.com
Individual Repo Link: 
- GitHub: https://github.com/KaziNizamul/bidsphere-A1
- GitLab: https://git.cs.dal.ca/nkazi/csci_5709_b00961418/-/tree/main/Assignments/Assignment1?ref_type=heads

<hr>


## Table of Contents

- Project Structure
- Technologies Used
- Setup Instructions
- Payment Features

### Project Structure
The project is divided into two main parts:

```JS
Frontend
Server
```

```bash

Frontend

- src/ - Source code for the frontend application.
- components/ - Reusable components.
- pages/ - Different pages for the application.
- services/ - API services and utilities.
- styles/ - CSS styles and themes.
- App.js - Main app component.
- index.js - Entry point for the application.

Server

- src/ - Source code for the server application.
- controllers/ - Request handlers.
- models/ - Database models.
- routes/ - API routes.
- middlewares/ - Middleware functions.
- server.js - Main server file.
```

### Technologies Used

```md
React
Redux
Ant Design
Axios
Server
Node.js
Express
MongoDB
Mongoose
JWT for authentication
```

### Setup Instructions

Prerequisites

```
Node.js
MongoDB
```
1, Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Navigate to the server directory:

```bash
cd server
```

5. Install dependencies:

```bash
npm install
```

6. Start the server:

```bash
npm start
```

## Payment Features

Payment Gateway Integration: Secure integration with payment gateways to handle transactions.
Transaction Management: Comprehensive management of payment transactions, including tracking and history.
Invoice Generation: Automatic generation of invoices upon successful payment.
Notifications: Real-time notifications for payment status updates.
