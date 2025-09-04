const apiKey = import.meta.env.VITE_API_KEY;

async function CurrencyCodes() {
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`);
        const data = await response.json();

        if (data.result !== "success") {
        console.error("Failed to fetch currency codes");
        return [];
        }

        return data.supported_codes.map(([code, name]) => code);

    } catch (error) {
        console.error("Error fetching currency codes:", error);
        return [];
    }
}

export default CurrencyCodes;


