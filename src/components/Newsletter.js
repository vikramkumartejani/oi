import React from "react";
import backgroundImg from "../assets/bg-gradient.svg";
import NewsletterImg from "../assets/newsletter-img.svg";

const Newsletter = () => {
  return (
    <section
      className="relative lg:px-[100px] md:px-[50px] px-[25px] md:py-[33px] py-[25px] flex items-center justify-between md:mb-[80px] mb-[50px] lg:h-[226px]"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "101% auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="lg:w-1/2 w-full">
        <h3 className="text-white font-[800] md:text-[25px] text-[22px] md:leading-[37.5px] leading-[33px]">
          Newsletter
        </h3>
        <p className="text-white mt-[5px] text-[14px] font-[400] leading-[21px] w-[372px]">
          Unete a nuestro newsletter y recive tips cortos y concisos de como
          mejorar tus finanzas.
        </p>
        <div className="flex flex-wrap gap-[15px] mt-[30px]">
          <input
            className="flex-grow px-[26px] py-[10.5px] placeholder:text-[#72778A] rounded-[10px] min-w-[380px]"
            type="text"
            placeholder="Email"
          />
          <button className="bg-white px-[26px] py-[10.5px] text-[#155E59] md:text-[14px] text-[12px] md:leading-[21px] leading-[18px] font-[600] rounded-[10px]">
            Suscribirme
          </button>
        </div>
      </div>
      <div className="flex-grow lg:flex hidden">
        <img
          className="h-fit xl:mt-[110px] mt-[150px] ml-[60px]"
          src={NewsletterImg}
          alt="Newsletter-img"
        />
      </div>
    </section>
  );
};

export default Newsletter;
