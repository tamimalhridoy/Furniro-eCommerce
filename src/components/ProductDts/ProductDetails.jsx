import React, { useState } from "react";
import ProductSlide from "product-slide";
import { IoIosStar } from "react-icons/io";

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
  console.log(color);
  const settings = {
    direction: "horizontal", // or "vertical"
    zoom: true, // or false
  };
  return (
    <section className="pt-9">
      <div className="container flex gap-[105px]">
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
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
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
          <div className="flex font-primary font-medium text-base py-5 px-3 border-2 border-[#9F9F9F] w-fit rounded-lg gap-9 mt-8">
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
