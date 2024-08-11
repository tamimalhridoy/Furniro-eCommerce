import React from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { BiGridSmall } from "react-icons/bi";
import { MdOutlineViewDay } from "react-icons/md";

const Filter = () => {
  return (
    <section className="py-10 bg-[#F9F1E7]">
      <div className="container">
        <div className=" flex items-center justify-between">
          <p className="font-primary text-xl flex items-center gap-3">
            <HiAdjustmentsHorizontal />
            <span>Filter</span>
            <p className="flex items-center gap-3 pr-8">
              <BiGridSmall className="text-4xl" />
              <MdOutlineViewDay className="text-3xl" />
            </p>
            <p className="font-primary text-lg border-l-2 border-l-[#9F9F9F] pl-8">
              Showing 1–16 of 32 results
            </p>
          </p>
          <div className="flex gap-8">
            <div>
              <label className="font-primary text-xl pr-4">Show</label>
              <input
                type="number"
                value="16"
                className="bg-white text-[#9F9F9F] py-3 w-[55px] h-[55px] text-center"
              />
            </div>
            <div>
              <label className="font-primary text-xl pr-4">Short by</label>
              <select className="py-3 font-primary text-xl text-[#9F9F9F] pl-7 pr-20">
                <option value="Default">Default</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
