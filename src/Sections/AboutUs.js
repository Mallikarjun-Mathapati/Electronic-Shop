import React from "react";
import AboutImg from "../Images/About me/HomePage About.png";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div className="about-home">
        <div className="container">
          <div className="about-home-content">
            <div className="about-home-img">
              <img src={AboutImg} alt="" />
            </div>
            <div className="about-home-text">
              <div className="about-home-text-h4">
                <h4>About Products</h4>
              </div>
              <h1>Branded And Good Quality Products</h1>
              <p>
                Welcome to our website, where you'll find an extensive
                collection of branded and good-quality products. We take pride
                in offering a curated selection of items that meet the highest
                standards of craftsmanship, reliability, and customer
                satisfaction. Here's what sets our website apart:
              </p>
              <div className="about-home-content-p">
                <p>
                  <span>Unparalleled Product Selection:</span> Our website
                  boasts a vast array of branded products across various
                  categories, ensuring that you'll find exactly what you're
                  looking for. From electronics and fashion to home appliances
                  and beauty essentials, we have carefully handpicked items
                </p>
                <p>
                  <span>Trusted Brands Only:</span> We understand the importance
                  of trust when it comes to shopping for quality products.
                  That's why we exclusively feature products from trusted and
                  well-established brands.
                </p>
                <p>
                  <span>Superior Quality Assurance:</span> We have a rigorous
                  quality assurance process to ensure that every product we
                  offer meets our strict standards. Our team meticulously
                  evaluates each item for its quality, durability, and adherence
                  to industry benchmarks.
                </p>
              </div>
              <div className="about-home-text-a">
                <Link to="/About">Learn More.....</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
