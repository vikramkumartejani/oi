import React, { useState } from "react";
import backgroundImg from "../../assets/bg-gradient.svg";
import backgroundImgMobile from "../../assets/bg-gradient-mobile.svg";
import creditCardImg from "../../assets/credit-card.svg";
import tabImg1 from "../../assets/tab-img1.jpg";

const tabData = {
  "Tarjetas de Crédito": {
    title: "Tarjetas de crédito",
    description: "Encuentra la tarjeta perfecta para ti",
    content: `Las tarjetas de crédito son excelentes herramientas financieras que pueden simplificar tu vida y mejorar tu salud económica.
              Existen tarjetas especializadas que ofrecen recompensas como cashback, meses sin intereses, garantías extendidas en tus compras,
              así como seguros médicos y de viajes. Sin embargo, elegir la tarjeta correcta es crucial. En OiMoney, nos dedicamos a realizar
              un análisis exhaustivo para brindarte una recomendación única y personalizada que se adapte a tu situación y necesidades.`,
  },
  Bancos: {
    title: "Bancos",
    description: "Encuentra el banco perfecto para ti",
    content:
      "Aquí puedes añadir el contenido relacionado con bancos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugit nisi ex praesentium tenetur voluptatum sapiente voluptatibus eligendi quidem. Cum dicta atque harum reprehenderit optio id iste tempora repellendus inventore!",
  },
  Viajes: {
    title: "Viajes",
    description: "Planifica tus viajes con las mejores opciones",
    content:
      "Aquí puedes añadir el contenido relacionado con viajes. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugit nisi ex praesentium tenetur voluptatum sapiente voluptatibus eligendi quidem. Cum dicta atque harum reprehenderit optio id iste tempora repellendus inventore!",
  },
  "Negocios Pequeños": {
    title: "Negocios Pequeños",
    description: "Planifica tus Negocios Pequeños con las mejores opciones",
    content:
      "Aquí puedes añadir el contenido relacionado con viajes. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugit nisi ex praesentium tenetur voluptatum sapiente voluptatibus eligendi quidem. Cum dicta atque harum reprehenderit optio id iste tempora repellendus inventore!",
  },
  "Préstamos personales": {
    title: "Préstamos personales",
    description: "Planifica tus Préstamos personales con las mejores opciones",
    content:
      "Aquí puedes añadir el contenido relacionado con viajes. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugit nisi ex praesentium tenetur voluptatum sapiente voluptatibus eligendi quidem. Cum dicta atque harum reprehenderit optio id iste tempora repellendus inventore!",
  },
  Seguros: {
    title: "Seguros",
    description: "Planifica tus Seguros con las mejores opciones",
    content:
      "Aquí puedes añadir el contenido relacionado con viajes. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugit nisi ex praesentium tenetur voluptatum sapiente voluptatibus eligendi quidem. Cum dicta atque harum reprehenderit optio id iste tempora repellendus inventore!",
  },
  Hipoteca: {
    title: "Hipoteca",
    description: "Planifica tus Hipoteca con las mejores opciones",
    content:
      "Aquí puedes añadir el contenido relacionado con viajes. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugit nisi ex praesentium tenetur voluptatum sapiente voluptatibus eligendi quidem. Cum dicta atque harum reprehenderit optio id iste tempora repellendus inventore!",
  },
  Investing: {
    title: "Investing",
    description: "Planifica tus Investing con las mejores opciones",
    content:
      "Aquí puedes añadir el contenido relacionado con viajes. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugit nisi ex praesentium tenetur voluptatum sapiente voluptatibus eligendi quidem. Cum dicta atque harum reprehenderit optio id iste tempora repellendus inventore!",
  },
  "Préstamos Estudiantiles": {
    title: "Préstamos Estudiantiles",
    description:
      "Planifica tus Préstamos Estudiantiles con las mejores opciones",
    content:
      "Aquí puedes añadir el contenido relacionado con viajes. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugit nisi ex praesentium tenetur voluptatum sapiente voluptatibus eligendi quidem. Cum dicta atque harum reprehenderit optio id iste tempora repellendus inventore!",
  },
};

const FinancialSection = () => {
  const [activeTab, setActiveTab] = useState("Tarjetas de Crédito");

  return (
    <div className="relative text-white">
      <img
        className="md:flex hidden absolute w-full md:h-[91vh] h-screen object-cover z-[1]"
        src={backgroundImg}
        alt="background-img"
      />
      <img
        className="md:hidden flex absolute w-full md:h-[91vh] h-screen object-cover z-[1]"
        src={backgroundImgMobile}
        alt="background-img"
      />
      <div className="relative flex md:flex-row flex-col justify-between lg:px-[80px] md:px-[50px] px-[25px] z-[2]">
        <div className="flex flex-col justify-center md:py-[100px] py-[40px] text-left md:w-[60%] w-full md:gap-0 gap-[10px]">
          <h1 className="lg:text-[45px] md:text-[31px] text-[24px] font-[500] lg:leading-[65px] md:leading-[45px] leading-[36px]">
            Las decisiones financieras más inteligentes con{" "}
            <span className="font-[700]">Oi Money</span>
          </h1>
          <p className="font-[300] lg:text-[22px] md:text-[17px] text-[16px] lg:leading-[33px] leading-[24px]">
            Análisis exhaustivo y honesto para tu cuidar tus finanzas.
          </p>
        </div>
        <div className="flex md:items-start items-center justify-center md:w-auto w-full">
          <img
            className="md:absolute md:right-0 z-[-1] lg:w-auto w-[350px]"
            src={creditCardImg}
            alt="credit-card"
          />
        </div>
      </div>

      <nav className="relative xl:mx-[80px] lg:mx-[50px] mx-[25px] z-[2] md:mt-0 mt-[50px]">
        <div className="flex justify-center bg-white rounded-[20px] p-[19px] border-[#DDDDDD] border">
          <ul className="flex lg:flex-row flex-col">
            {Object.keys(tabData).map((tab) => (
              <li
                key={tab}
                className={`p-[10px] cursor-pointer xl:text-[16px] text-center lg:text-[15px] text-[16px] font-[400] leading-[16px] ${
                  activeTab === tab
                    ? "bg-white text-[#155E59] border-b-4 border-b-[#155E59]"
                    : "bg-white text-[#72778A]"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section className="relative flex justify-between items-center bg-white text-gray-700 rounded-[20px] mt-[20px] md:mb-[80px] mb-[50px] xl:mx-[80px] lg:mx-[50px] mx-[25px] z-[2]">
        <div
          className="flex xl:flex-row flex-col md:px-[48px] px-[15px] md:py-[42px] py-[20px] gap-[44px]"
          style={{ boxShadow: "0px 15px 50px 0px #0000000D" }}
        >
          <div className="xl:w-1/2 w-full flex flex-col gap-[30px]">
            <div className="flex flex-row gap-[12px]">
              <div className="block xl:h-[90%] h-[50px] min-w-[4px] w-[4px] bg-[#155E59] my-auto"></div>
              <div className="flex flex-col">
                <h2 className="md:text-[30px] text-[22px] font-[500] text-[#061A23] md:leading-[45px] leading-[33px]">
                  {tabData[activeTab].title}
                </h2>
                <p className="md:text-[16px] text-[14px] font-[400] text-[#155E59] md:leading-[24px] leading-[21px]">
                  {tabData[activeTab].description}
                </p>
              </div>
            </div>
            <p className="text-[#72778A] text-[14px] font-[300] leading-[21px]">
              {tabData[activeTab].content}
            </p>
            <div className="flex gap-[15px] md:text-[14px] text-[12px] md:leading-[21px] leading-[18px] font-[600] flex-wrap">
              <button className="bg-[#155E59] text-white py-[19px] px-[26px] rounded-[10px]">
                Encuentra tu tarjeta
              </button>
              <button className="bg-white text-[#155E59] py-[19px] px-[26px] border border-[#155E59] rounded-[10px]">
                Compara tarjetas
              </button>
            </div>
          </div>
          <div className="xl:w-1/2 w-[70%] xl:mx-0 mx-auto md:flex hidden">
            <img
              src={tabImg1}
              alt="People using credit card"
              className="rounded-[20px] w-min"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialSection;
