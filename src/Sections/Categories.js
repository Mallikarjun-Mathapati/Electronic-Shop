import React from "react";
import Bose from "../Images/Categories/Bose.png";
import Acer from "../Images/Categories/Acer.png";
import Rezer from "../Images/Categories/Razer.png";
import Iphone from "../Images/Categories/iphone.png";
import Sony from "../Images/Categories/sony.png";
import Camera from "../Images/Categories/camera.png";

const Categories = () => {
  return (
    <>
      <div className="categories">
        <div className="container">
          <div className="categories-heading">
            <div className="categories-heading-h4">
              <h4>Products</h4>
            </div>
            <h1>categories</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />{" "}
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="categories-grids">
            <div className="categories-grid-1">
              <div className="grid-content">
                <h1>EARPHONES</h1>
                <h4>
                  <span>Up to 45%</span> <br />
                  OFF ON <br /> PRODUCTS
                </h4>
                <button>Shop Now</button>
              </div>
              <div className="grid-img">
                <img src={Bose} alt="" />
              </div>
            </div>
            <div className="categories-grid-2">
              <div className="grid-content-1">
                <h1>laptops</h1>
                <h4>
                  <span>Up to 20% </span> Every Laptops
                </h4>
              </div>
              <div className="grid-img-1">
                {/* <button>Shop Now</button> */}
                <img src={Acer} alt="" />
              </div>
            </div>
            <div className="categories-grid-3">
              <div className="gride-img-2">
                <img src={Rezer} alt="" />
              </div>
              <h1>Mouse</h1>
              <h4>
                <span>Up to 30%</span>
                OFF EVERY <br /> MOUSE
              </h4>
            </div>
          </div>

          <div className="categories-grids-sub">
            <div className="categories-grid-4">
              <h1>SMARTPHONES</h1>
              <div className="smartPhone-img-offer">
                <h4>
                  <span>Up to 25% </span>
                  OFF ON EVERY <br /> SMARTPHONES
                </h4>
                <img src={Iphone} alt="" />
              </div>
              <button>Shop Now</button>
            </div>
            <div className="categories-grid-5">
              <h1>SPEAKERS</h1>
              <h4>
                <span>Up to 40% </span>Every <br /> Speakers
              </h4>
              <div className="categories-speakers-img">
                <img src={Sony} alt="" />
              </div>
            </div>
            <div className="categories-grid-6">
              <div className="categories-camera-img">
                <img src={Camera} alt="" />
              </div>
              <div className="categories-camera-content">
                <h1>CAMERAS</h1>
                <h4>
                  <span>Up to 20%</span> ON <br /> Every CAMERAS
                </h4>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
