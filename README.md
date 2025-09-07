# Currency Converter App

Interact with the app [here](https://currency-converter-app-v2-bo.vercel.app/)

### Project Description
The Currency Converter App is a React-based web application that enables users to easily convert between global currencies using real-time exchange rates.
It is a project that demonstrate skills in modern frontend development, API integration, and responsive UI design.

### The app features:
- A responsive navigation bar with a custom turquoise logo and hamburger menu.
- Dynamic currency dropdowns populated with live currency codes from the ExchangeRate API.
- Conversion logic that calculates accurate exchange results instantly.
- TailwindCSS for a clean and consistent user interface.

### How to Install & Run the Project
1. Clone the repository
    ```bash
    git clone https://github.com/Tech-it-with-Billy/currency-converter-app-v2.git
    cd currency-converter


2. Install dependencies
    ```bash
    npm install

3. Set up environment variables

4. Create a `.env` file in the root directory

5. Add your ExchangeRate API key:
    ```bash
    VITE_API_KEY=your_api_key_here

6. Run the development server
    ```bash
    npm run dev

7. Open the app in your browser:
    `http://localhost:5173`

### Features

- Convert between any two supported currencies with live exchange rates
- Currency dropdowns populated dynamically from the API
- Responsive UI styled with TailwindCSS
- Hamburger menu navigation visible on all screen sizes
- Custom turquoise logo branding
- Fast build & hot reload with Vite

### Tech Stack Used
- React – Frontend library
- Vite – Build tool & dev server
- TailwindCSS – Utility-first CSS framework
- ExchangeRate API – Provides live currency rates
- Lucide-react – For icons (hamburger menu)

### Project Structure
    ```bash
    currency-converter/
    │── public/            
    │── src/
    │   ├── components/ 
    │   │   ├── Navigation.jsx
    │   │   ├── LandingPage.jsx
    │   │   ├── Converter.jsx
    │   │   ├── CurrencyDropdown.jsx
    │   │   ├── CurrencyCodes.jsx
    │   │   └── Calculator.jsx
    │   ├── img/   
    │   ├── App.jsx  
    │   ├── index.css   
    │   └── main.jsx  
    │── .env   
    │── package.json
    │── vite.config.js
    └── README.md


### Future Improvements
- Add offline support with cached exchange rates
- Show historical charts of currency fluctuations
- Multi-language support for global users
- Add unit & integration tests for better reliability

### Limitations / Known Issues
- API free tier may have limited requests per day
- Requires an internet connection to fetch live rates
- No user authentication / personalization yet
- Limited error handling in extreme network failures