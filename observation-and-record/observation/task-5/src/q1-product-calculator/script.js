const productName = document.getElementById("productName");
const quantity = document.getElementById("quantity");
const price = document.getElementById("price");
const calculateBtn = document.getElementById("calculateBtn");

const displayProduct = document.getElementById("displayProduct");
const displayQuantity = document.getElementById("displayQuantity");
const displayPrice = document.getElementById("displayPrice");
const displayTotal = document.getElementById("displayTotal");
const errorMessage = document.getElementById("errorMessage");

function calculateTotal() {
    const name = productName.value.trim();
    const qty = Number(quantity.value);
    const unitPrice = Number(price.value);

    if (name === "") {
        errorMessage.textContent = "Please enter the product name.";
        return;
    }

    if (!Number.isInteger(qty) || qty <= 0) {
        errorMessage.textContent = "Quantity must be a positive whole number.";
        return;
    }

    if (isNaN(unitPrice) || unitPrice <= 0) {
        errorMessage.textContent = "Price must be greater than zero.";
        return;
    }

    const total = qty * unitPrice;

    displayProduct.textContent = name;
    displayQuantity.textContent = qty;
    displayPrice.textContent = unitPrice.toFixed(2);
    displayTotal.textContent = total.toFixed(2);

    errorMessage.textContent = "";
}

calculateBtn.addEventListener("click", calculateTotal);

quantity.addEventListener("input", calculateTotal);
price.addEventListener("input", calculateTotal);