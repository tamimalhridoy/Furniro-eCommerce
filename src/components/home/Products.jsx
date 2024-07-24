import React from "react";
import ProductsLiat from "../ProductsLiat";

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
      </div>
    </section>
  );
};

export default Products;
