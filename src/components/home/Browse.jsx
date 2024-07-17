import React from "react";

const Browse = () => {
  return (
    <section className="py-14">
      <div className="container">
        <div className="title text-center">
          <h2 className="font-primary text-4xl font-bold">Browse The Range</h2>
          <p className="font-primary text-xl font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex gap-5 mt-[60px]">
          <div className="w-1/3 text-center">
            <img className="w-full" src="/Dining.png" alt="Dining" />
            <p className="font-primary text-2xl font-semibold text-[#333333] mt-8">
              Dining
            </p>
          </div>
          <div className="w-1/3 text-center">
            <img className="w-full" src="/Living.png" alt="Living" />
            <p className="font-primary text-2xl font-semibold text-[#333333] mt-8">
              Living
            </p>
          </div>
          <div className="w-1/3 text-center">
            <img className="w-full" src="/Bedroom.png" alt="Bedroom" />
            <p className="font-primary text-2xl font-semibold text-[#333333] mt-8">
              Bedroom
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Browse;
