import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-content">
          <h1>
            <span>UP TO 50% OFF</span> ON EVERY PRODUCTS ORDER NOW
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br />
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to="/Products">
            <button>Shop Now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Banner;

// 8147500500
