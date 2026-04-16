# 📘 Product Feedback App

Build better products, one suggestion at a time.

## 📌 Project Description & Purpose

A full-stack web application where users can view, filter, and submit suggestions to help improve a product. Users can browse all feedback, filter by category, and add their own suggestions through a form with built-in error messages.

## 🚀 Live Site

🔗 [View the live app here](https://product-feedback-app-babz-2026.netlify.app/)

## 🖼️ Screenshots

**Home Page**

**Add Feedback Page**

## ✨ Features

- 📋 Browse all product feedback suggestions
- 🔍 Filter suggestions by category (UI, UX, Enhancement, Bug, Feature)
- ➕ Submit new feedback via a form
- ⚠️ Error messages display if form fields are left empty
- 📱 Responsive design for mobile and desktop

## 🛠️ Tech Stack

### **Frontend**

|            |                       |
| ---------- | --------------------- |
| Languages  | HTML, CSS, JavaScript |
| Framework  | React + React Router  |
| Deployment | Netlify               |

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://netlify.com)

### **Server/API**

|            |                      |
| ---------- | -------------------- |
| Languages  | JavaScript           |
| Framework  | Express.js (Node.js) |
| Deployment | Render               |

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![NPM](https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://npmjs.com)
[![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://render.com)
[![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://postman.com)

### **Database**

|            |                   |
| ---------- | ----------------- |
| Language   | SQL               |
| Deployment | Neon (PostgreSQL) |

[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Neon](https://img.shields.io/badge/Neon-00E599?style=for-the-badge&logo=neon&logoColor=black)](https://neon.tech)

### **Tools**

[![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com)
[![VS Code](https://img.shields.io/badge/VS_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)](https://code.visualstudio.com)
[![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org)

## 🔹 API Endpoints

| Method | Endpoint                                 | Description                            |
| ------ | ---------------------------------------- | -------------------------------------- |
| `GET`  | `/get-all-suggestions`                   | Gets all suggestions from the database |
| `GET`  | `/get-suggestions-by-category/:category` | Gets suggestions filtered by category  |
| `POST` | `/add-one-suggestion`                    | Adds a new suggestion to the database  |

🔗 Full API documentation: [View here](https://github.com/Babz-G/product-feedback-app/blob/main/api-documentation.md)

## 🗄️ Database Schema

```sql
CREATE TABLE suggestions (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  category VARCHAR NOT NULL,
  detail VARCHAR NOT NULL
);
```

## 💭 Reflections

**What I learned:**
How to build a full-stack application from scratch, including setting up a REST API with Express, connecting it to a PostgreSQL database hosted on Neon, and building a React frontend that fetches and displays real data.

**What I'm proud of:**
Successfully connecting all three layers of the stack together and implementing features like category filtering, form error messages, and responsive design.

**What challenged me:**
Managing the file structure across client and server folders, and understanding how environment variables work when deploying to Render.

**Future ideas:**
🏆 Add upvoting on suggestions
🏆 Add a hamburger menu in mobile view
🏆 Sort suggestions by most/least upvotes and most/least comment
🏆 Edit an existing suggestion
🏆 Delete an existing suggestion
🏆 Add comments to an existing suggestion
🏆 Implement multi-filtering
🏆 Add a light/dark mode toggle
