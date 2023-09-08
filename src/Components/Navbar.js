import React, { useState } from "react";
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
              Anasayfa
            </Link>
            <Link className="navbar-item" to="/PastEvents">
              Geçmiş Etkinlikler
            </Link>
            <Link className="navbar-item" to="/About">
              Hakkımızda
            </Link>
          </div>
        </div>
        <div className="navbar-item ">
          <div className="navbar-dropdown">
            <Link className="navbar-item" to="/">
              Anasayfa
            </Link>
            <Link className="navbar-item" to="/PastEvents">
              Geçmiş Etkinlikler
            </Link>
            <Link className="navbar-item" to="/About">
              Hakkımızda
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
