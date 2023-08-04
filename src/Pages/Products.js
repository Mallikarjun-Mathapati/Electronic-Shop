import React, { useContext } from "react";
// import SonyS from "../Images/Products/Sony speaker.png";
import Star from "../Images/Products/starts.svg";
import ProductData from "../Product_data/Product_home";
import { ContextState } from "../Context/Context";

const Products = () => {
  const { data, setData } = useContext(ContextState);
  const { cartI, setCartI } = useContext(ContextState);
  const FilterClick = (e) => {
    const filter = ProductData.filter((id) => {
      return id.categories === e;
    });
    setData(filter);
  };
  const AddTocart = (e) => {
    setCartI([...cartI, { ...e, quantity: 1 }]);
  };

  return (
    <>
      <div className="padding" style={{ paddingTop: "5rem" }}>
        <div className="products">
          <div className="products-heading">
            <h1>PRODUCTS</h1>
          </div>
          <div className="container">
            <div className="product-filter">
              <div className="filter-heading">
                <h3>Filter</h3>
              </div>
              <div className="product-filter-button">
                <button onClick={() => setData(ProductData)}>All</button>
                <button onClick={() => FilterClick("mouse")}>Mouse</button>
                <button onClick={() => FilterClick("laptop")}>Laptop</button>
                <button onClick={() => FilterClick("keyboard")}>
                  Keyboard
                </button>
                <button onClick={() => FilterClick("speaker")}>Speaker</button>
                <button onClick={() => FilterClick("headphones")}>
                  Headphone
                </button>
                <button onClick={() => FilterClick("earbuds")}>Earbuds</button>
              </div>
            </div>
            <div className="product-grid">
              {data.map((eml, id) => {
                const { brand, description, price, mark_price, img } = eml;
                return (
                  <div className="product-grid-1" key={id}>
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
                          <div
                            className="product-cart-logo"
                            onClick={() => AddTocart(eml)}
                          >
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
