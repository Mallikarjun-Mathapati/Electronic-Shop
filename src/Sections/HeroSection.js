import React from "react";
import HeroBg from "../Images/Hero Section/main bg.png";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <div className="hero-section-flex">
            <div className="hero-section-content">
              <h4 id="hero-content-bgcolor">FAVORITE BRANDS</h4>
              <div className="hero-section-content-h1">
                <h1>An exciting place</h1>
                <h1 id="hero-content-bgcolor-1"> for the whole family</h1>
                <h1>to shop.</h1>
              </div>
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Lorem Ipsum used since
                the 1500s isv reproduced below for those interested.
              </p>
              <button>Shop Now</button>
            </div>
            <div className="hero-section-image">
              <img src={HeroBg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
