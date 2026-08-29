const orderId = localStorage.getItem("orderId");

document.getElementById("orderId").innerText = orderId;

function continueShopping() {

    localStorage.removeItem("orderId");

    window.location.href = "index.html";
}