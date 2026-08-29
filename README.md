# Quickcart🛍️ — E-Commerce Store

A beginner-friendly full-stack e-commerce web application developed as part of my **CodeAlpha internship**.

The project allows users to browse products, search products, add products to a cart, complete checkout, and place orders. An admin dashboard allows viewing customer orders and their purchased products.

## ✨ Features

* 🛍️ Product listing
* 🔎 Product search
* 🛒 Add to cart
* ➕ Multiple products and quantities
* ❌ Remove products from cart
* 💰 Automatic cart total
* 📝 Checkout form
* 📦 Order placement
* 🗄️ MySQL database
* 👨‍💻 Admin dashboard
* 📋 Customer and order details
* 🔗 REST API using Express.js

## 🛠️ Technologies Used

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MySQL

### Tools

* Visual Studio Code
* Git
* GitHub

## 📁 Project Structure



ecommerce-store/
│
├── database/
│   └── ecommerce.sql
│
├── node_modules/
│
├── public/
│   ├── admin.html
│   ├── admin.js
│   ├── checkout.html
│   ├── checkout.js
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   ├── success.html
│   └── success.js
│
├── .gitignore
├── .package-lock.json
├── launch.json
├── package.json
├── package-lock.json
├── README.md
└── server.js

## ⚙️ How to Run

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
```

### 2. Open the project

```bash
cd CodeAlpha-Quickcart-Ecommerce
```

### 3. Install dependencies

```bash
npm install
```

### 4. Set up MySQL

Create a MySQL database named:

```sql
CREATE DATABASE ecommerce;
```

Import the SQL file from:

```text
database/ecommerce.sql
```

### 5. Configure MySQL

Update the MySQL connection details in `server.js` if required:

```javascript
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "YOUR_PASSWORD",
    database: "ecommerce"
});
```

### 6. Start the server

```bash
node server.js
```

The application will run at:

```text
http://localhost:3000
```

## 🧑‍💻 Admin Dashboard

The admin dashboard can be accessed at:

```text
http://localhost:3000/admin.html
```

It displays customer orders, purchased products, quantities, prices, totals, and order dates.

## 🎯 Learning Outcomes

Through this project, I practiced:

* Frontend development
* JavaScript DOM manipulation
* Fetch API
* REST API development
* Express.js routing
* MySQL database operations
* Connecting frontend, backend, and database
* Git and GitHub
* Basic e-commerce workflow

## 🚀 Future Improvements

Possible future improvements include:

* User authentication
* Product categories
* Product quantity controls
* Payment gateway integration
* Order status tracking
* Secure admin authentication
* Responsive mobile design
* Product management from the admin dashboard

## 👩‍💻 Internship Project

Developed as part of my **CodeAlpha Full Stack Development Internship**.
