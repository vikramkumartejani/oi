import React from "react";
import { cardsData } from "../assets/data/creditCardData";

const DescriptionTable = () => {
  return (
    <section className="lg:px-[100px] md:px-[50px] pt-[25px] pb-[65px] px-[25px]">
      <div className="text-[#061A23] max-w-[786px]">
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
      <div className="md:mt-[84px] mt-[20px] overflow-x-auto">
        <table className="w-full bg-white rounded-[4px] border border-[#E0E0E0]">
          <thead className="bg-[#F0F0F0] text-left">
            <tr>
              <th className="px-[12px] py-[15px] text-[14px] text-[#818181] font-[400] leading-[20px]">
                Nombre
              </th>
              <th className="md:flex hidden px-[12px] py-[15px] text-[14px] text-[#818181] font-[400] leading-[20px]">
                xaaa
              </th>
              <th className="px-[12px] py-[15px] text-[14px] text-[#818181] font-[400] leading-[20px]">
                xbbbb
              </th>
              <th className="px-[12px] py-[15px] text-[14px] text-[#818181] font-[400] leading-[20px]">
                xccc
              </th>
              <th className="md:flex hidden px-[12px] py-[15px] text-[14px] text-[#818181] font-[400] leading-[20px]">
                Call to action
              </th>
              <th className="md:hidden flex px-[12px] py-[15px] text-[14px] text-[#818181] font-[400] leading-[20px]">
                cta
              </th>
            </tr>
          </thead>
          <tbody>
            {cardsData.map((card, idx) => (
              <tr key={card.id} className="border-b">
                <td className="px-[12px] py-[15px] flex flex-row gap-[9.36px] items-center">
                  <span className="md:flex hidden min-w-[75.47px] w-[75.47px] min-h-[47.7px] h-[47.7px]">
                    <img src={card.image} alt="card-img" />
                  </span>
                  <span>
                    <p className="font-[400] text-[14px] leading-[20px] text-[#414141]">
                      {card.name}
                    </p>
                    <p className="md:hidden flex mt-[5px] text-[#155E59] flex items-center text-[12px] leading-[24px] font-[400]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#155E59"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6 me-[5px] w-[17px] h-[17px]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                      </svg>
                      {card.rating}/5
                    </p>
                    <p className="md:mt-[2px] mt-[5px] w-max font-[400] text-[14px] leading-[20px] text-[#1F8B24] bg-[#C5F2C7] rounded-[4px] px-[4px] py-[2px]">
                      {card.itemVariable}
                    </p>
                  </span>
                </td>
                <td className="md:table-cell hidden px-[12px] py-[15px]">
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
                  <p className="font-[400] text-[14px] leading-[20px] text-[#414141]">
                    $0
                  </p>
                </td>
                <td className="px-[12px] py-[15px]">
                  <p className="text-[#1672EC] font-[400] text-[14px] leading-[20px]">
                    {card.newPrice}
                  </p>
                  <p className="text-[#A1A1A1] font-[400]  text-[12px] leading-[18px]">
                    {card.oldPrice}
                  </p>
                </td>
                <td className="px-[12px] py-[15px]">
                  <button className="md:flex hidden font-[600] text-[14px] leading-[21px] bg-[#155E59] py-[12px] px-[26px] text-white rounded-[10px] ">
                    Call to action
                  </button>
                  <button className="md:hidden flex font-[600] text-[14px] leading-[21px] bg-[#155E59] py-[12px] px-[26px] text-white rounded-[10px] ">
                    cta
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
