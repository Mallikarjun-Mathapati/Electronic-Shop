import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact'
import Blog from './Pages/Blog';
import Products from './Pages/Products'

function App() {
  return (
    <>
    <NavBar></NavBar>
    <Routes>
      <Route exact path="/" Component={Home}></Route>
      <Route exact path="/About" Component={About}></Route>
      <Route exact path="/Contact" Component={Contact}></Route>
      <Route exact path="/Blog" Component={Blog}></Route>
      <Route exact path="/Products" Component={Products}></Route>
      <Route path='*' Component={Home}></Route>
    </Routes>
    <Footer></Footer>
      
    </>
  );
}

export default App;
