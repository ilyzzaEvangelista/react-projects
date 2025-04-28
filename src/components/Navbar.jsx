import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const linkStyle = {
        color: "white",
        textDecoration: "none",
        marginRight: "1rem",
    };

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
    };

    const navStyle = {
        padding: "1rem",
        background: "linear-gradient(135deg, #90CAF9, #F48FB1)",
        color: "white",
        
    };

    return (
        <nav style={navStyle}>
            <NavLink to="/" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}>
                Home
            </NavLink>
            <NavLink to="/about" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}>
                About
            </NavLink>
            <NavLink to="/contact" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}>
                Contact
            </NavLink>
        </nav>
    );
}

export default Navbar;