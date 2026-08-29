const express = require("express");
const mysql = require("mysql2");

const app = express();


// Middleware
app.use(express.json());
app.use(express.static("public"));


// MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Root",
    database: "ecommerce"
});


// Connect to MySQL
db.connect((err) => {

    if (err) {
        console.log("Database connection failed");
        console.log(err.message);
    } else {
        console.log("MySQL connected successfully");
    }

});


// ===============================
// GET PRODUCTS
// ===============================

app.get("/api/products", (req, res) => {

    const sql = "SELECT * FROM products";

    db.query(sql, (err, results) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.json(results);

    });

});


// ===============================
// PLACE ORDER
// ===============================

app.post("/api/orders", (req, res) => {

    console.log("ORDER ROUTE REACHED");

    const {
        customer_name,
        customer_email,
        customer_address,
        total,
        items
    } = req.body;

    console.log("ORDER ITEMS:", items);


    // Save order
    const orderSql = `
        INSERT INTO orders
        (customer_name, customer_email, customer_address, total)
        VALUES (?, ?, ?, ?)
    `;


    db.query(
        orderSql,
        [
            customer_name,
            customer_email,
            customer_address,
            total
        ],
        (err, result) => {

            if (err) {

                console.log("ORDER ERROR:", err);

                return res.status(500).json({
                    message: "Order failed"
                });

            }


            const orderId = result.insertId;


            // Save order items
            const itemSql = `
                INSERT INTO order_items
                (order_id, product_id, quantity, price)
                VALUES ?
            `;


            const itemsData = items.map(item => [

                orderId,
                item.id,
                item.quantity,
                item.price

            ]);


            db.query(
                itemSql,
                [itemsData],
                (err) => {

                    if (err) {

                        console.log("ORDER ITEMS ERROR:", err);

                        return res.status(500).json({
                            message: "Order items failed"
                        });

                    }


                    res.json({
                        message: "Order placed successfully",
                        orderId: orderId
                    });

                }
            );

        }
    );

});


// ===============================
// GET ALL ORDERS
// ===============================

app.get("/api/orders", (req, res) => {

    const sql = `
        SELECT
            orders.id,
            orders.customer_name,
            orders.customer_email,
            orders.customer_address,
            orders.total,
            orders.created_at,
            products.name AS product_name,
            order_items.quantity,
            order_items.price
        FROM orders
        LEFT JOIN order_items
            ON orders.id = order_items.order_id
        LEFT JOIN products
            ON order_items.product_id = products.id
        ORDER BY orders.id DESC
    `;

    db.query(sql, (err, results) => {

        if (err) {
            console.log(err);

            return res.status(500).json({
                message: "Failed to load orders"
            });
        }

        res.json(results);
    });
});

// ===============================
// START SERVER
// ===============================

app.listen(3000, () => {

    console.log("Server running on port 3000");

});