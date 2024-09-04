import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import Input from "../unilist/Input";
import { Link } from "react-router-dom";

const ContactTouch = () => {
  return (
    <section className="pt-24">
      <div className="container">
        <h2 className="font-primary font-semibold text-4xl text-center">
          Get In Touch With Us
        </h2>
        <p className="font-primary font-normal text-base text-[#9F9F9F] w-1/2 text-center m-auto mt-2">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
        <div className="flex pt-[133px] pb-[63px]">
          <div className="flex m-auto justify-between items-center">
            <div className="w-2/5">
              <ul>
                <li className="flex gap-7">
                  <IoLocationSharp className="text-4xl" />
                  <samp>
                    <p className="font-primary font-medium text-2xl">Address</p>
                    <p className="w-1/2 font-primary font-normal text-base">
                      236 5th SE Avenue, New York NY10000, United States
                    </p>
                  </samp>
                </li>
                <li className="flex gap-7 my-10">
                  <FaPhoneAlt className="text-2xl" />
                  <samp>
                    <p className="font-primary font-medium text-2xl">Phone</p>
                    <p className="font-primary font-normal text-base flex flex-col">
                      <span>Mobile: +(84) 546-6789</span>
                      <span>Mobile: +(84) 546-6789</span>
                    </p>
                  </samp>
                </li>
                <li className="flex gap-7">
                  <MdAccessTimeFilled className="text-3xl" />
                  <samp>
                    <p className="font-primary font-medium text-2xl">Address</p>
                    <p className="w-[212px] font-primary font-normal text-base flex flex-col">
                      <span>Monday-Friday: 9:00 - 22:00</span>
                      <span>Saturday-Sunday: 9:00 - 21:00</span>
                    </p>
                  </samp>
                </li>
              </ul>
            </div>
            <div className="w-2/5">
              <Input title="Your name" placeholder="fdg" />
              <Input title="Your name" placeholder="fdg" />
              <Input title="Your name" placeholder="fdg" />
              <Input title="Message" placeholder="fdg" />
              <Link></Link>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTouch;
