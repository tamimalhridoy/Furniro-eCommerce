import React from "react";
import { MdDelete } from "react-icons/md";

const CartProductItems = () => {
  return (
    <div className="Product-items flex items-center justify-between pt-14">
      <div className="w-28 ">
        <img className="w-full" src="/CartSidebarItem-2.png" alt="" />
      </div>
      <p className="font-primary text-base text-[#9F9F9F]">Rs. 250,000.00</p>
      <p className="flex items-center gap-12">
        <p className="py-1 px-3 rounded-xl border-4 font-medium">1</p>
        <span className="font-primary text-base">Rs. 250,000.00</span>
        <MdDelete className="text-3xl text-brand" />
      </p>
    </div>
  );
};

export default CartProductItems;
