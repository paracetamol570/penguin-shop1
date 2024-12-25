let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    displayCart();
}

function displayCart() {
    const cartDiv = document.getElementById("cart");
    if (cart.length === 0) {
        cartDiv.innerHTML = "<p>Ваша корзина пуста.</p>";
    } else {
        let cartContent = "<ul>";
        let total = 0;
        cart.forEach(item => {
            cartContent += `<li>${item.productName} - ${item.price} ₽</li>`;
            total += item.price;
        });
        cartContent += `</ul><p><strong>Итого: ${total} ₽</strong></p>`;
        cartDiv.innerHTML = cartContent;
    }
}

function checkout() {
    if (cart.length === 0) {
        alert("Ваша корзина пуста. Добавьте товары в корзину перед оформлением заказа.");
    } else {
        alert("Ваш заказ оформлен! Спасибо за покупку.");
        cart = []; // Очищаем корзину после оформления
        displayCart();
    }
}
