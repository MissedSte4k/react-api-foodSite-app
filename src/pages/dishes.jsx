import React from "react";
import PostList from "../components/PostList";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const Dishes = () => {
  return (
    <div className="App">
      <Header />
      <Menu />
      <PostList />
      <Footer />
    </div>
  );
};

export default Dishes;
