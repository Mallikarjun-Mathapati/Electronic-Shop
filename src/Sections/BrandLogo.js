import React from "react";
import Boat from "../Images/Brand Logos/boat 1.png";
import Jbl from "../Images/Brand Logos/jbl 1.png";
import Bose from "../Images/Brand Logos/Bose 1.png";
import OneP from "../Images/Brand Logos/OnePlus-Logo 1.png";
import Sony from "../Images/Brand Logos/sony 1.png";

const BrandLogo = () => {
  return (
    <>
      <div className="brand-section">
        <div className="container">
          {/* <div className="brand-section-content"> */}
          <div className="brand-section-logos-grid">
            <div className="brand-section-logos-1">
              <img src={Boat} alt="" />
            </div>
            <div className="brand-section-logos-2">
              <img src={Jbl} alt="" />
            </div>
            <div className="brand-section-logos-3">
              <img src={OneP} alt="" />
            </div>
            <div className="brand-section-logos-4">
              <img src={Sony} alt="" />
            </div>
            <div className="brand-section-logos-5">
              <img src={Bose} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default BrandLogo;
