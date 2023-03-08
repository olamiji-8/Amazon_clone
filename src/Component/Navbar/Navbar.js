import React from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Product from "../../Pages/Product.js/Product";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__icon">
        <span>
          <MenuIcon />
        </span>
        <Link to="/Product">
          <span>All</span>
        </Link>
      </div>
      <div className="navbar__text">
        <Link to="/Deals">
          <p className="navbar__text__hover">Today's Deals</p>
        </Link>
        <Link to="/Customer Service">
          <p className="navbar__text__hover">Customer Service</p>
        </Link>
        <Link to="/Gift Card">
          <p className="navbar__text__hover">Gift Cards</p>
        </Link>
        <Link to="/Registry">
          <p className="navbar__text__hover">Registry</p>
        </Link>
        <Link to="/Sell">
          <p className="navbar__text__hover">Sell</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
