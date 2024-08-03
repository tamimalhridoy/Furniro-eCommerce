import React from "react";
import Banner from "./home/Banner";
import Browse from "./home/Browse";
import Products from "./home/Products";
import Explore from "./home/Explore";
import Furniture from "./home/Furniture";

const Home = () => {
  return (
    <div>
      <Banner />
      <Browse />
      <Products />
      <Explore />
      <Furniture />
    </div>
  );
};

export default Home;
