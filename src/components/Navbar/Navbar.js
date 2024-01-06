import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logoIcon from "../../assets/images/logo.png";
import React, { useState, useEffect } from 'react';

function Navbar() {
    return (
        <div className="navbar_wrapper">
            <ul className="nav_items_wrapper">
                <li className="navbar_item">
                    <NavLink to="/" exact>
                        <p className="navbar_text">home</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        <p className="navbar_text">about us</p>
                    </NavLink>
                </li>
                <li>
                    <img className="nav_icon" src={logoIcon} alt="Home" />
                </li>
                <li>
                    <NavLink to="/reserve">
                        <p className="navbar_text">reserve a trip</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/companies">
                        <p className="navbar_text">companies</p>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;