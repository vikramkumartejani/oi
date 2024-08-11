import React from "react";
import Hero from "./Hero";
import CardSection from "./CardSection";
import CardsWithPagination from "../../components/CardsWithPagination";

const Blog = () => {
  return (
    <div className="pt-[67px] lg:px-[100px] md:px-[50px] px-[25px] md:pb-[110px] pb-[100px]">
      <Hero />
      <CardSection />
      <CardsWithPagination />
    </div>
  );
};

export default Blog;
