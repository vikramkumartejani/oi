import React, { useState } from "react";
import Hero from "./Hero";
import card1 from "../../assets/card1.svg";
import card2 from "../../assets/card2.svg";
import card3 from "../../assets/card3.svg";

// Sample card data
const cardOptions = [
  {
    id: 1,
    name: "Nombre de la tarjeta",
    image: card1,
    rating: "4.8",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Rubro",
    multiplier: "x1",
    itemVariable: "Item variable",
  },
  {
    id: 2,
    name: "Nombre de la tarjeta",
    image: card2,
    rating: "4.8",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Rubro",
    multiplier: "x2",
    itemVariable: "Item variable",
  },
  {
    id: 3,
    name: "Nombre de la tarjeta",
    image: card3,
    rating: "4.8",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Rubro",
    multiplier: "x3",
    itemVariable: "Item variable",
  },
];

const Modal = ({ isOpen, onClose, onSelect }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white md:max-w-[768px] sm:h-auto h-[400px] mx-[25px] p-8 rounded-[20px] overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Select a Card</h2>
        <div className="flex sm:flex-nowrap flex-wrap justify-center items-center gap-4">
          {cardOptions.map((card) => (
            <div
              key={card.id}
              className="cursor-pointer"
              onClick={() => {
                onSelect(card);
                onClose();
              }}
            >
              <img
                src={card.image}
                alt={card.name}
                className="sm:w-fit w-[100px] h-fit object-cover sm:rounded-[20px] rounded-[10px]"
              />
              <p className="text-center mt-2 font-semibold">{card.name}</p>
            </div>
          ))}
        </div>
        <button
          className="absolute top-0 right-5 mt-6 text-red-500 text-white px-4 py-2 rounded-lg"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="size-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Comparador = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);
  const [selectedCards, setSelectedCards] = useState({
    box1: null,
    box2: null,
    box3: null,
  });

  const handleCardSelect = (card) => {
    setSelectedCards((prevCards) => ({
      ...prevCards,
      [selectedBox]: card,
    }));
  };

  const handleBoxClick = (box) => {
    setSelectedBox(box);
    setIsModalOpen(true);
  };

  const selectedCardsArray = Object.values(selectedCards).filter(Boolean);

  return (
    <div className="pt-[67px]">
      <Hero />
      <section className="lg:px-[100px] md:px-[50px] pt-[25px] pb-[110px] px-[25px]">
        <div className="text-[#061A23]">
          <h3 className="font-[600] md:text-[30px] text-[22px] md:leading-[45px] leading-[33px]">
            Selecciona las tarjetas a comparar
          </h3>
          <p className="mt-[10px] text-[16px] font-[400] leading-[24px]">
            Compara y elige la mejor opción para ti
          </p>
        </div>
        <div className="flex md:flex-row flex-col justify-around gap-[25px] mt-[50px] xl:px-[67px] lg:px-[40px] px-[13px]">
          {["box1", "box2", "box3"].map((box) => (
            <div key={box} className="flex flex-col w-full items-center">
              <div
                className="w-full lg:h-[217px] md:h-[150px] h-[225px] flex flex-col items-center justify-center border-2 border-dotted border-[#72778A] rounded-[20px]"
                style={{ boxShadow: "17px 17px 25px 0px #00000014" }}
              >
                {selectedCards[box] ? (
                  <>
                    <img
                      src={selectedCards[box].image}
                      alt={selectedCards[box].name}
                      className="w-full h-full object-cover rounded-[20px]"
                    />
                  </>
                ) : (
                  <button
                    className="px-[26px] py-[17px] border border-[#155E59] text-[#155E59] text-[14px] font-[600] rounded-[10px]"
                    onClick={() => handleBoxClick(box)}
                  >
                    Agregar Tarjeta
                  </button>
                )}
              </div>
              {selectedCards[box] && (
                <>
                  <p className="mt-[15px] font-[500] text-[#061A23] text-[22px] leading-[33px]">
                    {selectedCards[box].name}
                  </p>
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
                    {selectedCards[box].rating}/5
                  </p>
                  <button className="font-[600] text-[14px] leading-[21px] bg-[#155E59] py-[17px] px-[26px] text-white rounded-[10px] mt-[15px]">
                    Adquierela
                  </button>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        {selectedCardsArray.length >= 3 && (
          <div className="md:mt-[84px] mt-[50px]">
            <table className="w-full  rounded-[4px] border border-[#E0E0E0]">
              <thead className="bg-[#F0F0F0] text-left">
                <tr>
                  <th className="px-[22px] py-[15px] text-[14px] text-[#818181] font-[400] leading-[20px]">
                    Tarjeta 1
                  </th>
                  <th className="px-[22px] py-[15px] text-[14px] text-[#818181] font-[400] leading-[20px]">
                    Tarjeta 2
                  </th>
                  <th className="px-[22px] py-[15px] text-[14px] text-[#818181] font-[400] leading-[20px]">
                    Tarjeta 3
                  </th>
                </tr>
              </thead>
              <tbody>
                {["box1", "box2", "box3"].map((box, idx) => (
                  <>
                    <tr key={idx}>
                      {selectedCards[box] ? (
                        <>
                          <td
                            className="px-[22px] py-[15px] w-full"
                            colSpan={3}
                          >
                            <span className="flex md:flex-row flex-col md:items-center md:gap-[30px] gap-[15px]">
                              <span>
                                <p className="font-[400] text-[14px] leading-[20px] text-[#414141]">
                                  {selectedCards[box].category}
                                </p>
                                <p className="mt-[4px] w-max font-[400] text-[14px] leading-[20px] text-[#1F8B24] bg-[#C5F2C7] rounded-[4px] px-[4px] py-[2px]">
                                  {selectedCards[box].itemVariable}
                                </p>
                              </span>
                              <p className="text-[12px] leading-[18px] w-full text-[#061A23] font-[400]">
                                {selectedCards[box].description}
                              </p>
                            </span>
                          </td>
                        </>
                      ) : (
                        <td
                          className="px-[22px] py-[15px] text-gray-500"
                          colSpan={3}
                        >
                          Seleccionar tarjeta
                        </td>
                      )}
                    </tr>
                    <tr
                      key={idx}
                      className="border-b  font-[400] text-[14px] leading-[20px] text-[#414141]"
                    >
                      <td className="px-[22px] py-[15px]">x1</td>
                      <td className="px-[22px] py-[15px]">x2</td>
                      <td className="px-[22px] py-[15px]">x3</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={handleCardSelect}
      />
    </div>
  );
};

export default Comparador;
