import React from "react";
import Produ from "../../ImagesPro/Bose q.png";

const CartItems = () => {
  return (
    <>
      <div className="cart-item">
        <div className="cart-item-flex">
          <div className="cart-item-img">
            <span>
              <img src={Produ} alt="" />
            </span>
          </div>
          <div className="cart-item-detail">
            <h3>Product Name </h3>
            <div className="cart-items-qun">
              <span className="color-button">-</span>
              <span>5</span>
              <span className="color-button">+</span>
              <div className="cart-items-mult">
                <p>&nbsp; &nbsp; &nbsp;x &nbsp; &nbsp; &nbsp;₹ 29,998</p>
              </div>
            </div>
            <div className="remove-buttons">
              <button>Remove</button>
              <button>Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
