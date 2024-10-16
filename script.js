const conversionRates = {
    USD: { USD: 1, EUR: 0.85, GBP: 0.75, JPY: 110, AUD: 1.35, CAD: 1.25, PKR: 280 },
    EUR: { USD: 1.18, EUR: 1, GBP: 0.88, JPY: 129.53, AUD: 1.58, CAD: 1.47, PKR: 330 },
    GBP: { USD: 1.34, EUR: 1.14, GBP: 1, JPY: 147.5, AUD: 1.79, CAD: 1.67, PKR: 370 },
    JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0068, JPY: 1, AUD: 0.012, CAD: 0.011, PKR: 2.55 },
    AUD: { USD: 0.74, EUR: 0.63, GBP: 0.56, JPY: 83.92, AUD: 1, CAD: 0.93, PKR: 207 },
    CAD: { USD: 0.80, EUR: 0.68, GBP: 0.60, JPY: 90.29, AUD: 1.07, CAD: 1, PKR: 225 },
    PKR: { USD: 0.0036, EUR: 0.003, GBP: 0.0027, JPY: 0.39, AUD: 0.0048, CAD: 0.0044, PKR: 1 }
};

// Function to perform the conversion (attached to the button's onclick)
function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    // Validation to check if the amount is valid
    if (amount === "" || isNaN(amount)) {
        alert("Please enter a valid amount");
        return;
    }

    // Get the conversion rate
    const rate = conversionRates[fromCurrency][toCurrency];
    const result = amount * rate;

    // Display the result
    document.getElementById("result").value = result.toFixed(2);
}
