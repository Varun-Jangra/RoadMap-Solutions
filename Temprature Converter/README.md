# Temperature Converter

A simple and interactive JavaScript program that prompts the user for temperatures in both Celsius and Fahrenheit, performs the mathematical conversions, and outputs the formatted results to the console.

## 🚀 Features

* **Dual Conversion:** Converts Celsius to Fahrenheit and Fahrenheit to Celsius simultaneously.
* **User Interaction:** Utilizes browser `prompt()` windows to dynamically accept user input.
* **Clean Formatting:** Uses a dedicated helper function to cleanly append the correct degree symbols (`°C` / `°F`) to the final output.

## 🛠️ Code Structure

The logic is broken down into modular, reusable components:

1.  **Input Collection:** Uses `Number(prompt())` to gather values from the user and ensure they are treated as numeric types.
2.  **Mathematical Logic:** * Celsius to Fahrenheit formula: $$(C \times \frac{9}{5}) + 32$$
    * Fahrenheit to Celsius formula: $$(F - 32) \times \frac{5}{9}$$
3.  **Formatting:** A dedicated `formatTemperature()` string template literal to keep console logs clean.
4.  **Execution & Output:** Calls the functions and prints the final string to `console.log()`.

## 📖 How to Run

1.  Clone this repository or navigate to your local `Temprature Converter` folder.
2.  Link the JavaScript file to a simple HTML file using a script tag:
    ```html
    <script src="script.js"></script>
    ```
3.  Open the HTML file in any modern web browser.
4.  Respond to the pop-up prompt inputs.
5.  Right-click on the webpage, select **Inspect**, navigate to the **Console** tab, and view your results!

## 📝 Example Output

If you input `0` for Celsius and `32` for Fahrenheit, your browser console will display:
```text
0°C is equal to 32°F
32°F is equal to 0°C