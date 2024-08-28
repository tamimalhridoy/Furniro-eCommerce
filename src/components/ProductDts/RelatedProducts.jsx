import React from "react";
import ProductsLiat from "../ProductsLiat";
import { Link } from "react-router-dom";

const RelatedProducts = () => {
  return (
    <section className="pt-14 border-t">
      <div className="container">
        <h2 className="font-primary font-medium text-4xl text-black text-center mb-9">
          Related Products
        </h2>
        <div className="flex justify-between">
          <ProductsLiat />
          <ProductsLiat />
          <ProductsLiat />
          <ProductsLiat />
        </div>
        <div className="flex justify-center pt-11 pb-24">
          <Link
            className="font-primary text-base font-semibold text-[#B88E2F] py-3 px-[72px] border border-[#B88E2F] "
            to="/Shop"
          >
            Show More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
