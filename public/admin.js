async function loadOrders() {

    const response = await fetch("/api/orders");

    const orders = await response.json();

    const container = document.getElementById("orders");

    container.innerHTML = "";

    orders.forEach(order => {

        container.innerHTML += `
            <div class="product">

                <h3>🧾 Order #${order.id}</h3>

                <p>
                    <strong>Customer:</strong>
                    ${order.customer_name}
                </p>

                <p>
                    <strong>Email:</strong>
                    ${order.customer_email}
                </p>

                <p>
                    <strong>Address:</strong>
                    ${order.customer_address}
                </p>

                <p>
                    <strong>Product:</strong>
                    ${order.product_name}
                </p>

                <p>
                    <strong>Quantity:</strong>
                    ${order.quantity}
                </p>

                <p>
                    <strong>Price:</strong>
                    ₹${order.price}
                </p>

                <p>
                    <strong>Total:</strong>
                    ₹${order.total}
                </p>

                <p>
                    <strong>Date:</strong>
                    ${new Date(order.created_at).toLocaleString()}
                </p>

            </div>
        `;
    });
}

loadOrders();