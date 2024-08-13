import React from "react";
import { CgCloseR } from "react-icons/cg";
import CartSidebarItem from "./CartSidebarItem";

const CartSidebar = ({ hendelsitebar }) => {
  return (
    <section className=" fixed top-0 right-0 bg-[rgba(0,0,0,0.20)] h-screen w-full z-50">
      <div className=" py-7 w-fit bg-white h-[746px] ml-auto">
        <div className="flex justify-between items-center pb-6 border-b-[#D9D9D9] border-b-2 px-6">
          <h2 className="font-primary font-semibold text-2xl">Shopping Cart</h2>
          <CgCloseR
            onClick={() => hendelsitebar(false)}
            className="text-[#9F9F9F] text-2xl"
          />
        </div>
        <div className="scrollbar h-[350px] overflow-y-scroll px-6">
          <CartSidebarItem />
          <CartSidebarItem />
          <CartSidebarItem />
          <CartSidebarItem />
          <CartSidebarItem />
          <CartSidebarItem />
          <CartSidebarItem />
          <CartSidebarItem />
        </div>
        <div className="flex justify-between pb-6 border-b mt-8 px-6">
          <h3 className="font-primary font-normal text-lg">Subtotal</h3>
          <p className="font-primary font-semibold text-base text-brand">
            Rs. 520,000.00
          </p>
        </div>
        <div className="flex justify-center gap-4 py-6">
          <button className="font-primary text-[12px] px-7 py-2 border-2 border-black rounded-2xl">
            Cart
          </button>
          <button className="font-primary text-[12px] px-7 py-2 border-2 border-black rounded-2xl">
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartSidebar;
