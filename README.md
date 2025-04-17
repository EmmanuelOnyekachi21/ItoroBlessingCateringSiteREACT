# Itoro Blessing Catering Frontend 🍽️

This is the **React.js frontend** of the Itoro Blessing Catering Services web application. It connects to a Django REST API backend and provides an intuitive interface for browsing meals, placing orders, and requesting catering or cooking lessons.

## 💡 Features

- 🌟 User-friendly homepage with hero section and call-to-action
- 🍱 View available meals and daily menu
- 🛒 Add meals to cart and place orders
- 📆 Submit catering service requests
- 🧑‍🍳 Browse cooking recipes
- 📚 Book cooking lessons
- 📩 Contact form to reach the business owner
- 🔄 Real-time UI updates and form validation

## 🛠 Tech Stack

- **Frontend**: React.js (Create React App)
- **Routing**: React Router
- **HTTP Requests**: Axios
- **Styling**: Bootstrap (or Tailwind, depending on future styling decisions)
- **State Management**: React Hooks (useState, useEffect, useContext as needed)

## 📦 Installation

```bash
# Clone this frontend repo
git clone git@github.com:EmmanuelOnyekachi21/ItoroBlessingCateringSiteREACT.git   
cd itoro-blessing-catering-frontend

# Install dependencies
npm install

# Start the development server
npm start
```
Runs on: http://localhost:3000

## Project Structure
```
itoro-blessing-catering-frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/      # Reusable UI components (Navbar, Footer, etc.)
│   ├── pages/           # Pages (Home, Menu, Catering, Contact, etc.)
│   ├── assets/          # Images, icons, etc.
│   ├── App.js
│   └── index.js
```

## 🔗 Backend API
This app communicates with a Django REST API (to be set up in the backend repo). API base URL will be configured in an ```.env``` file.


