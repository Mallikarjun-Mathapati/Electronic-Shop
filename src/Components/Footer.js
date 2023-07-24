import React from "react";
import Logo from "../Images/Logos/Main logo for nav.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container container2">
          <div className="footer-grid">
            <div className="footer-grid-1">
              <img src={Logo} alt="" />
              <p>
                Welcome to our website, where you'll find an extensive
                collection of branded and good-quality products. We take pride
                in offering a curated selection of items that meet the highest
                standards of craftsmanship, reliability, and customer
                satisfaction. Here's what sets our website apart:
              </p>
            </div>
            <div className="footer-grid-2">
              <h4>Pages</h4>
              <ol>
                <li>Home</li>
                <li>About Us</li>
                <li>Products</li>
                <li>Contact</li>
                <li>Blog</li>
              </ol>
            </div>
            <div className="footer-grid-3">
              <h4>Help</h4>
              <ol>
                <li>Payment</li>
                <li>Shopping</li>
                <li>Cancellation & Refund</li>
                <li>FAQ</li>
              </ol>
            </div>
            <div className="footer-grid-4">
              <h4>Social Media</h4>
              <ol>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>WhatsApp</li>
              </ol>
            </div>
            <div className="footer-grid-5">
              <h4>Address</h4>
              <p>
                Eletronic.Shop Internet Private Limited,0419 Kassulke
                MissionClove Tech Village,Outer Round Road, Wyoming Village,
                Bengaluru, 560054 Karnataka, India
              </p>
              <p>E-mail: ElectronicShop@example.com</p>
              <p>Call: 0123456789</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
