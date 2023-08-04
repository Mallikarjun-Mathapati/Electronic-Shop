import React, { useContext } from "react";
import { ContextState } from "../Context/Context";
import Star from "../Images/Products/starts.svg";

const ProductsHome = () => {
  const { data } = useContext(ContextState);
  const { cartI, setCartI } = useContext(ContextState);
  const AddTocart = (e) => {
    setCartI([...cartI, { ...e, quantity: 1 }]);
  };
  return (
    <>
      <div className="products">
        <div className="productshome-heading">
          <p>New Products</p>
          <h3>Popular Products </h3>
        </div>
        <div className="container">
          <div className="product-grid">
            {data.slice(0, 9).map((eml, id) => {
              const { brand, description, price, mark_price, img } = eml;
              return (
                <div className="product-grid-1" key={id}>
                  <div className="main-product-body">
                    <div className="wishlist-product">
                      <i className="fa-regular fa-heart fa-lg"></i>
                    </div>
                    <div className="product-img1">
                      <img src={img} alt={brand} />
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
                        <div
                          className="product-cart-logo"
                          onClick={() => AddTocart(eml)}
                        >
                          <i className="fa-solid fa-cart-shopping hover"></i>
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
    </>
  );
};

export default ProductsHome;
