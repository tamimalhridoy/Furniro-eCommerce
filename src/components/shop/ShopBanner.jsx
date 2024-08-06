import React from "react";
import BreadcrumbPage from "../BreadcrumbPage";

const ShopBanner = () => {
  return (
    <section className="pt-[120px] pb-24 bg-[url('/shop-banner.png')]">
      <div className="container">
        <h2 className="font-primary font-medium text-5xl text-center">Shop</h2>
        <BreadcrumbPage />
      </div>
    </section>
  );
};

export default ShopBanner;
