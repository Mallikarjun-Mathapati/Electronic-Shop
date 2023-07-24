import React from "react";

const ContactHome = () => {
  return (
    <>
      <div className="contact-home">
        <div className="container">
          <div className="contact-home-flex">
            <div className="contact-home-heading">
              <h4>Contact</h4>
              <h1>
                Contact Us for those <br />
                interested.
              </h1>
            </div>
            <div className="contact-home-input">
              <div className="contact-home-input-button">
                <input type="email" placeholder="Enter e-mail" />
              </div>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHome;
