import React, { useState } from "react";
import { cardsData } from "../assets/data/creditCardData";

const DropDownItems = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div>
      <div
        onClick={toggleOpen}
        className="flex justify-between items-center border-t cursor-pointer xl:px-[63.7px] md:px-[40px] px-[20.24px] py-[15px]"
      >
        <p className="text-[#72778A] font-[400] text-[16px] leading-[24px]">
          {question}
        </p>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            className="w-[16px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="xl:px-[63.7px] md:px-[40px] px-[20.24px] py-[15px] bg-gray-100">
          <p className="text-[#72778A] text-[14px]">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const BestCreditCards = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = (index) => {
    if (isAnimating) return;

    setIsAnimating(true);

    // Close the dropdown if it's already open
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      // Open the new dropdown
      setOpenIndex(index);
    }

    setIsAnimating(false);
  };

  return (
    <section className="lg:px-[100px] md:px-[50px] pt-[25px] px-[25px]">
      <div className="text-[#061A23] max-w-[786px]">
        <h3 className="font-[600] md:text-[30px] text-[22px] md:leading-[45px] leading-[33px]">
          Mejores tarjetas del <span className="text-[#155E59]"> 2024 </span>
        </h3>
        <p className="mt-[12px] text-[16px] font-[400] leading-[24px]">
          Ofrecemos una amplia gama de artículos sobre productos financieros
          como tarjetas de crédito, débito y préstamos personales. ¿Cómo podemos
          ayudarte a gestionar mejor tu{" "}
          <span className="font-[700]"> economía </span> hoy?
        </p>
      </div>

      {cardsData.slice(0, 3).map((card, cardIndex) => (
        <div
          key={card.id}
          className="w-full flex flex-col bg-white border border-[#E0E0E0] pt-[30px] md:mt-[50px] mt-[30px]"
        >
          <p className="mb-[15px] xl:px-[63.7px] md:px-[40px] px-[20.24px] text-[14px] font-[300] text-[#818181] leading-[20px]">
            Lorem Ipsum is simply dummy text
          </p>
          <div className="flex md:flex-row flex-col xl:gap-[40px] md:gap-[30px] gap-[40px] xl:px-[63.7px] md:px-[40px] px-[20.24px] pb-[30px]">
            <div className="flex flex-col gap-[15px] md:w-[30%]">
              <div className="flex flex-col gap-[15px]">
                <p className="font-[600] text-[22px] leading-[20px] text-[#414141]">
                  {card.name}
                </p>
                <p className="md:mt-[2px] w-max font-[400] text-[14px] leading-[20px] text-[#1F8B24] bg-[#C5F2C7] rounded-[4px] px-[4px] py-[2px]">
                  {card.itemVariable}
                </p>
                <p className="text-[#155E59] flex items-center text-[16px] leading-[24px] font-[400]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#155E59"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 me-[5px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  {card.rating}/5
                </p>
                <div className="mt-[5px]">
                  <img
                    src={card.image}
                    alt="card-img"
                    className="mx-auto md:w-full w-[342.65px] h-fit object-cover"
                  />
                </div>
                <button className="md:flex hidden mt-[15px] text-center justify-center font-[600] text-[14px] leading-[21px] bg-[#155E59] py-[17px] px-[26px] text-white rounded-[10px] ">
                  Call to action
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center font-[400] text-[#72778A] gap-[22px] md:w-[70%]">
              <p className="md:text-[16px] text-[14px] md:leading-[24px] leading-[21px]">
                {card.description}
              </p>

              <div className="border-b w-full flex flex-col gap-[20px]">
                <div className="flex justify-between py-[10px] text-[16px] leading-[24px] px-[15px] border-b border-b-[#E0E0E0]">
                  <p className="">{card.infosHeading.heading1}</p>
                  <p className="text-[#061A23] font-[500]">{card.infoNum1}</p>
                </div>
                <div className="flex justify-between py-[10px] text-[16px] leading-[24px] px-[15px] border-b border-b-[#E0E0E0]">
                  <p className="">{card.infosHeading.heading2}</p>
                  <p className="text-[#061A23] font-[500]">{card.infoNum1}</p>
                </div>
                <div className="flex justify-between py-[10px] text-[16px] leading-[24px] px-[15px] border-b border-b-[#E0E0E0]">
                  <p className="">{card.infosHeading.heading3}</p>
                  <p className="text-[#061A23] font-[500]">{card.infoNum1}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            {Object.entries(card.infos).map(([key, value], index) => (
              <DropDownItems
                key={index}
                question={card.infosHeading[`heading${index + 1}`]}
                answer={value}
                isOpen={openIndex === `${cardIndex}-${index}`}
                toggleOpen={() => handleToggle(`${cardIndex}-${index}`)}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default BestCreditCards;
