# 🛍️ My Shop — React e-Commerce App

**🚀 Live Demo**: https://andreiKaq.github.io/my-app/  
**📂 Source Code**: https://github.com/andreiKaq/my-app/tree/last-homework

---

## 📌 Project Description

A simple single-page React e-commerce application built with Vite, React Router, and Redux Toolkit.  
The **last-homework** branch includes global toast/error modals with Redux, product categories, GitHub Pages deployment, and responsive design.

---

## 🔍 Features

- Product listing from public API (GET)
- Product detail page
- Add/remove items in a **Redux-powered cart**
- **ToastMessage** and **ErrorModal** via global UI slice
- JWT-based user login (authentication modal)
- **Product categories**: breadcrumbs navigation and filtering
- Responsive layout with Bootstrap (mobile-friendly)
- Deployed to GitHub Pages
- Works on mobile & desktop browsers

---

## 🚧 Tech Stack

- **React** + Vite
- **React Router v6**
- **Redux Toolkit** — cart slice, UI slice
- **React Bootstrap**
- **axios / fetch** — for API requests
- **Sass / PostCSS**
- **LocalStorage** — (optional) cart persistence
- **GitHub Pages** — deployment

---

## 🛠️ Getting Started

```bash
git clone https://github.com/andreiKaq/my-app.git
cd my-app
git checkout last-homework
npm install
npm run dev         # Start dev server at http://localhost:5173
npm run build
npm run preview     # Preview production build
```

---

## 🧭 Project Structure

```
├── public/
│   └── index.html
├── src/
│   ├── api/        # HTTP clients and API handlers
│   ├── components/ # ToastMessage, ErrorModal, Breadcrumbs...
│   ├── effects/    # Custom hooks (e.g. useCart)
│   ├── pages/      # ProductsList, ProductPage, CategoryPage
│   ├── services/   # Redux store and API services
│   ├── App.jsx
│   └── main.jsx
└── README.md
```

---

## ✅ Implemented Features

| Feature                              | Status |
|--------------------------------------|--------|
| Product list with pagination         | ✅     |
| Product detail and card view         | ✅     |
| Add/remove cart with Redux           | ✅     |
| Toast & error modals (Redux UI)      | ✅     |
| Auth modal with setAuthData(jwt)     | ✅     |
| Category breadcrumbs navigation      | ✅     |
| Responsive (desktop + mobile)        | ✅     |
| Deployment with README.md            | ✅     |

---

## ⏳ Time Spent

- Total: approx. **XX hours**
- Key challenges:
  - Quantity logic in cart (immutable updates)
  - Building `useCart` hook from scratch
  - Responsive image rendering in Bootstrap

---

## 🎨 UI Overview

- Based on **React Bootstrap** (customized)
- Theme colors:
  - Primary — `#007bff`
  - Secondary — `#6c757d`
- Mobile UI — cards resize, menu adapts, layout stacks cleanly

---

## 📦 Possible Improvements

If time permits, consider adding:

- Filtering by product category (`/category/:cat`)
- Cart persistence with localStorage
- Related product block (recommendations)
- Unit tests (e.g. for cartSlice or components)

---

## 🏷️ Contact

- **GitHub**: https://github.com/andreiKaq  
- **Email**: your-email@example.com  
- **Stack**: React · Redux · Bootstrap · Vite · REST API

---

Thanks for checking out this project! It reflects everything I've learned so far.  
Feedback is very welcome!