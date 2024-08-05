import React from "react";
import Button from "../Button";

const Banner = () => {
  return (
    <section className="py-[150px] bg-[url('/banner.png')]">
      <div className="container">
        <div className="bg-[#FFF3E3] w-1/2 ml-auto py-[62px]  px-11">
          <h2 className="font-primary text-base font-semibold text-[#333333]">
            New Arrival
          </h2>
          <h1 className="font-primary text-5xl font-bold text-brand w-[400px] mt-2">
            Discover Our New Collection
          </h1>
          <p className="font-primary text-lg font-medium text-[#333333] mt-4 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Button title="BUY NOW" path="/Shop" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
