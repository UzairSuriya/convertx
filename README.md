# 💱 ConvertX - Real-Time Currency Converter

A clean, responsive, and lightweight web application that allows users to convert currency exchange rates in real-time. Built using vanilla HTML5, CSS3, and modern asynchronous JavaScript using the Fetch API.

## 🚀 Features

* **Real-Time Exchange Rates:** Fetches live conversion data using a keyless, high-reliability REST API.
* **Dynamic Flag Updates:** Automatically updates country flag icons when selecting different currencies.
* **Global Currency Support:** Supports global currencies including USD, EUR, PKR, INR, GBP, and AED.
* **Input Validation:** Automatically handles invalid inputs, empty strings, and negative values.
* **Fully Responsive:** Styled using custom CSS variables and Flexbox for mobile and desktop views.

## 🛠️ Tech Stack

* **HTML5:** Semantic document markup.
* **CSS3:** Custom properties (variables), Flexbox layout, and responsive design.
* **JavaScript (ES6+):** Async/await, DOM manipulation, and `fetch()` API calls.
* **APIs Used:** 
  * [All Rates Today Currency API](https://allratestoday.com) for conversion data.
  * [Flags API](https://flagsapi.com/) for country flag icons.

## 📖 How to Use

1. Select your **From** and **To** currencies using the country dropdowns.
2. Enter the **Amount** you want to convert in the input field.
3. Click **Get Exchange Rate**:
   * The app fetches the live conversion rate from the API.
   * Dynamic country flags update instantly for both selections.
   * The converted total displays directly below the form.
4. Your conversion result renders on-screen in real time!

## 📁 File Structure

```text
currency-converter/
├── index.html      # Main HTML structure and UI layout
├── style.css       # Custom styles, theme variables, and responsive layout
├── codes.js        # Currency-to-country code dictionary for flags
├── script.js       # Core application logic, event handlers, and API fetching
└── README.md       # Project documentation