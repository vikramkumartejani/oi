import React from "react";
import FinancialSection from "./FinancialSection";
import Newsletter from "../../components/Newsletter";
import CardsWithPagination from "../../components/CardsWithPagination";

const Home = () => {
  return (
    <div className="">
      <FinancialSection />
      <Newsletter />
      <section className="lg:px-[100px] md:px-[50px] px-[25px] md:mb-[110px] mb-[100px]">
        <div className="mb-[20px] flex flex-col gap-[12px]">
          <h1 className="md:text-[30px] text-[24px] md:leading-[45px] leading-[36px] font-[600]">
            Conviértete en un <span className="text-[#155E59]">experto</span>{" "}
            finanzas
          </h1>
          <p className="text-[#061A23] font-[400] md:text-[16px] text-[14px] md:leading-[24px] leading-[21px]">
            Con nuestro daily shot de finanzas
          </p>
        </div>
        <CardsWithPagination />
      </section>
    </div>
  );
};

export default Home;
