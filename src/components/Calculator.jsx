import React, { useState, useEffect } from "react";

const apiKey = import.meta.env.VITE_API_KEY;

function Calculator({ from, to, amount, trigger }) {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (trigger && from && to && amount > 0) {
        const fetchConversion = async () => {
            setLoading(true);
            setError(null);
            try {
            const response = await fetch(
                `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`
            );
            const data = await response.json();

            if (data.result !== "success") {
                throw new Error("Failed to fetch conversion rate");
            }

            setResult(data.conversion_result);
            } catch (err) {
            setError(err.message);
            setResult(null);
            } finally {
            setLoading(false);
            }
        };

        fetchConversion();
        }
    }, [trigger, from, to, amount]);

    return (
        <div>
            {loading && <p>Converting...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {result !== null && (
                <p>
                    {amount} {from} = <strong>{result} {to}</strong>
                </p>
            )}
        </div>
    );
}

export default Calculator;
