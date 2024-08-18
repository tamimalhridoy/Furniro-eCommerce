import React from "react";
import { Link } from "react-router-dom";
import { FaShareAlt } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

const ProductsLiat = () => {
  return (
    <div className=" cursor-pointer">
      <div className="relative group">
        <img className="w-full" src="/image 4.png" alt="" />
        <Link to="/singleProduct">
          <div className="absolute top-0 left-0 bg-[rgba(58,58,58,0.58)] h-full w-full flex flex-col items-center justify-center scale-0 group-hover:scale-100 transition-all">
            <button>
              <Link className="font-primary text-brand bg-white py-3 px-14 font-semibold text-base rounded-lg">
                Add to cart
              </Link>
            </button>
            <ul className=" flex gap-5 mt-6">
              <li>
                <Link
                  to="/Share"
                  className="flex items-center font-primary font-semibold text-base text-white gap-1"
                >
                  <FaShareAlt />
                  Share
                </Link>
              </li>
              <li>
                <Link
                  to="/Compare"
                  className="flex items-center font-primary font-semibold text-base text-white gap-1"
                >
                  <FaCodeCompare />
                  Compare
                </Link>
              </li>
              <li>
                <Link
                  to="/Like"
                  className="flex items-center font-primary font-semibold text-base text-white gap-1"
                >
                  <FaRegHeart />
                  Like
                </Link>
              </li>
            </ul>
          </div>
        </Link>
      </div>
      <div className="bg-[#F4F5F7] px-5 pt-4 pb-8">
        <h2 className="font-primary font-semibold text-2xl text-[#3A3A3A]">
          <Link to="/singleProduct">Respira</Link>
        </h2>
        <p className="font-primary font-medium text-base text-[#898989] my-2">
          Outdoor bar table and stool
        </p>
        <div className="flex justify-between">
          <p className="font-primary font-semibold text-xl text-[#3A3A3A]">
            Rp 2.500.000
          </p>
          <p className="font-primary font-normal text-base text-[#B0B0B0] line-through">
            Rp 3.500.000
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsLiat;
