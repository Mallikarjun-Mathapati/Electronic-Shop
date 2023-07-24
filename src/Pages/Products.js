import React from "react";
// import SonyS from "../Images/Products/Sony speaker.png";
import Star from "../Images/Products/starts.svg";
import ProductData from "../Product_data/Product_home";

const Products = () => {
  return (
    <>
      <div className="padding" style={{ paddingTop: "5rem" }}>
        <div className="products">
          <div className="products-heading">
            <h1>PRODUCTS</h1>
          </div>
          <div className="container">
            <div className="product-filter"></div>
            <div className="product-grid">
              {ProductData.map((eml) => {
                const { brand, description, price, mark_price, img } = eml;
                return (
                  <div className="product-grid-1">
                    <div className="main-product-body">
                      <div className="wishlist-product">
                        <i className="fa-regular fa-heart fa-lg"></i>
                      </div>
                      <div className="product-img1">
                        <img src={img} alt="Sony" />
                      </div>
                      <div className="product-content">
                        <h1>{brand}</h1>
                        <p>{description}</p>
                        <div className="product-price">
                          <img src={Star} alt="" />
                          <h5>
                            {" "}
                            ₹ {price} &nbsp; &nbsp; <span>₹ {mark_price}</span>
                          </h5>
                          <div className="product-cart-logo">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
