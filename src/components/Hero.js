import React from "react";
import backgroundImg from "../assets/bg-gradient.svg";
import backgroundImgMobile from "../assets/bg-gradient-mobile.svg";

const Hero = ({ heading, heroImage, alwaysShowPara }) => {
  return (
    <section className="relative flex md:flex-row flex-col items-center justify-between md:mb-[80px] mb-[120px] lg:min-h-[226px] min-h-[265px]">
      <img
        className="md:flex hidden absolute w-full h-full object-cover z-[1]"
        src={backgroundImg}
        alt="background-img"
      />
      <img
        className="md:hidden flex absolute w-full h-full object-cover z-[1]"
        src={backgroundImgMobile}
        alt="background-img"
      />
      <div className="lg:w-[50%] w-full z-[2] lg:ps-[100px] md:ps-[50px] md:pe-[50px] md:pt-0 pt-[40px] md:pb-0 pb-[20px] px-[25px]">
        <h3 className="text-white font-[500] lg:text-[45px] md:text-[32px] text-[24px] lg:leading-[67.5px] md:leading-[40px] leading-[36px]">
          {heading}
        </h3>
        <p
          className={`${
            !alwaysShowPara && "md:hidden"
          } block text-white mt-[10px] text-[16px] font-[300] leading-[24px] md:w-[372px]`}
        >
          Placeholder para un{" "}
          <span className="font-[700]"> segundo claim </span> llamativo.
        </p>
      </div>
      <div className="z-[2] md:pt-[65px] lg:pe-[100px] md:pe-[50px] pe-[25px] md:ps-0 ps-[25px]">
        <img
          className="object-cover rounded-[20px] md:mb-[-22px] mb-[-100px] w-[647px] h-[260px]"
          src={heroImage}
          alt="hero-img"
        />
      </div>
    </section>
  );
};

export default Hero;
