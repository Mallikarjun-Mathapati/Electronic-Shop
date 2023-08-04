import React from "react";
import HeroSection from "../Sections/HeroSection";
import BrandLogo from "../Sections/BrandLogo";
import DemoProd from "../Sections/DemoProd";
import AboutUs from "../Sections/AboutUs";
import Categories from "../Sections/Categories";
import Banner from "../Sections/Banner";
import ContactHome from "../Sections/Contact_home";
import ProductHome from "../Sections/ProductsHome";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <BrandLogo></BrandLogo>
      <DemoProd></DemoProd>
      <AboutUs></AboutUs>
      <ProductHome></ProductHome>
      <Categories></Categories>
      <Banner></Banner>
      <ContactHome></ContactHome>
    </>
  );
};

export default Home;
