import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Link } from "react-router-dom";
import { useFavorites } from "../contexts/Favorites";

function Navbar() {
  const { favorites } = useFavorites(); // gets favorite
  const [isOpen, setIsOpen] = useState(false); // mobile toggle

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm">
      <div className="container">
        {/* title */}
        <Link
          className="navbar-brand fw-bold"
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} // scrolls to top on click
        >
          Pinoy Recipe Finder
        </Link>

        {/* mobile toggle button (three lines)*/}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* navbar links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            {/* home page */}
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact="true"
                to="/"
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" }); // scrolls to top on click
                }}
              >
                Home
              </NavLink>
            </li>

            {/* favorites page */}
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/favorites"
                onClick={() => setIsOpen(false)}
              >
                {/* shows number of favorite recipes */}
                Favorites{" "}
                {favorites.length > 0 && (
                  <span className="badge bg-light text-dark ms-1">
                    {favorites.length}
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
