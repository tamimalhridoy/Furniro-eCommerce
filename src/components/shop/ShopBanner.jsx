import React from "react";
import Breadcrumb from "../Breadcrumb";

const ShopBanner = () => {
  return (
    <section className="pt-[120px] pb-24 bg-[url('/shop-banner.png')]">
      <div className="container">
        <h2 className="font-primary font-medium text-5xl text-center">Shop</h2>
        <Breadcrumb/>
      </div>
    </section>
  );
};

export default ShopBanner;
