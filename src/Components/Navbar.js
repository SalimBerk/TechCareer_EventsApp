import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <span className="navbar-item-logo">Evento</span>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/PastEvents">
              Past Events
            </Link>
            <Link className="navbar-item" to="/About">
              About
            </Link>
            <Link className="navbar-item" to="/Contact">
              Contact
            </Link>
          </div>
        </div>
        <div className="navbar-item has-dropdown is-hoverable">
          <div className="navbar-dropdown">
            <a className="navbar-item">Home</a>
            <a className="navbar-item">Events</a>
            <a className="navbar-item">About</a>
            <a className="navbar-item">Contact</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
