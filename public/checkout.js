const cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCheckoutCart() {

    const container = document.getElementById("checkoutItems");

    const totalElement = document.getElementById("checkoutTotal");

    container.innerHTML = "";

    let total = 0;

    cart.forEach(product => {

        const itemTotal = Number(product.price) * product.quantity;

        container.innerHTML += `
            <div class="checkout-item">

                <p>
                    <strong>${product.name}</strong>
                </p>

                <p>
                    ₹${product.price} × ${product.quantity}
                    = ₹${itemTotal}
                </p>

            </div>
        `;

        total += itemTotal;
    });

    totalElement.innerText = total;
}


displayCheckoutCart();


document.getElementById("checkoutForm").addEventListener("submit", async function(event) {

    event.preventDefault();

    const name = document.getElementById("customerName").value;

    const email = document.getElementById("customerEmail").value;

    const address = document.getElementById("customerAddress").value;

    const total = cart.reduce(
        (sum, product) =>
            sum + Number(product.price) * product.quantity,
        0
    );

   const order = {
    customer_name: name,
    customer_email: email,
    customer_address: address,
    total: total,
    items: cart
};

    const response = await fetch("/api/orders", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(order)

    });

    const result = await response.json();
if (response.ok) {

    localStorage.removeItem("cart");

    localStorage.setItem(
        "orderId",
        result.orderId
    );

    window.location.href = "success.html";

}else {

        alert("Order failed. Please try again.");

    }

});