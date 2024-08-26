import React, { useState } from "react";
import ProductSlide from "product-slide";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import DarItems from "./DarItems";

const API = {
  images: [
    "https://i.imgur.com/QkIa5tT.jpeg",
    "https://i.imgur.com/jb5Yu0h.jpeg",
    "https://i.imgur.com/UlxxXyG.jpeg",
  ],
};

const ProductDetails = () => {
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [number, setNumber] = useState(1);

  const settings = {
    direction: "vertical", // or "horizontal"
    zoom: true, // or false
  };
  return (
    <section className="pt-9">
      <div className="container">
        <div className="flex gap-[105px]">
          <div className="w-1/2">
            <ProductSlide settings={settings} api={API.images} />
          </div>
          <div className="w-1/2">
            <h2 className="font-primary text-[42px]">Asgaard sofa</h2>
            <h3 className="font-primary font-medium text-2xl text-[#9F9F9F]">
              Rs. 250,000.00
            </h3>
            <div className="flex mt-4">
              <ul className="flex text-brand gap-1 text-xl pr-5">
                <li>
                  <IoIosStar />
                </li>
                <li>
                  <IoIosStar />
                </li>
                <li>
                  <IoIosStar />
                </li>
                <li>
                  <IoIosStar />
                </li>
                <li>
                  <IoIosStar />
                </li>
              </ul>
              <p className="border-l-2 border-[#9F9F9F] pl-5 text-[13px] font-primary text-[#9F9F9F]">
                5 Customer Review
              </p>
            </div>
            <p className="font-primary font-normal text-[13px] w-[424px] mt-5">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
            <h3 className="font-primary text-sm text-[#9F9F9F] mt-6 mb-1">
              Size
            </h3>
            <div className="gap-4 flex">
              <label
                htmlFor="L"
                className={` ${
                  size === "L" ? "bg-brand" : "bg-[#F9F1E7]"
                } w-8 h-8 rounded-lg cursor-pointer flex justify-center items-center font-primary text-sm`}
              >
                L
                <input
                  type="radio"
                  id="L"
                  value="L"
                  name="Size"
                  onChange={(e) => setSize(e.target.value)}
                  className=" hidden"
                />
              </label>
              <label
                htmlFor="XL"
                className={` ${
                  size === "XL" ? "bg-brand" : "bg-[#F9F1E7]"
                } w-8 h-8 rounded-lg cursor-pointer flex justify-center items-center font-primary text-sm`}
              >
                XL
                <input
                  type="radio"
                  id="XL"
                  value="XL"
                  name="Size"
                  onChange={(e) => setSize(e.target.value)}
                  className=" hidden"
                />
              </label>
              <label
                htmlFor="XS"
                className={` ${
                  size === "XS" ? "bg-brand" : "bg-[#F9F1E7]"
                } w-8 h-8 rounded-lg cursor-pointer flex justify-center items-center font-primary text-sm`}
              >
                XS
                <input
                  type="radio"
                  id="XS"
                  value="XS"
                  name="Size"
                  onChange={(e) => setSize(e.target.value)}
                  className=" hidden"
                />
              </label>
            </div>
            <h3 className="font-primary text-sm text-[#9F9F9F] mt-6 mb-1">
              Color
            </h3>
            <div className="flex gap-4">
              <label
                htmlFor="violet"
                className="w-8 h-8 rounded-full"
                style={{ background: "#816DFA" }}
              >
                <input
                  type="radio"
                  id="violet"
                  value="violet"
                  name="Color"
                  onChange={(e) => setColor(e.target.value)}
                  className="hidden"
                />
              </label>
              <label
                htmlFor="black"
                className="w-8 h-8 rounded-full"
                style={{ background: "black" }}
              >
                <input
                  type="radio"
                  id="black"
                  value="black"
                  name="Color"
                  className="hidden"
                  onChange={(e) => setColor(e.target.value)}
                />
              </label>
              <label
                htmlFor="orange"
                className="w-8 h-8 rounded-full"
                style={{ background: "#B88E2F" }}
              >
                <input
                  type="radio"
                  id="orange"
                  value="orange"
                  name="Color"
                  onChange={(e) => setColor(e.target.value)}
                  className="hidden"
                />
              </label>
            </div>
            <div className="flex items-center mt-8 gap-3 pb-[60px] border-b">
              <div className="flex font-primary font-medium text-base py-5 px-3 border-2 border-[#9F9F9F] w-fit rounded-lg gap-9 ">
                <button
                  onClick={() => {
                    number > 1 && setNumber(number - 1);
                  }}
                  className="cursor-pointer"
                >
                  -
                </button>
                <p>{number}</p>
                <button
                  onClick={() => setNumber(number + 1)}
                  className="cursor-pointer"
                >
                  +
                </button>
              </div>
              <button className=" py-5 px-12 border-2 border-black font-primary font-normal text-xl rounded-lg">
                Add To Cart
              </button>
              <p className=" py-5 px-12 border-2 border-black font-primary font-normal text-xl rounded-lg">
                + Compare
              </p>
            </div>
            <div className="pt-10 pb-16">
              <p>
                <span className="font-primary text-base text-[#9F9F9F]">
                  SKU
                </span>
                <span className="font-primary text-base text-[#9F9F9F] pl-[60px] pr-3">
                  :
                </span>
                <span className="font-primary text-base text-[#9F9F9F]">
                  SS001
                </span>
              </p>
              <p className=" my-3">
                <span className="font-primary text-base text-[#9F9F9F]">
                  Category
                </span>
                <span className="font-primary text-base text-[#9F9F9F] pl-[16px] pr-3">
                  :
                </span>
                <span className="font-primary text-base text-[#9F9F9F]">
                  Sofas
                </span>
              </p>
              <p>
                <span className="font-primary text-base text-[#9F9F9F] ">
                  Tags
                </span>
                <span className="font-primary text-base text-[#9F9F9F] pl-[52px] pr-3">
                  :
                </span>
                <span className="font-primary text-base text-[#9F9F9F]">
                  Sofa, Chair, Home, Shop
                </span>
              </p>
              <p className="flex mt-3">
                <span className="font-primary text-base text-[#9F9F9F]">
                  Share
                </span>
                <span className="font-primary text-base text-[#9F9F9F] pl-[44px] pr-3">
                  :
                </span>
                <ul className="flex gap-6 text-2xl">
                  <li>
                    <Link to="https://www.facebook.com/">
                      <FaFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.linkedin.com/">
                      <FaLinkedin />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://x.com/i/flow/login">
                      <AiFillTwitterCircle />
                    </Link>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <DarItems />
    </section>
  );
};

export default ProductDetails;
