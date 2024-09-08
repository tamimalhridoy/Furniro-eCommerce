import React from "react";
import BreadcrumbPage from "../BreadcrumbPage";

const Blogbanner = () => {
  return (
    <section>
      <div className="bg-[url('/shop-banner.png')] pt-[60px] pb-24">
        <img src="/cart-logo.png" className="m-auto" alt="" />
        <h2 className="font-primary font-medium text-5xl text-center">Blog</h2>
        <BreadcrumbPage />
      </div>
    </section>
  );
};

export default Blogbanner;
