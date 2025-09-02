import React, { useState, useEffect } from "react";
import CurrencyCodes from "./CurrencyCodes";

const CurrencyDropdown = ({ selected, onChange, id }) => {
    const [codes, setCodes] = useState([]);

    useEffect(() => {
        async function fetchCodes() {
        const result = await CurrencyCodes();
        setCodes(result);
        }
        fetchCodes();
    }, []);

    return (
        <select 
            id={id} 
            value={selected} 
            onChange={onChange}
            className="w-40 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
        <option value="">Select</option>
        {codes.map((code) => (
            <option key={code} value={code}>
            {code}
            </option>
        ))}
        </select>
    );
};

export default CurrencyDropdown;
