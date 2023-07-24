import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logos/Main logo for nav.png";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [cartitem, setCartitem] = useState(0);
  setInterval(() => {
    setCartitem(cartitem + 1);
  }, 100000);
  return (
    <>
      <div className="navbar">
        <div className="navbar-main">
          <div className="navbar-content">
            <div className="navbar-logo">
              <img src={Logo} alt="" />
            </div>
            <div className="navbar-links">
              <Link to="/"> Home </Link>
              <Link to="/About">About</Link>
              <Link to="/Contact">Contact</Link>
              <Link to="/Products">Products</Link>
              <Link to="/Blog">Blog</Link>
            </div>
            <div className="navbar-icons">
              <div className="navbar-search-icon">
                <i className="fa-sharp fa-solid fa-magnifying-glass fa-xs"></i>
                <input type="Search" placeholder="Search.." />
              </div>
              <div className="navbar-search-icon-hide ">
                <i className="fa-sharp fa-solid fa-magnifying-glass fa-sm"></i>
              </div>
              <div className="navbar-cart-icon">
                <div className="navbar-cart-shop">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <div className="nav-bar-cart-number">
                    <p>{cartitem}</p>
                  </div>
                </div>
                <div className="navbar-profile-icon">
                  <i className="fa-solid fa-user"></i>
                </div>
                <div
                  className={`navbar-menu-icon ${
                    menu ? "navbar-menu-icon-hide" : ""
                  } `}
                >
                  <i
                    className="fa-solid fa-bars"
                    onClick={() => {
                      setMenu(!menu);
                    }}
                  ></i>
                </div>
                <div
                  className={`navbar-menu-close ${
                    menu ? "navbar-menu-open" : ""
                  } `}
                >
                  <i
                    className="fa-solid fa-xmark"
                    onClick={() => {
                      setMenu(!menu);
                    }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* responsive menu */}

      <div className={`menu-navbar ${menu ? "hide-menu" : ""} `}>
        <div className="menu-container">
          <div className="menu-content">
            <Link
              to="/"
              onClick={() => {
                setMenu(!menu);
              }}
            >
              Home
            </Link>
            <Link
              to="/About"
              onClick={() => {
                setMenu(!menu);
              }}
            >
              About
            </Link>
            <Link
              to="/Contact"
              onClick={() => {
                setMenu(!menu);
              }}
            >
              Contact
            </Link>
            <Link
              to="/Products"
              onClick={() => {
                setMenu(!menu);
              }}
            >
              Products
            </Link>
            <Link
              to="/Blog"
              onClick={() => {
                setMenu(!menu);
              }}
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
