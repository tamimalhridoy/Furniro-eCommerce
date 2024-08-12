import React from "react";

const ShopInfo = () => {
  return (
    <section className="bg-[#FAF3EA]">
      <div className="container py-24">
        <div className=" flex justify-between">
          <div className="flex items-center gap-3 ">
            <img src="/trophy 1.png" className=" w-full" alt="" />
            <div>
              <h2 className="font-primary font-semibold text-2xl text-[#242424]">
                High Quality
              </h2>
              <p className="font-primary font-medium text-xl text-[#898989] mt-1 w-[267px]">
                crafted from top materials
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 ">
            <img src="/Group.png" className=" w-full" alt="" />
            <div>
              <h2 className="font-primary font-semibold text-2xl text-[#242424]">
                Warranty Protection
              </h2>
              <p className="font-primary font-medium text-xl text-[#898989] mt-1 w-[258px]">
                Over 2 years
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 ">
            <img src="/Vector.png" className=" w-full" alt="" />
            <div>
              <h2 className="font-primary font-semibold text-2xl text-[#242424] w-[175px]">
                Free Shipping
              </h2>
              <p className="font-primary font-medium text-xl text-[#898989] mt-1 ">
                Order over 150 $
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img src="/customer-support.png" className=" w-full" alt="" />
            <div>
              <h2 className="font-primary font-semibold text-2xl text-[#242424] w-[175px]">
                24 / 7 Support
              </h2>
              <p className="font-primary font-medium text-xl text-[#898989] mt-1 w-[190px]">
                Dedicated support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopInfo;
