import React from "react";

const Selectbox = ({ children, title }) => {
  return (
    <div className="pt-9">
      <label className="font-primary font-medium text-base block pb-5">
        {title}
      </label>
      <select className="border border-[#9F9F9F] py-3 rounded-lg px-3 w-full">
        {children}
      </select>
    </div>
  );
};

export default Selectbox;
