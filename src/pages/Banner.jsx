import React from "react";

const Banner = () => {
  return (
    <section className=" py-[150px] bg-[url('/banner.png')]">
      <div className="container">
        <div className="w-1/2 ml-auto">
          <h2 className="font-primary text-base font-semibold text-[#333333]">New Arrival</h2>
          <h1 className="font-primary text-5xl font-bold text-brand">Discover Our New Collection</h1>
          <p className="font-primary text-lg font-medium text-[#333333]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
