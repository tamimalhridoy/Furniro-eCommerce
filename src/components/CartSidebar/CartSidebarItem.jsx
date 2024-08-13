import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

const CartSidebarItem = () => {
  return (
    <section>
      <div className="flex items-center">
        <img src="/CartSidebarItem-1.png" alt="" />
        <div>
          <h3>Asgaard sofa</h3>
          <p> 1 X Rs. 250,000.00</p>
        </div>
        <IoIosCloseCircle />
      </div>
    </section>
  );
};

export default CartSidebarItem;
