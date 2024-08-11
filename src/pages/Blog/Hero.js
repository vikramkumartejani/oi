import React from "react";
import cardImg1 from "../../assets/card-img1.png";
import blogImg1 from "../../assets/blog-img1.png";

const Hero = () => {
  return (
    <section className="flex md:flex-row flex-col justify-between md:pt-[65px] md:pb-[31px] lg:gap-[75px] gap-[30px]">
      <div className="flex flex-col justify-center md:py-[66.5px] py-[40px] text-left md:w-[70%] w-full md:gap-0 gap-[10px]">
        <h1 className="lg:text-[45px] md:text-[31px] text-[24px] font-[500] lg:leading-[65px] md:leading-[45px] leading-[36px]">
          Nuestro blog financiero, el más{" "}
          <span className="font-[700]">importante</span> de la web
        </h1>
        <p className="font-[300] lg:text-[22px] md:text-[17px] text-[16px] lg:leading-[33px] leading-[24px] mt-[10px]">
          Aprende a controlar tus tarjetas, sin que ellas te controlen a ti.
        </p>
        <img
          src={blogImg1}
          alt="blogImg1"
          className="w-full md:hidden flex h-[210px] object-cover rounded-[20px] mt-[20px]"
        />
        <div className="flex flex-wrap gap-[15px] md:mt-[50px] mt-[20px]">
          <input
            className="flex-grow px-[26px] bg-white border border-[#DDDDDD] py-[10.5px] placeholder:text-[#72778A] rounded-[10px] w-[200px]"
            type="text"
            placeholder="Email"
          />
          <button className="bg-[#155E59] px-[26px] py-[10.5px] text-white md:text-[14px] text-[12px] md:leading-[21px] leading-[18px] font-[600] rounded-[10px]">
            Suscribirme
          </button>
        </div>
      </div>
      <div className="md:flex hidden flex-col gap-[20px] w-[30%]">
        <img
          src={cardImg1}
          alt="cardImg1"
          className="w-full h-[199px] object-cover rounded-[20px] mb-4"
        />
        <h2 className="lg:text-[22px] md:text-[20px] text-[18px] font-[700] lg:leading-[33px] md:leading-[30px] leading-[27px]">
          Maximiza los Beneficios de tu Tarjeta de Crédito
        </h2>
        <div>
          <p
            className="lg:text-[16px] md:text-[15px] text-[14px] font-[300] lg:leading-[24px] md:leading-[22px] leading-[21px] text-[#72778A] overflow-hidden text-ellipsis"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 5,
              WebkitBoxOrient: "vertical",
            }}
          >
            Descubre estrategias efectivas para aprovechar al máximo las
            recompensas, beneficios y ofertas exclusivas de tu tarjeta de
            crédito, y cómo estas pueden mejorar tu economía personal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
