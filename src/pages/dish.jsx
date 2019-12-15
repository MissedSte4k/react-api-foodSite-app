import React from "react";
import OneDish from "../components/OneDish";
import Header from "../components/Header";
import Menu from "../components/Menu";
import DishComments from "../components/DishComments";
import DishIngredients from "../components/DishIngredients";
import Footer from "../components/Footer";
import WriteComment from "../components/WriteComment";

const Dish = () => {
  return (
    <div className="App">
      <Header />
      <Menu />
      <OneDish />
      <DishIngredients />
      <WriteComment />
      <DishComments />
      <Footer />
    </div>
  );
};

export default Dish;
