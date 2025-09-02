// Navigation.jsx
import React from "react";
import logo from "./img/logo.png"

function Navigation() {
    return (
        <nav className="w-full min-w-370 text-black px-6 py-4">
            <div className="flex items-center space-x-3 gap-5">
                <img src={logo} alt="Logo" className="h-16 w-16"/>
                <h3 className="text-xl ">Currency Converter</h3>
            </div>

        </nav>
    );
}

export default Navigation;