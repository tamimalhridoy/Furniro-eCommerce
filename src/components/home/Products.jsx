import React from "react";
import ProductsLiat from "../ProductsLiat";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <div className="container">
        <h2 className="font-primary text-[40px] font-bold text-[#3A3A3A] text-center">
          Our Products
        </h2>
        <div className="grid grid-cols-4 gap-8 mt-11">
          <ProductsLiat />
          <ProductsLiat />
          <ProductsLiat />
          <ProductsLiat />
          <ProductsLiat />
          <ProductsLiat />
          <ProductsLiat />
          <ProductsLiat />
        </div>
        <div className="flex justify-center pt-8">
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

export default Products;
