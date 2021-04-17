import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar navbar-expand-sm navbar-dark px-sm-5 bg-primaryColor">
      <ul className="navbar-nav align-items-center">
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link text-white font-weight-bold"
            style={{ fontSize: "22px" }}
          >
            Admin
          </Link>
        </li>
      </ul>
      <Link to="/list" className="ml-auto">
        <span className="mr-2">
          <i className="fas fa-cart-plus" />
        </span>
        My Products
      </Link>
    </div>
  );
}
export default Navbar;
