import React from "react";

const ProductsLiat = () => {
  return (
    <div>
      <img className="w-full" src="/image 1.png" alt="" />
      <div className="bg-[#F4F5F7] px-5 pt-4 pb-8">
        <h2 className="font-primary font-semibold text-2xl text-[#3A3A3A]">
          Syltherine
        </h2>
        <p className="font-primary font-medium text-base text-[#898989] my-2">
          Stylish cafe chair
        </p>
        <div className="flex justify-between">
          <p className="font-primary font-semibold text-xl text-[#3A3A3A]">
            Rp 2.500.000
          </p>
          <p className="font-primary font-normal text-base text-[#B0B0B0] line-through">
            Rp 3.500.000
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsLiat;
