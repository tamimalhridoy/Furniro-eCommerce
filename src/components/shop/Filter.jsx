import React from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { BiGridSmall } from "react-icons/bi";
import { MdOutlineViewDay } from "react-icons/md";

const Filter = () => {
  return (
    <section className="py-10 bg-[#F9F1E7]">
      <div className="container flex ">
        <p className="font-primary text-xl items-center">
          <HiAdjustmentsHorizontal />
          <span>Filter</span>
          <p className="">
            <BiGridSmall className="text-4xl" />
            <MdOutlineViewDay className="text-3xl" />
          </p>
          <p className="font-primary text-lg">Showing 1–16 of 32 results</p>
        </p>
      </div>
    </section>
  );
};

export default Filter;
