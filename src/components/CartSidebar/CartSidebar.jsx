import React from "react";
import { CgCloseR } from "react-icons/cg";
import CartSidebarItem from "./CartSidebarItem";

const CartSidebar = () => {
  return (
    <section className=" fixed top-0 right-0 bg-[rgba(0,0,0,0.21)] h-screen w-full">
      <div className="px-6 py-7 w-fit bg-white h-screen ml-auto">
        <div className="flex justify-between items-center pb-6 border-b-[#D9D9D9] border-b-2 ">
          <h2 className="font-primary font-semibold text-2xl">Shopping Cart</h2>
          <CgCloseR className="text-[#9F9F9F] text-2xl" />
        </div>
        <CartSidebarItem />
      </div>
    </section>
  );
};

export default CartSidebar;
