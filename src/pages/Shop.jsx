import React from "react";
import ShopBanner from "../components/shop/ShopBanner";
import Filter from "../components/shop/Filter";
import Productpaginate from "../components/shop/Productpaginate";
import ShopInfo from "../components/shop/ShopInfo";

const Shop = () => {
  return (
    <>
      <ShopBanner />
      <Filter/>
      <Productpaginate itemsPerPage={16}/>
      <ShopInfo/>
    </>
  );
};

export default Shop;
