let nameOfProduct = prompt("Enter the name of the product");
let quantity = Number(prompt("Enter the Quantity of the product"));
let price = Number(prompt("Enter the price of the product"));
let discountPercent = Number(prompt("Enter the Discount"));
let taxPercent = Number(prompt("Enter the Tax"));

function calculateSubtotal(price, quantity){
    return price * quantity;
}

function calculateDiscount(subtotal, discountPercent){
    return (subtotal * discountPercent) / 100;
}

function calculateTax(amountAfterDiscount, taxPercent){
    return (amountAfterDiscount * taxPercent) / 100;
}

function createCartSummary(nameOfProduct, price, quantity, discountPercent, taxPercent){
    const subtotal = calculateSubtotal(price, quantity);
    const discount = calculateDiscount(subtotal, discountPercent);
    
    const amountAfterDiscount = subtotal - discount;
    const tax = calculateTax(amountAfterDiscount, taxPercent);
    
    const finalPrice = amountAfterDiscount + tax;

    return `Product: ${nameOfProduct} | Original Price: $${subtotal} | Discount: -$${discount} | Tax: +$${tax} | Total: $${finalPrice}`;
}

console.log(createCartSummary(nameOfProduct, price, quantity, discountPercent, taxPercent));