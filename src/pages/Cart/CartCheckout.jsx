import React from "react";
import { Link } from "react-router-dom";

const CartCheckout = () => {
  return (
    <div className="bg-[#F9F1E7] w-[390px] h-[390px] flex justify-center text-center">
      <div>
        <h2 className="font-primary font-semibold text-4xl text-center pt-3 pb-[70px]">
          Cart Totals
        </h2>
        <div className="flex gap-16 pl-[75px] ">
          <h3 className="font-primary font-medium text-base">Subtotal</h3>
          <p className="font-primary text-base text-[#9F9F9F]">
            Rs. 250,000.00
          </p>
          <div></div>
        </div>
        <div className="flex gap-14 mt-8 mb-11 pl-[105px]">
          <h3 className="font-primary font-medium text-base">Total</h3>
          <p className="font-primary font-medium text-base text-brand">
            Rs. 250,000.00
          </p>
        </div>
        <button className="font-primary text-xl px-12 py-4 border-2 border-black rounded-2xl mt-10 ">
          <Link to="/checkout">Check Out</Link>
        </button>
      </div>
    </div>
  );
};

export default CartCheckout;
