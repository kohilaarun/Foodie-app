import React from "react";
import Dishes from "./Dishes";
import Categories from "./Categories";
import Cart from "./Cart";

const HomePage = () => {
  return (
    <>
      <Categories />
      <Dishes />
      <Cart />
    </>
  );
};

export default HomePage;
