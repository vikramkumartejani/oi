import React from "react";
import FinancialSection from "./FinancialSection";
import Newsletter from "../../components/Newsletter";
import CardsWithPagination from "../../components/CardsWithPagination";

const Home = () => {
  return (
    <div className="pt-[67px]">
      <FinancialSection />
      <Newsletter />
      <section className="lg:px-[100px] md:px-[50px] px-[25px] md:mb-[110px] mb-[100px]">
        <div className="md:flex hidden mb-[20px] flex flex-col gap-[12px]">
          <h1 className="md:text-[30px] text-[24px] md:leading-[45px] leading-[36px] font-[600]">
            Conviértete en un <span className="text-[#155E59]">experto</span>
            finanzas
          </h1>
          <p className="text-[#061A23] font-[400] md:text-[16px] text-[14px] md:leading-[24px] leading-[21px]">
            Con nuestro daily shot de finanzas
          </p>
        </div>
        <div className="md:hidden flex mb-[40px] flex flex-col gap-[10px]">
          <h1 className="md:text-[30px] text-[24px] md:leading-[45px] leading-[36px] font-[500]">
            Nuestro blog financiero, el más{" "}
            <span className="font-[700]">importante</span> de la web
          </h1>
          <p className="text-[#061A23] font-[300] md:text-[16px] text-[14px] md:leading-[24px] leading-[21px]">
            Aprende a controlar tus tarjetas, sin que ellas te controlen a ti.
          </p>
        </div>
        <CardsWithPagination />
      </section>
    </div>
  );
};

export default Home;
