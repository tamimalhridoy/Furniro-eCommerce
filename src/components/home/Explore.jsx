import React from "react";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NextArrow from "../NextArrow";

const Explore = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <div></div>,
  };
  return (
    <section className="bg-[#FCF8F3] py-11 mt-16 explore">
      <div className="container flex gap-10 items-center">
        <div className=" w-2/5">
          <h2 className="font-primary font-bold text-[40px] text-[#3A3A3A]">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="font-primary font-medium text-base text-[#616161] leading-[150%] mt-2 mb-12">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <Button title="Explore More" path="/Shop" />
        </div>
        <div className="w-3/5">
          <Slider {...settings}>
            <div>
              <div className="relative slide_items">
                <img src="/slick-1.png" className="w-full h-full" alt="" />
                <div className="absolute bottom-6 left-6">
                  <div className="py-8 pl-8 pr-5 bg-[#FFFFFF] inline-block relative ">
                    <p className="flex items-center gap-2 font-primary font-medium text-base text-[#616161]">
                      <span>01</span>
                      <span>
                        <img src="/border.png" className="w-full" alt="" />
                      </span>
                      <span>Bed Room</span>
                    </p>
                    <h2 className="font-semibold text-3xl text-[#3A3A3A] leading-[120%]">
                      Inner Peace
                    </h2>
                  </div>
                  <div className="bg-[#B88E2F] p-3 inline-block text-3xl text-white absolute top-[70px] rigt-0">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative slide_items">
                <img src="/slick-1.png" className="w-full h-full" alt="" />
                <div className="absolute bottom-6 left-6">
                  <div className="py-8 pl-8 pr-5 bg-[#FFFFFF] inline-block relative ">
                    <p className="flex items-center gap-2 font-primary font-medium text-base text-[#616161]">
                      <span>01</span>
                      <span>
                        <img src="/border.png" className="w-full" alt="" />
                      </span>
                      <span>Bed Room</span>
                    </p>
                    <h2 className="font-semibold text-3xl text-[#3A3A3A] leading-[120%]">
                      Inner Peace
                    </h2>
                  </div>
                  <div className="bg-[#B88E2F] p-3 inline-block text-3xl text-white absolute top-[70px] rigt-0">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative slide_items">
                <img src="/slick-1.png" className="w-full h-full" alt="" />
                <div className="absolute bottom-6 left-6">
                  <div className="py-8 pl-8 pr-5 bg-[#FFFFFF] inline-block relative ">
                    <p className="flex items-center gap-2 font-primary font-medium text-base text-[#616161]">
                      <span>01</span>
                      <span>
                        <img src="/border.png" className="w-full" alt="" />
                      </span>
                      <span>Bed Room</span>
                    </p>
                    <h2 className="font-semibold text-3xl text-[#3A3A3A] leading-[120%]">
                      Inner Peace
                    </h2>
                  </div>
                  <div className="bg-[#B88E2F] p-3 inline-block text-3xl text-white absolute top-[70px] rigt-0">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Explore;
