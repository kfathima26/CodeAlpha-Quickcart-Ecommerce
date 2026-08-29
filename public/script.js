let cart = [];


// LOAD PRODUCTS FROM BACKEND
async function loadProducts() {

    const response = await fetch("/api/products");

    const products = await response.json();

    window.allProducts = products;

    displayProducts(products);
}


// DISPLAY PRODUCTS
function displayProducts(products) {

    const container = document.getElementById("products");

    container.innerHTML = "";

    products.forEach(product => {

        container.innerHTML += `
            <div class="product">

                <img src="${product.image}" alt="${product.name}">

                <h3>${product.name}</h3>

                <p>₹${product.price}</p>

                <p>${product.description}</p>

                <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">
                    Add to Cart
                </button>

            </div>
        `;
    });
}


// ADD PRODUCT TO CART
function addToCart(id, name, price) {

    const existingProduct = cart.find(product => product.id === id);

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        const product = {
            id: id,
            name: name,
            price: price,
            quantity: 1
        };

        cart.push(product);
    }

    updateCartCount();

    displayCart();
}
// UPDATE CART COUNT
function updateCartCount() {

    let count = 0;

    cart.forEach(product => {
        count += product.quantity;
    });

    document.getElementById("cartCount").innerText = count;
}

// DISPLAY CART
function displayCart() {

    const cartContainer = document.getElementById("cartItems");

    cartContainer.innerHTML = "";

    let total = 0;

    cart.forEach((product, index) => {

        cartContainer.innerHTML += `
            <div>

                <p>
                    <strong>${product.name}</strong>
                </p>

                <p>
                    ₹${product.price} × ${product.quantity}
                </p>

                <button onclick="decreaseQuantity(${index})">
                    −
                </button>

                <span>
                    ${product.quantity}
                </span>

                <button onclick="increaseQuantity(${index})">
                    +
                </button>

                <button onclick="removeFromCart(${index})">
                    Remove
                </button>

            </div>
        `;

        total += Number(product.price) * product.quantity;
    });

    document.getElementById("cartTotal").innerText = total;
}
function increaseQuantity(index) {

    cart[index].quantity++;

    updateCartCount();

    displayCart();
}
function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);
    }

    updateCartCount();

    displayCart();
}
// REMOVE PRODUCT FROM CART
function removeFromCart(index) {

    cart.splice(index, 1);

    updateCartCount();

    displayCart();
}


// SHOW CART
function showCart() {

    document.getElementById("cart").scrollIntoView();

}


// SEARCH PRODUCTS
function searchProducts() {

    const searchText = document
        .getElementById("search")
        .value
        .toLowerCase();

    const filteredProducts = window.allProducts.filter(product =>
        product.name.toLowerCase().includes(searchText)
    );

    displayProducts(filteredProducts);
}

function goToCheckout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.href = "checkout.html";
}
// START THE STORE
loadProducts();