import React from "react";
import ContactImg from "../Images/Contact/contactus.png";
import Banner from "../Sections/Banner";
import ContactHome from "../Sections/Contact_home";

const Contact = () => {
  return (
    <>
      <div className="padding" style={{ paddingTop: "5rem" }}>
        <div className="contact">
          <div className="contact-heading">
            <h1>CONTACT</h1>
            <p>E-mail: ElectronicShop@example.com</p>
            <p>Call: 0123456789</p>
          </div>
          <div className="container">
            <div className="contact-flex">
              <div className="contact-from">
                <form action="">
                  <div className="contact-form-input">
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name" />
                  </div>
                  <br />
                  <input type="tel" placeholder="Phone number" />
                  <br />
                  <input type="email" placeholder="E-mail" />
                  <br />
                  <input type="address" placeholder="Address" />
                  <br />
                  <textarea placeholder="Message"></textarea>
                </form>
                <button>Submit</button>
              </div>
              <div className="contact-img">
                <img src={ContactImg} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7774.021167894732!2d77.55901799708772!3d13.034997836674034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1689935463055!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowfullscreen="true"
            loading="lazy"
            title="map"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Banner></Banner>
        <ContactHome></ContactHome>
      </div>
    </>
  );
};

export default Contact;
