let price = Number(prompt("Enter the price"));
let discountPercent = Number(prompt("Enter the Discount Percentage"));
let taxPercent = Number(prompt("Enter the Tax Percentage"));

function calculateDiscount(price, discountPercent){
    return (price * discountPercent) / 100;
}

function calculateTax(priceAfterDiscount, taxPercent){
    return (priceAfterDiscount * taxPercent) / 100;
}

function calculateFinalPrice(price, discountPercent, taxPercent){
    const discount = calculateDiscount(price, discountPercent);
    const priceAfterDiscount = price - discount;
    const tax = calculateTax(priceAfterDiscount, taxPercent);

    return priceAfterDiscount + tax;
}

function createPriceSummary(price, discountPercent, taxPercent){
    const discount = calculateDiscount(price, discountPercent);
    const priceAfterDiscount = price - discount;
    const tax = calculateTax(priceAfterDiscount, taxPercent);
    const finalPrice = calculateFinalPrice(price, discountPercent, taxPercent);

    return{price, discount, tax, finalPrice};
}

console.log(createPriceSummary(price, discountPercent, taxPercent));