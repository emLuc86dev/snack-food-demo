import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import LogoSVG from "./components/svg/LogoSVG";
import EmailSVG from "./components/svg/EmailSVG";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Article from "./components/Article";

function App() {
  return (
    <>
    <div className="site">
      {/* <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer /> */}
      <Header />
      <Article />
      <Footer />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
