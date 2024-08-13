import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

const CartSidebarItem = () => {
  return (
    <section className="flex items-center mt-5">
      <div className="w-[110px] overflow-hidden">
        <img src="/CartSidebarItem-2.png" className="w-full rounded-xl" alt="" />
      </div>
      <div className="ml-8 mr-14">
        <h3 className="font-primary text-base">Asgaard sofa</h3>
        <p className="font-primary text-[12px] mt-2">
          1 X <span className=" text-brand">Rs. 250,000.00</span>
        </p>
      </div>
      <IoIosCloseCircle className="text-[#9F9F9F] text-3xl" />
    </section>
  );
};

export default CartSidebarItem;
