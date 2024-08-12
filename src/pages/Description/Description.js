import React from "react";
import PexelsKampus from "../../assets/pexels-kampus.svg";
import Hero from "../../components/Hero";
import DescriptionTable from "../../components/DescriptionTable";

const Description = () => {
  return (
    <div className="pt-[67px]">
      <Hero
        heading="Reseñas de tarjetas"
        heroImage={PexelsKampus}
        alwaysShowPara
      />
      <DescriptionTable />
    </div>
  );
};

export default Description;
