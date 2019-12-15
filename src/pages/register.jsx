import React from "react";
import Register from "../components/Register";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const register = () => {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Register />
      <Footer />
    </div>
  );
};

export default register;
