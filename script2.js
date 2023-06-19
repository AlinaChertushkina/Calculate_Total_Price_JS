function calculateTotalPrice(quantity = 2, price = 15000000) {
    return quantity * price;
}

let totalPrice = calculateTotalPrice();


document.querySelector('.button').onclick = function () {
    alert(`Стоимость покупки:` + " " + totalPrice.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' }));
}


/*function showMessage() {
    document.getElementById('message').style.display = "block";
}*/
