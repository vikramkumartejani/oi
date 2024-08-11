import React from "react";
import backgroundImg from "../assets/bg-gradient.svg";
import backgroundImgMobile from "../assets/bg-gradient-mobile.svg";
import NewsletterImg from "../assets/newsletter-img.png";

const Newsletter = () => {
  return (
    <section className="relative flex items-center justify-between md:mb-[80px] mb-[50px] lg:min-h-[226px] min-h-[265px]">
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
      <div className="lg:w-[50%] w-full z-[2] lg:ps-[100px] md:ps-[50px] md:pe-[50px] md:py-[33px] py-[25px] px-[25px]">
        <h3 className="text-white font-[800] md:text-[25px] text-[22px] md:leading-[37.5px] leading-[33px]">
          Newsletter
        </h3>
        <p className="text-white mt-[5px] text-[14px] font-[400] leading-[21px] md:w-[372px]">
          Unete a nuestro newsletter y recive tips cortos y concisos de como
          mejorar tus finanzas.
        </p>
        <div className="flex flex-wrap gap-[15px] mt-[30px]">
          <input
            className="flex-grow px-[26px] py-[10.5px] placeholder:text-[#72778A] rounded-[10px] md:min-w-[300px] min-w-[280px"
            type="text"
            placeholder="Email"
          />
          <button className="bg-white px-[26px] py-[10.5px] text-[#155E59] md:text-[14px] text-[12px] md:leading-[21px] leading-[18px] font-[600] rounded-[10px]">
            Suscribirme
          </button>
        </div>
      </div>
      <div className="xl:w-1/2 lg:w-[40%] lg:flex hidden z-[2]">
        <img
          className="absolute bottom-[-40px] xl:right-[40px] right-[30px] object-contain xl:max-w-[600px] lg:max-w-[500px] max-h-full"
          src={NewsletterImg}
          alt="Newsletter-img"
        />
      </div>
    </section>
  );
};

export default Newsletter;
