import React from "react";
import card1 from "../assets/card1.svg";
import card2 from "../assets/card2.svg";
import card3 from "../assets/card3.svg";

const DescriptionTable = () => {
  const cardsData = [
    {
      id: 1,
      name: "Nombre de la tarjeta",
      image: card1,
      rating: "4.8",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      itemVariable: "Item variable",
      oldPrice: "$234",
      newPrice: "$300",
    },
    {
      id: 2,
      name: "Nombre de la tarjeta",
      image: card2,
      rating: "4.8",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      itemVariable: "Item variable",
      oldPrice: "$234",
      newPrice: "$300",
    },
    {
      id: 3,
      name: "Nombre de la tarjeta",
      image: card3,
      rating: "4.8",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      itemVariable: "Item variable",
      oldPrice: "$234",
      newPrice: "$300",
    },
    {
      id: 3,
      name: "Nombre de la tarjeta",
      image: card1,
      rating: "4.8",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      itemVariable: "Item variable",
      oldPrice: "$234",
      newPrice: "$300",
    },
  ];
  return (
    <section className="lg:px-[100px] md:px-[50px] pt-[25px] pb-[110px] px-[25px]">
      <div className="text-[#061A23]">
        <h3 className="font-[600] md:text-[30px] text-[22px] md:leading-[45px] leading-[33px]">
          Un claim, <span className="text-[#155E59]"> recomendaciones </span> de
          relleno
        </h3>
        <p className="mt-[12px] text-[14px] font-[400] leading-[21px]">
          Ofrecemos una amplia gama de artículos sobre productos financieros
          como tarjetas de crédito, débito y préstamos personales. ¿Cómo podemos
          ayudarte a gestionar mejor tu{" "}
          <span className="font-[700]"> economía </span> hoy?
        </p>
      </div>
      <div className="md:mt-[84px] mt-[50px] overflow-x-auto">
        <table className="w-full bg-white rounded-[4px] border border-[#E0E0E0]">
          <thead className="bg-[#F0F0F0] text-left">
            <tr>
              <th className="px-[12px] py-[15px] text-[14px] text-[#818181] font-[400] leading-[20px]">
                Nombre
              </th>
              <th className="px-[12px] py-[15px] text-[14px] text-[#818181] font-[400] leading-[20px]">
                xaaa
              </th>
              <th className="px-[12px] py-[15px] text-[14px] text-[#818181] font-[400] leading-[20px]">
                xbbbb
              </th>
              <th className="px-[12px] py-[15px] text-[14px] text-[#818181] font-[400] leading-[20px]">
                xccc
              </th>
              <th className="px-[12px] py-[15px] text-[14px] text-[#818181] font-[400] leading-[20px]">
                Call to action
              </th>
            </tr>
          </thead>
          <tbody>
            {cardsData.map((card, idx) => (
              <tr key={idx}>
                <td className="px-[12px] py-[15px] flex flex-row gap-[9.36px] items-center">
                  <span className="min-w-[75.47px] w-[75.47px] min-h-[47.7px] h-[47.7px]">
                    <img src={card.image} alt="card-img" />
                  </span>
                  <span>
                    <p className="font-[400] text-[14px] leading-[20px] text-[#414141]">
                      {card.name}
                    </p>
                    <p className="mt-[2px] w-max font-[400] text-[14px] leading-[20px] text-[#1F8B24] bg-[#C5F2C7] rounded-[4px] px-[4px] py-[2px]">
                      {card.itemVariable}
                    </p>
                  </span>
                </td>
                <td className="px-[12px] py-[15px]">
                  <p className="text-[#155E59] flex items-center text-[16px] leading-[24px] font-[400]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#155E59"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6 me-[5px]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    {card.rating}/5
                  </p>
                </td>
                <td className="px-[12px] py-[15px]">
                  <p>$0</p>
                </td>
                <td className="px-[12px] py-[15px]">
                  <p className="text-[#1672EC]">{card.newPrice}</p>
                  <p className="text-[#A1A1A1] text-[12px] leading-[18px]">
                    {card.oldPrice}
                  </p>
                </td>
                <td className="px-[12px] py-[15px]">
                  <button className="font-[600] text-[14px] leading-[21px] bg-[#155E59] py-[12px] px-[26px] text-white rounded-[10px] ">
                    Call to action
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DescriptionTable;
