import React from "react";

import CartProductItems from "../../components/CartProductItems";
import CartCheckout from "./CartCheckout";
import ShopInfo from "../../components/shop/ShopInfo";

const CartBody = () => {
  return (
    <section className="pt-[72px] pb-2">
      <div className="container flex gap-8">
        <div className="w-3/5">
          <div className="bg-[#F9F1E7]">
            <ul className="flex font-primary text-base font-medium py-4 items-center px-32 justify-between">
              <li>Product</li>
              <li>Price</li>
              <p className="flex gap-9">
                <li>Quantity</li>
                <li>Subtotal</li>
              </p>
            </ul>
          </div>
          <CartProductItems />
        </div>
        <div className="checkout w-2/5">
          <CartCheckout />
        </div>
      </div>
      <div className="pt-20">
        <ShopInfo />
      </div>
    </section>
  );
};

export default CartBody;
