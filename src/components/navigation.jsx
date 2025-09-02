import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "./img/logo.png";

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="w-full text-black fixed top-5 left-0 z-50">
            <div className="max-w-8xl mx-auto flex items-center justify-between px-3 py-4">
                {/* Logo + Title */}
                <div className="flex items-center gap-5">
                    <img src={logo} alt="Logo" className="h-18 w-18" />
                    <span className="font-bold text-lg">Currency Converter</span>
                </div>

                <button
                    className="text-black z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Dropdown Menu */}
            <ul
                className={`absolute px-3 right-1 top-20 rounded-lg shadow-md p-4 flex flex-col gap-4 transition-all duration-300 ${
                isOpen ? "flex" : "hidden"
                }`}
            >
                <li>
                    <Link to="/" onClick={() => setIsOpen(false)} className="text-white hover:underline">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/converter" onClick={() => setIsOpen(false)} className="text-white hover:underline">
                        Converter
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
