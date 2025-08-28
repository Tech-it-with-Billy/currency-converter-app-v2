import React, { useState, useEffect } from "react";
import CurrencyCodes from "./CurrencyCodes";

const CurrencyDropdown = () => {
    const [codes, setCodes] = useState([]);

    useEffect(() => {
        async function fetchCodes() {
        const result = await CurrencyCodes();
        setCodes(result);
        }

        fetchCodes();
    }, []);

    return (
        <select>
        {codes.map(code => (
            <option className="dropdown-currency" key={code} value={code}>{code}</option>
        ))}
        </select>
    );
};

export default CurrencyDropdown;
