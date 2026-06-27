let inputCelsius = Number(prompt("Enter the temperature in 'Celsius':"));
let inputFahrenheit = Number(prompt("Enter the temperature in 'Fahrenheit':"));
function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function formatTemperature(value, unit) {
    return `${value}°${unit}`;
}

let convertedToFahrenheit = celsiusToFahrenheit(inputCelsius);
let convertedToCelsius = fahrenheitToCelsius(inputFahrenheit);

console.log(
    `${inputCelsius}°C is equal to ` + 
    formatTemperature(convertedToFahrenheit, "F")
);

console.log(
    `${inputFahrenheit}°F is equal to ` + 
    formatTemperature(convertedToCelsius, "C")
);