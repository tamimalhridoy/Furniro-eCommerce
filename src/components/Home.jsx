import React from "react";
import Banner from "./home/Banner";
import Browse from "./home/Browse";
import Products from "./home/Products";
import Explore from "./home/Explore";

const Home = () => {
  return (
    <div>
      <Banner />
      <Browse />
      <Products />
      <Explore/>
      Home pages
    </div>
  );
};

export default Home;
