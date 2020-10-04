import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary1">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Contact Book
        </Link>
        <div>
          <Link to="/contact/addcontact" className="btn btn-light ml-auto">
            Create Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
