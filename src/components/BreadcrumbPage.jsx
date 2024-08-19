import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

const BreadcrumbPage = () => {
  const location = useLocation();
  const path = location.pathname.split("/").filter((item) => item !== "");
  console.log(location)
  return (
    <ul className=" flex text-center items-center gap-1 justify-center mt-2">
      <li className="font-primary font-medium text-base text-[#]">
        <Link to="/">Home</Link>
      </li>
      <FaChevronRight />
      <li className="font-primary font-medium text-base text-[#000000e4]">
        <p>{path}</p>
      </li>
    </ul>
  );
};

export default BreadcrumbPage;
