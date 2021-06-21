import React from "react";
import { Link } from "react-router-dom";
import { FaFingerprint, FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <FaFingerprint />
          LEVISH
        </Link>

        {/* must be functional */}
        <div className="menu-icon">
          <FaBars />
        </div>

        <ul className="nav-menu active">
          <li className="nav-items">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/" className="nav-links">
              Service
            </Link>
          </li>

          <li className="nav-items">
            <Link to="/" className="nav-links">
              Products
            </Link>
          </li>

          <li className="nav-items">
            <button>Sign Up</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
