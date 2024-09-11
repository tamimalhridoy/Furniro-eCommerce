import React from "react";
import { IoPerson } from "react-icons/io5";
import { CgCalendarDates } from "react-icons/cg";
import { FaTag } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blogsite = () => {
  return (
    <section>
      <div className="container flex">
        <div className="w-3/4 pt-24 pb-7">
          <div className="w-[817px] h-[500px]">
            <img
              src="/blogsite.png"
              className="w-full rounded-lg"
              alt="blogsite-1"
            />
          </div>
          <div className="flex gap-9 py-4">
            <div className="text-[#9F9F9F] flex items-center gap-2 font-primary text-base">
              <IoPerson />
              <p>Admin</p>
            </div>
            <div className="text-[#9F9F9F] flex items-center gap-2 font-primary text-base">
              <CgCalendarDates />
              <p>14 Oct 2022</p>
            </div>
            <div className="text-[#9F9F9F] flex items-center gap-2 font-primary text-base">
              <FaTag />
              <p>Wood</p>
            </div>
          </div>
          <h2 className="font-primary font-medium text-3xl">
            Going all-in with millennial design
          </h2>
          <p className="pt-3 pb-7 font-primary text-[#9F9F9F] w-[860px] text-base leading-[150%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
            mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
            sollicitudin aliquam ultrices. Morbi blandit cursus risus at
            ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
            Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis
            nunc sed blandit libero. Pellentesque elit ullamcorper dignissim
            cras tincidunt. Pharetra et ultrices neque ornare aenean euismod
            elementum.
          </p>
          <Link className="font-primary font-normal text-base border-b pb-2 border-black">
            Read more
          </Link>
        </div>
        <div className="w-1/4 pt-24">
          <input type="text" placeholder="degfuiedghfiujdbhfjigb" />
        </div>
      </div>
    </section>
  );
};

export default Blogsite;
