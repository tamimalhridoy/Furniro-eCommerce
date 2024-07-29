import React from "react";
import { FaChevronRight } from "react-icons/fa6";

const NextArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer text-brand bg-white h-12 w-12 rounded-full items-center flex justify-center absolute top-1/2 right-0 -translate-y-1/2"
    >
      <FaChevronRight />
    </div>
  );
};

export default NextArrow;
