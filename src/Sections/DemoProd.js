import React from "react";
// import bose from "../Images/Products/Bose q.png";
import Stars from "../Images/Products/starts.svg";
import Product_data from "../Product_data/Prodect_data";

const DemoProd = () => {
  return (
    <>
      <div className="demo-prod">
        <div className="container">
          <div className="demo-prod-main">
            {Product_data.map((eml) => {
              const { brand, description, price, mark_price, img } = eml;
              return (
                <>
                  <div className="demo-prod-flex">
                    <div className="demo-prod-img">
                      <img src={img} alt="" />
                    </div>
                    <div className="demo-prod-content">
                      <h3>{brand}</h3>
                      <p>{description}</p>
                      <div className="demo-prod-starts">
                        <img src={Stars} alt="" />
                        <p>
                          ₹ {price} &nbsp; &nbsp; <span>₹ {mark_price}</span>
                        </p>
                      </div>
                      <button>Add To Cart</button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoProd;
