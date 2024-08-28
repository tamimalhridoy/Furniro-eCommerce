import React from "react";

const Inputsecet = ({ title, type }) => {
  return (
    <div>
      <label className="font-primary font-medium text-base block pb-5">{title}</label>
      <select>
        <input type="{type}" className="border border-[#9F9F9F] py-3 rounded-lg px-3 w-full" />
      </select>
    </div>
  );
};

export default Inputsecet;
