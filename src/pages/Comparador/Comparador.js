import React, { useState } from "react";
import Hero from "./Hero";
import card1 from "../../assets/card1.svg";
import card2 from "../../assets/card2.svg";
import card3 from "../../assets/card3.svg";

// Sample card data
const cardOptions = [
  {
    id: 1,
    name: "Card 1",
    image: card1,
    rating: "★★★★☆",
  },
  {
    id: 2,
    name: "Card 2",
    image: card2,
    rating: "★★★☆☆",
  },
  {
    id: 3,
    name: "Card 3",
    image: card3,
    rating: "★★★★★",
  },
];

const Modal = ({ isOpen, onClose, onSelect }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white md:max-w-[768px] md:h-auto h-[70vh] mx-[25px] p-8 rounded-[20px] overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Select a Card</h2>
        <div className="flex flex-wrap justify-center items-center items-center gap-4">
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
                className="md:w-fit w-[200px] h-fit object-cover rounded-[20px]"
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
            class="size-7"
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

  return (
    <div className="pt-[67px]">
      <Hero />
      <section className="lg:px-[100px] md:px-[50px] md:px-[50px] pt-[25px] pb-[110px] px-[25px]">
        <div className="text-[#061A23]">
          <h3 className="font-[600] md:text-[30px] text-[22px] md:leading-[45px] leading-[33px]">
            Selecciona las tarjetas a comparar
          </h3>
          <p className=" mt-[10px] text-[16px] font-[400] leading-[24px]">
            Compara y elige la mejor opción para ti
          </p>
        </div>
        <div className="flex md:flex-row flex-col justify-around gap-[25px] mt-[50px]">
          {["box1", "box2", "box3"].map((box) => (
            <div key={box} className="flex flex-col w-full items-center">
              <div
                className="w-full h-[217px] flex flex-col items-center justify-center border-2 border-dotted border-[#72778A] rounded-[20px]"
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
                  <p className="mt-2 font-semibold">
                    {selectedCards[box].name}
                  </p>
                  <p className="text-yellow-500">{selectedCards[box].rating}</p>
                </>
              )}
            </div>
          ))}
        </div>
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
