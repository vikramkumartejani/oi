import React from "react";
import PexelsKampus from "../../assets/pexels-kampus.svg";
import Hero from "../../components/Hero";
import DescriptionTable from "../../components/DescriptionTable";
import BestCreditCards from "../../components/BestCreditCards";

const Description = () => {
  return (
    <div className="pt-[67px] pb-[110px]">
      <Hero
        heading="Reseñas de tarjetas"
        heroImage={PexelsKampus}
        alwaysShowPara
      />
      <DescriptionTable />
      <BestCreditCards />
    </div>
  );
};

export default Description;
