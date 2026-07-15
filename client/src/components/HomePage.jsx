import React from "react";
import Dishes from "./Dishes";
import Categories from "./Categories";
import AddtoCart from "./AddtoCart";

const HomePage = () => {
  return (
    <>
      <Categories />
      <Dishes />
      <AddtoCart />
    </>
  );
};

export default HomePage;
