import React, { useState } from "react";
import "../index.css";
import CurrencyDropdown from "./CurrencyDropdown";
import Calculator from "./Calculator";
import Navigation from "./navigation";

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
        <div class="min-h-screen flex flex-col items-center">
            <div class="mt-10">
                <Navigation />
            </div>

            <div class="pt-25">
                <h1 class='p-10'>Currency Converter</h1>
                <form id="converter-form" onSubmit={handleSubmit} class="flex flex-col">
                    <div class="flex flex-row justify-center p-4 gap-5">
                        <div>
                            <label htmlFor="from-currency">From</label>
                            <CurrencyDropdown
                                id="from-currency"
                                selected={fromCurrency}
                                onChange={(e) => setFromCurrency(e.target.value)}
                                className=""
                            />
                        </div>

                        <div>
                            <label htmlFor="to-currency">To</label>
                            <CurrencyDropdown
                                id="to-currency"
                                selected={toCurrency}
                                onChange={(e) => setToCurrency(e.target.value)}
                                className=""
                            />
                        </div>
                    </div>

                    <div class="flex flex-row justify-center p-4 gap-2">
                        <label htmlFor="amount" class="p-4">Amount</label>
                        <input
                            id="amount"
                            type="number"
                            name="amount"
                            placeholder="0000"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-40 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="p-5">
                        <button type="submit" class=" w-40 ">
                            Convert
                        </button>
                    </div>
                </form>

                <Calculator
                    from={fromCurrency}
                    to={toCurrency}
                    amount={amount}
                    trigger={convertTrigger}
                />
            </div>
        </div>
    );
}

export default Converter;
