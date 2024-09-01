import React from "react";
import Input from "../../components/unilist/Input";
import Selectbox from "../../components/unilist/Selectbox";

const Checkfrom = () => {
  return (
    <section className="pt-24 pb-32">
      <div className="container">
        <h2 className="font-semibold font-primary text-4xl">Billing details</h2>
        <div className="flex justify-between">
          <div className="w-2/5">
            <div className="flex justify-between">
              <Input title="First Name" />
              <Input title="Last Name" />
            </div>
            <Input title="Company Name (Optional)" />
            <Selectbox title="Country / Region" />
            <Input title="Street address" />
            <Input title="Town / City" />
            <Selectbox title="Province" />
            <Input title="ZIP code" type="number" />
            <Input title="Phone" type="number" />
            <Input title="Email" />
            <Input type="number" />
          </div>
          <div className="w-2/5">
            <div className="flex font-primary font-medium text-2xl text-black justify-between">
              <p>Product</p>
              <p>Subtotal</p>
            </div>
            <div className="flex justify-between font-primary text-base mt-4 mb-6">
              <p className="font-normal text-[#9F9F9F]">Asgaard sofa x 1</p>
              <p className="font-light">Rs. 250,000.00</p>
            </div>
            <div className="flex justify-between font-primary text-base mb-6">
              <p className="font-normal">Subtotal</p>
              <p className="font-light">Rs. 250,000.00</p>
            </div>
            <div className="flex justify-between font-primary text-base pb-10 border-b">
              <p className="font-normal">Total</p>
              <p className="font-bold text-2xl text-[#B88E2F]">
                Rs. 250,000.00
              </p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <p className="h-[14px] w-[14px] rounded-full bg-black"></p>
              <p className="font-primary font-medium text-base">
                Direct Bank Transfer
              </p>
            </div>
            <p className="font-primary font-light text-base text-[#9F9F9F] w-[528px] mt-3">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <div className="flex gap-4 font-primary font-medium text-base text-[#9F9F9F] items-center mt-6">
              <input type="radio" id="bank" name="payment" />
              <label className="cursor-pointer" htmlFor="bank">
                Direct Bank Transfer
              </label>
            </div>
            <div className="flex gap-4 font-primary font-medium text-base text-[#9F9F9F] items-center mt-6">
              <input type="radio" id="cash" name="payment" />
              <label className="cursor-pointer" htmlFor="cash">
                Cash On Delivery
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkfrom;
