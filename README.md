# Currency Converter React App

This is a React-based Currency Converter application. So far, the project includes the core UI components and functionality setup for selecting currencies and entering amounts, excluding the conversion logic.

## Files and Components

### LandingPage.jsx
- Displays the app title and description.  
- Includes a (Get Started) button that navigates to the converter page.

### Converter.jsx
- Contains the currency conversion form.  
- Includes (From) and (To) currency dropdowns and an (Amount) input field.  
- Includes a (Convert) button.  
- Minor improvements suggested: update (label) elements to use (htmlFor) and consider passing props to dropdowns.

### CurrencyDropdown.jsx
- Reusable dropdown component that fetches and displays currency codes.  
- Uses 'CurrencyCodes.jsx' to populate options dynamically.  
- Suggestions: make it a controlled component and handle loading or errors for better React state management.

### CurrencyCodes.jsx
- Async function that calls the ExchangeRate API to fetch supported currency codes.  
- Returns an array of codes for use in dropdowns.  

## Summary of Work Done
- Created basic UI with React components.  
- Integrated API fetching for currency codes.  
- Set up the dropdown menus for selecting currencies.  
- Prepared the app structure for future conversion logic.  
- Will work on  improvements for accessibility, state management, and error handling.  

