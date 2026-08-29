CREATE DATABASE ecommerce;

USE ecommerce;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    image VARCHAR(255),
    description TEXT
);

INSERT INTO products
(name, price, image, description)
VALUES
('T-Shirt', 499, '', 'Comfortable cotton T-Shirt'),
('Shoes', 1499, '', 'Comfortable running Shoes'),
('Watch', 999, '', 'Stylish digital Watch'),
('Backpack', 799, '', 'College Backpack');

SELECT * FROM products;