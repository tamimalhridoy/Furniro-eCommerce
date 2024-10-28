import React from "react";

const Input = ({ title, type = "text" }) => {
  return (
    <div className="pt-9">
      <label className="font-primary font-medium text-base pb-5 inline-block">
        {title}
      </label>
      <input
        type="{type}"
        className="border border-[#9F9F9F] py-3 rounded-lg px-3 w-full"
      />
    </div>
  );
};

export default Input;
