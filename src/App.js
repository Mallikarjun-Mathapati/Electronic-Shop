import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Products from "./Pages/Products";
import ProductData from "./Product_data/Product_home";
import { ContextState } from "./Context/Context";
import Categories1 from "./Pages/Categories1";

function App() {
  const [cartI, setCartI] = useState([]);
  const [data, setData] = useState(ProductData);
  return (
    <>
      <ContextState.Provider value={{ cartI, setCartI, data, setData }}>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/About" Component={About}></Route>
          <Route exact path="/Contact" Component={Contact}></Route>
          <Route exact path="/Blog" Component={Blog}></Route>
          <Route exact path="/Products" Component={Products}></Route>
          <Route path="/Categories1" Component={Categories1}></Route>
          <Route path="*" Component={Home}></Route>
        </Routes>
        <Footer></Footer>
      </ContextState.Provider>
    </>
  );
}

export default App;
