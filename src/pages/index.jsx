import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
const MainPage = () => {
  return (
    <div>
      <Header />
      <Menu />
      <h3>Welcome to main page</h3>
      <Link to="/dishes">Show dishes</Link>
      <Footer />
    </div>
  );
};

export default MainPage;
