import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

const BreadcrumbPage = () => {
  const location = useLocation();
  const path1 = location.pathname.split("/")[1];
  const path2 = location.pathname.split("/")[2];
  console.log(path2);
  return (
    <ul className=" flex text-center items-center gap-5 justify-center mt-2">
      <li className="font-primary font-medium text-base text-[#]">
        <Link to="/">Home</Link>
      </li>
      <li>
        <FaChevronRight />
      </li>
      <li className="font-primary font-medium text-base text-[#000000e4]">
        <Link to="/shop">{path1}</Link>
      </li>
      {path2 && (
        <>
          <li className="pr-8">
            <FaChevronRight />
          </li>
          <li className="font-primary font-medium text-base text-[#000000e4] pl-8 border-l-2 border-[#9F9F9F]">
            <p>{path2}</p>
          </li>
        </>
      )}
    </ul>
  );
};

export default BreadcrumbPage;
