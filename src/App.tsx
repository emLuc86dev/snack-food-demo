import React from "react";

import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="site">
        <Header />
        <Article />
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
