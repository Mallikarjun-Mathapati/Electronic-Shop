import React, { useContext } from "react";
// import bose from "../Images/Products/Bose q.png";
import Stars from "../Images/Products/starts.svg";
// import Product_data from "../Product_data/Product_home";
import { ContextState } from "../Context/Context";

const DemoProd = () => {
  const { data } = useContext(ContextState);
  const { cartI, setCartI } = useContext(ContextState);
  const AddTocart = (e) => {
    setCartI([...cartI, { ...e, quantity: 1 }]);
  };
  return (
    <>
      <div className="demo-prod">
        <div className="container">
          <div className="demo-prod-main">
            {data.slice(0, 2).map((eml, id) => {
              const { brand, description, price, mark_price, img } = eml;
              return (
                <>
                  <div className="demo-prod-flex" key={id}>
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
                      <button onClick={() => AddTocart(eml)}>
                        Add To Cart
                      </button>
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
