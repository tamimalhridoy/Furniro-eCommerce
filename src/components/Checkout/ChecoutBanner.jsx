import React from "react";
import BreadcrumbPage from "../BreadcrumbPage";

const ChecoutBanner = () => {
  return (
    <section className="bg-[url('/shop-banner.png')] pt-[60px] pb-[97px]">
      <div className="container items-center text-center">
        <img className="m-auto" src="/cart-logo.png" alt="checkout" />
        <h2 className="font-primary font-medium text-5xl">Checkout</h2>
      </div>
      <BreadcrumbPage />
      
    </section>
  );
};

export default ChecoutBanner;
