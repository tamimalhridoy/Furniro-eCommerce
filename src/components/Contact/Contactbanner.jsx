import React from "react";
import BreadcrumbPage from "../BreadcrumbPage";
import ContactTouch from "./ContactTouch";

const Contactbanner = () => {
  return (
    <section>
      <div className="bg-[url('/shop-banner.png')] pt-[60px] pb-24">
        <img src="/cart-logo.png" className="m-auto" alt="" />
        <h2 className="font-primary font-medium text-5xl text-center">
          Contact
        </h2>
        <BreadcrumbPage />
      </div>
      <ContactTouch />
    </section>
  );
};

export default Contactbanner;
