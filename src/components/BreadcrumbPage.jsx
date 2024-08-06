import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

const BreadcrumbPage = () => {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <ul className=" flex text-center items-center gap-1 justify-center mt-2">
      <li className="font-primary font-medium text-base text-[#]">
        <Link to="/">Home</Link>
      </li>
      <FaChevronRight />
      <li className="font-primary font-medium text-base text-[#000000e4]">
        <p>Shop</p>
      </li>
    </ul>
  );
};

export default BreadcrumbPage;