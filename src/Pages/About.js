import React from "react";
import AboutUs from "../Sections/AboutUs";
import ContactHome from "../Sections/Contact_home";
import Banner from "../Sections/Banner";

const About = () => {
  return (
    <>
      <div className="about-us-padding" style={{ paddingTop: "5rem" }}>
        <div className="about-us">
          <div className="about-us-heading">
            <h1>ABOUT US</h1>
          </div>
          <div className="container container3">
            <div className="about-us-flex">
              <div className="about-us-text">
                <h4>About Our Company</h4>
                <p>
                  Welcome to our website, where you'll find an extensive
                  collection of branded and good-quality products. We take pride
                  in offering a curated selection of items that meet the highest
                  standards of craftsmanship, reliability, and customer
                  satisfaction. Here's what sets our website apart:
                </p>
                <p>
                  Our branded products not only offer quality but also encompass
                  unique style and brand value. By shopping with us, you align
                  yourself with the ethos and aesthetics of these esteemed
                  brands. Express your personal style and elevate your lifestyle
                  with products that are not only functional but also visually
                  appealing.
                </p>
                <p>
                  We are dedicated to providing a seamless shopping experience
                  and ensuring your utmost satisfaction. Our customer support
                  team is readily available to address any inquiries or concerns
                  you may have. Additionally, we offer hassle-free returns and
                  exchanges, allowing you to shop with peace of mind.
                </p>
                <div className="about-us-flex-card">
                  <div className="about-us-flex-card-1">
                    <h3>200+</h3>
                    <h3>Brands Available </h3>
                  </div>
                  <div className="about-us-flex-card-1">
                    <h3>6000+</h3>
                    <h3>Products</h3>
                  </div>
                  <div className="about-us-flex-card-1">
                    <h3>100%</h3>
                    <h3>Customer Satisfaction </h3>
                  </div>
                </div>
              </div>
              <div className="about-us-vd">
                <iframe
                  src="https://www.youtube.com/embed/v6EjmbMgv80"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <AboutUs></AboutUs>
          <div className="about-us-detail">
            <div className="about-us-detail-width">
              <ol type="1">
                <li>
                  Authenticity and Authorized Dealers: As an authorized dealer
                  of top brands, we guarantee the authenticity of all our
                  products. We source directly from the manufacturers or
                  authorized distributors, ensuring that you receive genuine
                  items that meet the highest quality standards. Say goodbye to
                  counterfeit products and enjoy peace of mind knowing that
                  you're purchasing the real deal.
                </li>
                <li>
                  Product Reviews and Ratings: To help you make informed
                  decisions, we provide comprehensive product reviews and
                  ratings from verified customers. These reviews offer valuable
                  insights into the performance, durability, and overall
                  satisfaction of our products. We encourage our customers to
                  share their experiences, creating a community of trust and
                  transparency.
                </li>
                <li>
                  Sustainable and Ethical Practices: We prioritize
                  sustainability and ethical practices in our product selection.
                  Many of the brands we feature are committed to eco-friendly
                  production methods, responsible sourcing of materials, and
                  fair labor practices. By choosing our branded products, you
                  contribute to a more sustainable and ethical consumption.
                </li>
                <li>
                  Exclusive Collections and Limited Editions: Discover exclusive
                  collections and limited-edition releases available only
                  through our website. We partner with brands to bring you
                  unique and sought-after items that showcase exceptional
                  design, innovation, and craftsmanship. Stay ahead of trends
                  and own truly distinctive pieces.
                </li>
                <li>
                  Personalized Recommendations: We understand that finding the
                  right product can be overwhelming. That's why we offer
                  personalized recommendations based on your preferences and
                  needs. Utilizing advanced algorithms and user data, our
                  website suggests products tailored to your tastes, making your
                  shopping experience efficient and enjoyable.
                </li>
                <li>
                  Secure Payment and Data Protection: Your privacy and security
                  are paramount to us. Our website utilizes the latest
                  encryption technology to safeguard your personal and financial
                  information. We partner with trusted payment gateways,
                  ensuring smooth and secure transactions for a worry-free
                  shopping experience.
                </li>
                <li>
                  Loyalty Rewards Program: Join our loyalty rewards program and
                  unlock exclusive benefits. Earn points on every purchase,
                  enjoy member-only discounts and early access to promotions,
                  and receive special offers tailored to your interests. It's
                  our way of showing appreciation for your continued support.
                </li>
                <li>
                  Stay Updated with Our Newsletter: Subscribe to our newsletter
                  to stay informed about new product arrivals, upcoming sales,
                  and exclusive offers. Be the first to know about the latest
                  trends, product launches, and industry news. Our newsletter
                  keeps you connected to the world of branded and good-quality
                  products.
                </li>
              </ol>
            </div>
          </div>
          <Banner></Banner>
          <ContactHome></ContactHome>
        </div>
      </div>
    </>
  );
};

export default About;
