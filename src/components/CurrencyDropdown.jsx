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
        <select id={id} value={selected} onChange={onChange}>
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
