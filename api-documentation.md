# 📘 Product Feedback API Documentation

Base URL: `https://REPLACE-THIS-WITH-YOUR-DEPLOYED-URL.onrender.com`

## Overview

| Resource      | Method | Endpoint                     | Description                            |
| ------------- | ------ | ---------------------------- | -------------------------------------- |
| `suggestions` | GET    | /get-all-suggestions         | Gets all suggestions from the database |
| `suggestions` | GET    | /get-suggestions-by-category | Gets all suggestions by category       |
| `suggestions` | POST   | /add-one-suggestion          | Adds new suggestions to database       |

---

### 🔹 GET `/get-all-suggestions`

**Description:** Gets all suggestions from the database

**Example Response:**

```
[
  {
    "id": 1,
    "title": "Add profile picture",
    "category": "Feature",
    "detail": "Allow users to upload a profile pic to personalize their account."
  },
  {
    "id": 2,
    "title": "Add search bar",
    "category": "Feature",
    "detail": "Allow users to search feedback by keyword."
  },
  {
    "id": 3,
    "title": "Add color themes",
    "category": "UI",
    "detail": "Allow users to personalize their account with different color themes."
  }
]
```

---

### 🔹 GET `/get-suggestions-by-category/:category`

**Description:** Gets all suggestions by category

**Example Response:**

```
[
  {
    "id": 3,
    "title": "Add color themes",
    "category": "UI",
    "detail": "Allow users to personalize their account with different color themes."
  }
]
```

---

### 🔹 POST `/add-one-suggestion`

**Description:** Adds new suggestions to database

**Example Request Body:**

```
{
  "title": "Add dark mode",
  "category": "UI",
  "detail": "Allow users to switch between light and dark mode."
}
```

**Example Response:**

```
Success! Suggestion has been added.
```

---
