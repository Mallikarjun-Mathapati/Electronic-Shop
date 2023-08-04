import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Cart/CartStyle.css";
// import Produ from "../../ImagesPro/Bose q.png";
import { ContextState } from "../../Context/Context";
// import CartItems from "./CartItems";

const Cart = ({ setCart }) => {
  const { cartI, setCartI } = useContext(ContextState);
  const [total, setTotal] = useState(0);
  const [CART, setCART] = useState([]);
  useEffect(() => {
    setCART(cartI);
  }, [cartI]);
  useEffect(() => {
    const newTotalPrice = CART?.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotalPrice);
  }, [CART]);

  const RemoveI = (idn) => {
    const Filter = CART.filter((current, id) => {
      return id !== idn;
    });
    setCartI(Filter);
  };
  const Increase = (id) => {
    const Incre = CART.map((index, idd) => {
      return id === idd ? { ...index, quantity: index.quantity + 1 } : index;
    });
    setCART(Incre);
  };
  const Decrease = (id) => {
    const Incre = CART.map((index, idd) => {
      return id === idd ? { ...index, quantity: index.quantity - 1 } : index;
    });
    setCART(Incre);
  };
  return (
    <>
      {/* <div style={{ paddingTop: "5rem" }}></div> */}
      <div className="cart-background-o">
        <div className="cart-aling-cart">
          <div className="cart-flex">
            <div className="cart-heading">
              <h4>SHOPPING CART</h4>
              <i
                className="fa-solid fa-xmark"
                onClick={() => setCart(false)}
              ></i>
            </div>
            {CART.length === 0 && (
              <div className="cart-no-cart">
                <img src={require("../../Images/Logos/cart.png")} alt="" />
                <h5>Cart Is Empty</h5>
                <Link to="/Products" onClick={() => setCart(false)}>
                  <button>Continue To Shopping</button>
                </Link>
              </div>
            )}
            {/* <CartItems />
            <CartItems />
            <CartItems /> */}

            {/* stert */}
            {CART.map((current, id) => {
              const { brand, price, img, quantity } = current;
              return (
                <>
                  <div className="cart-item">
                    <div className="cart-item-flex" key={id}>
                      <div className="cart-item-img">
                        <span>
                          <img src={img} alt="" />
                        </span>
                      </div>
                      <div className="cart-item-detail">
                        <h3>{brand}</h3>
                        <div className="cart-items-qun">
                          <span
                            className="color-button"
                            onClick={() => Decrease(id)}
                          >
                            -
                          </span>
                          <span>{quantity}</span>
                          <span
                            className="color-button"
                            onClick={() => Increase(id)}
                          >
                            +
                          </span>
                          <div className="cart-items-mult">
                            <p>
                              &nbsp; &nbsp; &nbsp;x &nbsp; &nbsp; &nbsp;₹{" "}
                              {price * quantity}
                            </p>
                          </div>
                        </div>
                        <div className="remove-buttons">
                          <button onClick={() => RemoveI(id)}>Remove</button>
                          <button>Wishlist</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}

            {/* end */}
            {CART.length !== 0 && (
              <div className="subtotal-footer">
                <div className="subtotal-flex">
                  <h3>SubTotal:</h3>

                  <h4>
                    {" "}
                    ₹ {total}
                    {/* {CART.map((current, idd) => current.price).reduce(
                      (total, value) => total + value,
                      0
                    )} */}
                  </h4>
                  <button>Checkout</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
