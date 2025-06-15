# 🏡 Airbnb Clone (Basic Booking App)

A simple full-stack web application that allows users to register, log in, view listings, and book properties for short-term and long-term stays.

---

## 🚀 Features

- User Registration and Login (JWT-based authentication)
- Protected Dashboard (Listings page)
- Property Listings
- Booking Functionality
- RESTful APIs (Authentication, Listings, Bookings)
- Simple frontend with HTML, CSS, JavaScript
- MongoDB for database
- Thunder Client / Postman support for testing APIs

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- HTML, CSS, JavaScript
- Thunder Client or Postman for API testing

---

## 📁 Project Structure

airbnb/
│
├── backend/
│ ├── models/
│ │ ├── User.js
│ │ ├── Listing.js
│ │ └── Booking.js
│ ├── routes/
│ │ ├── auth.js
│ │ ├── listings.js
│ │ └── bookings.js
│ ├── middleware/
│ │ └── authMiddleware.js
│ ├── server.js
│ └── .env
│
├── frontend/
│ ├── login.html
│ ├── register.html
│ ├── listings.html
│ ├── style.css
│ └── script.js
