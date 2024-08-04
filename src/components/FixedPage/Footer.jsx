import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-12 border-t">
      <div className="container flex justify-between border-b pb-12">
        <div>
          <img src="/footer-logo.png" alt="" />
          <p className="font-primary text-base text-[#9F9F9F] mt-12 w-72">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>
        <ul className="font-primary font-medium text-base text-black flex flex-col gap-14">
          <li className="text-[#9F9F9F]">
            <h2>Links</h2>
          </li>
          <li className="hover:text-[#9F9F9F] transition-all">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-[#9F9F9F] transition-all">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="hover:text-[#9F9F9F] transition-all">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-[#9F9F9F] transition-all">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="font-primary font-medium text-base text-black flex flex-col gap-14">
          <li className="text-[#9F9F9F]">
            <h2>Help</h2>
          </li>
          <li className="hover:text-[#9F9F9F] transition-all">
            <Link to="/payment">Payment Options</Link>
          </li>
          <li className="hover:text-[#9F9F9F] transition-all">
            <Link to="/returns">Returns</Link>
          </li>
          <li className="hover:text-[#9F9F9F] transition-all">
            <Link to="/policies">Privacy Policies</Link>
          </li>
        </ul>
        <div>
          <p className="font-primary font-medium text-base text-[#9F9F9F]">
            Newsletter
          </p>
          <div className="flex gap-5 mt-14">
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="subscribe border-b border-b-black"
            />
            <p className="">
              <button className="font-primary font-medium text-sm border-b border-b-black">
                SUBSCRIBE
              </button>
            </p>
          </div>
        </div>
      </div>
      <p className="font-primary text-base mt-9">
        2023 furino. All rights reverved
      </p>
    </footer>
  );
};

export default Footer;
