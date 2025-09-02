import React, { useState } from "react";
import "../index.css";
import CurrencyDropdown from "./CurrencyDropdown";
import Calculator from "./Calculator";

function Converter() {
    const [fromCurrency, setFromCurrency] = useState("");
    const [toCurrency, setToCurrency] = useState("");
    const [amount, setAmount] = useState("");
    const [convertTrigger, setConvertTrigger] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!fromCurrency || !toCurrency || !amount) {
        alert("Please fill in all fields.");
        return;
        }
        setConvertTrigger((prev) => !prev);
    };

    return (
        <div>
            <h1>Currency Converter</h1>
            <form id="converter-form" onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor="from-currency">From</label>
                        <CurrencyDropdown
                            id="from-currency"
                            selected={fromCurrency}
                            onChange={(e) => setFromCurrency(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="to-currency">To</label>
                        <CurrencyDropdown
                            id="to-currency"
                            selected={toCurrency}
                            onChange={(e) => setToCurrency(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="amount">Amount</label>
                    <input
                        id="amount"
                        type="number"
                        name="amount"
                        placeholder="0000"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                <div>
                <button type="submit">Convert</button>
                </div>
            </form>

            <Calculator
                from={fromCurrency}
                to={toCurrency}
                amount={amount}
                trigger={convertTrigger}
            />
        </div>
    );
}

export default Converter;
