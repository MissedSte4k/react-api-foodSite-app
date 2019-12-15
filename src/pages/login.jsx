import React from "react";
import Login from "../components/Login";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const login = () => {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Login />
      <Footer />
    </div>
  );
};

export default login;
