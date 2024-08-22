import React from "react";
import BreadcrumbPage from "../../components/BreadcrumbPage";
import ProductDetails from "../../components/ProductDts/ProductDetails";

const SingleProduct = () => {
  return (
    <section>
      <div className="bg-[#F9F1E7] py-10">
        <div className="container">
          <BreadcrumbPage />
        </div>
      </div>
      <ProductDetails />
    </section>
  );
};

export default SingleProduct;
