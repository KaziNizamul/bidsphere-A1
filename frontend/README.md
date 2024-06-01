# Tender Bidding System

**Nizamul Kazi - [kazinizamul@dal.ca]**

**Assignment 1 Link:** 
[GitHub Repository](https://github.com/KaziNizamul/bidsphere-A1/tree/main)
[GitLab Repository](https://git.cs.dal.ca/nkazi/csci_5709_b00961418/-/tree/main/Assignments/Assignment1?ref_type=heads)

Deployed Link: https://bidsphere-a1-frontend.onrender.com

## Project Overview

### Purpose and Goals
The Tender Bidding System aims to streamline the tender bidding process by providing a comprehensive platform for both issuers and bidders. This platform ensures a transparent, efficient, and user-friendly environment where issuers can create and manage tenders while bidders can easily place and manage their bids. Key goals include secure transactions, smooth communication, and effective contract management.

### Target Users
- **Tender Issuers**: Organizations or individuals seeking bids for their projects.
- **Bidders**: Companies or individuals looking to win contracts through the bidding process.

### My Features
- **Q&A Page/Help Desk (To be Implemented)**: A platform for users to ask questions and receive responses.
- **Payment Gateway and Invoice Generation**: Secure payment processing and invoice generation.
- **Notifications and Alerts**: Real-time updates and alerts for tender and bid activities.

## Prerequisites
Ensure the following software is installed on your machine:

```bash
Node.js
pnpm
```

- Installation

Install dependencies using pnpm:

```bash
pnpm install
```

- Running the Development Server

Navigate to the server directory and start the Node.js server:
i.e 

```bash
  ./frontend
```

```bash
pnpm start
```

- Build the Project

Build the project before deploying to the live server:

```bash
pnpm run build
```

- Deployment

Node Backend Deployment on Render

On the Render dashboard, click on the web service and select the project from GitHub that needs to be deployed.
Specify the starting point and click on publish.
Once successfully published, the URL for the backend process will be provided.
React Frontend Deployment on Vercel
React application is deployed on Vercel for simplicity, performance, and developer experience.

Once the code is pushed to GitHub, access it in the Vercel dashboard (after signing in with GitHub).
Import the repository you want to deploy, type the project name, and click on deploy.
The deployed URL will be provided.
Replace the localhost URL in the frontend application with the Render URL.



