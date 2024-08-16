import React from "react";
import BreadcrumbPage from "../../components/BreadcrumbPage";

const CartBanner = () => {
  return (
    <section className="bg-[url('/shop-banner.png')] pt-16 pb-24">
      <div className="container text-center items-center">
        <img className="m-auto" src="/cart-logo.png" alt="cart-logo" />
        <h2 className="font-primary font-medium text-5xl">Cart</h2>
      </div>
      <BreadcrumbPage />
    </section>
  );
};

export default CartBanner;
