import React, { useEffect, useState } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import cardImg1 from "../assets/card-img1.png";
import cardImg2 from "../assets/card-img2.png";
import cardImg3 from "../assets/card-img3.png";

const articles = [
  {
    title: "¿QUÉ HAGO SI MIS INGRESOS BAJAN?",
    description:
      "Es el momento más temido por todos, en algún momento esta situación nos puede llegar a alcanzar, ya sea porque perdimos un cliente y tenemos un cambio de trabajo pero no te preocupes aquí te compartimos unos tips.",
    image: cardImg1,
    link: "#",
  },
  {
    title: "LAS 7 MEJORES APPS PARA CONTROLAR TUS GASTOS",
    description:
      "En el camino a la libertad financiera nunca está de más hacernos de herramientas que nos hagan este viaje más sencillo. A continuación te compartimos las Apps indispensables para llegar a buen puerto.",
    image: cardImg2,
    link: "#",
  },
  {
    title: "LA ECONOMÍA DE TIKTOK",
    description:
      "TikTok es la red social de videos cortos que arrasa entre los jóvenes y que ha cambiado los hábitos de consumo de entretenimiento. Descubre cómo es que Tik Tok gana dinero.",
    image: cardImg3,
    link: "#",
  },
  {
    title: "LAS 7 MEJORES APPS PARA CONTROLAR TUS GASTOS",
    description:
      "En el camino a la libertad financiera nunca está de más hacernos de herramientas que nos hagan este viaje más sencillo. A continuación te compartimos las Apps indispensables para llegar a buen puerto.",
    image: cardImg2,
    link: "#",
  },
  {
    title: "LA ECONOMÍA DE TIKTOK",
    description:
      "TikTok es la red social de videos cortos que arrasa entre los jóvenes y que ha cambiado los hábitos de consumo de entretenimiento. Descubre cómo es que Tik Tok gana dinero.",
    image: cardImg3,
    link: "#",
  },
  {
    title: "¿QUÉ HAGO SI MIS INGRESOS BAJAN?",
    description:
      "Es el momento más temido por todos, en algún momento esta situación nos puede llegar a alcanzar, ya sea porque perdimos un cliente y tenemos un cambio de trabajo pero no te preocupes aquí te compartimos unos tips.",
    image: cardImg1,
    link: "#",
  },
  {
    title: "¿QUÉ HAGO SI MIS INGRESOS BAJAN?",
    description:
      "Es el momento más temido por todos, en algún momento esta situación nos puede llegar a alcanzar, ya sea porque perdimos un cliente y tenemos un cambio de trabajo pero no te preocupes aquí te compartimos unos tips.",
    image: cardImg1,
    link: "#",
  },
  {
    title: "LAS 7 MEJORES APPS PARA CONTROLAR TUS GASTOS",
    description:
      "En el camino a la libertad financiera nunca está de más hacernos de herramientas que nos hagan este viaje más sencillo. A continuación te compartimos las Apps indispensables para llegar a buen puerto.",
    image: cardImg2,
    link: "#",
  },
  {
    title: "LA ECONOMÍA DE TIKTOK",
    description:
      "TikTok es la red social de videos cortos que arrasa entre los jóvenes y que ha cambiado los hábitos de consumo de entretenimiento. Descubre cómo es que Tik Tok gana dinero.",
    image: cardImg3,
    link: "#",
  },
  {
    title: "¿QUÉ HAGO SI MIS INGRESOS BAJAN?",
    description:
      "Es el momento más temido por todos, en algún momento esta situación nos puede llegar a alcanzar, ya sea porque perdimos un cliente y tenemos un cambio de trabajo pero no te preocupes aquí te compartimos unos tips.",
    image: cardImg1,
    link: "#",
  },

  {
    title: "LA ECONOMÍA DE TIKTOK",
    description:
      "TikTok es la red social de videos cortos que arrasa entre los jóvenes y que ha cambiado los hábitos de consumo de entretenimiento. Descubre cómo es que Tik Tok gana dinero.",
    image: cardImg3,
    link: "#",
  },
  {
    title: "LAS 7 MEJORES APPS PARA CONTROLAR TUS GASTOS",
    description:
      "En el camino a la libertad financiera nunca está de más hacernos de herramientas que nos hagan este viaje más sencillo. A continuación te compartimos las Apps indispensables para llegar a buen puerto.",
    image: cardImg2,
    link: "#",
  },
  {
    title: "LA ECONOMÍA DE TIKTOK",
    description:
      "TikTok es la red social de videos cortos que arrasa entre los jóvenes y que ha cambiado los hábitos de consumo de entretenimiento. Descubre cómo es que Tik Tok gana dinero.",
    image: cardImg3,
    link: "#",
  },
  {
    title: "¿QUÉ HAGO SI MIS INGRESOS BAJAN?",
    description:
      "Es el momento más temido por todos, en algún momento esta situación nos puede llegar a alcanzar, ya sea porque perdimos un cliente y tenemos un cambio de trabajo pero no te preocupes aquí te compartimos unos tips.",
    image: cardImg1,
    link: "#",
  },
  {
    title: "LAS 7 MEJORES APPS PARA CONTROLAR TUS GASTOS",
    description:
      "En el camino a la libertad financiera nunca está de más hacernos de herramientas que nos hagan este viaje más sencillo. A continuación te compartimos las Apps indispensables para llegar a buen puerto.",
    image: cardImg2,
    link: "#",
  },
  {
    title: "¿QUÉ HAGO SI MIS INGRESOS BAJAN?",
    description:
      "Es el momento más temido por todos, en algún momento esta situación nos puede llegar a alcanzar, ya sea porque perdimos un cliente y tenemos un cambio de trabajo pero no te preocupes aquí te compartimos unos tips.",
    image: cardImg1,
    link: "#",
  },
  {
    title: "LAS 7 MEJORES APPS PARA CONTROLAR TUS GASTOS",
    description:
      "En el camino a la libertad financiera nunca está de más hacernos de herramientas que nos hagan este viaje más sencillo. A continuación te compartimos las Apps indispensables para llegar a buen puerto.",
    image: cardImg2,
    link: "#",
  },
  {
    title: "LA ECONOMÍA DE TIKTOK",
    description:
      "TikTok es la red social de videos cortos que arrasa entre los jóvenes y que ha cambiado los hábitos de consumo de entretenimiento. Descubre cómo es que Tik Tok gana dinero.",
    image: cardImg3,
    link: "#",
  },
  {
    title: "LAS 7 MEJORES APPS PARA CONTROLAR TUS GASTOS",
    description:
      "En el camino a la libertad financiera nunca está de más hacernos de herramientas que nos hagan este viaje más sencillo. A continuación te compartimos las Apps indispensables para llegar a buen puerto.",
    image: cardImg2,
    link: "#",
  },
  {
    title: "LA ECONOMÍA DE TIKTOK",
    description:
      "TikTok es la red social de videos cortos que arrasa entre los jóvenes y que ha cambiado los hábitos de consumo de entretenimiento. Descubre cómo es que Tik Tok gana dinero.",
    image: cardImg3,
    link: "#",
  },
  {
    title: "¿QUÉ HAGO SI MIS INGRESOS BAJAN?",
    description:
      "Es el momento más temido por todos, en algún momento esta situación nos puede llegar a alcanzar, ya sea porque perdimos un cliente y tenemos un cambio de trabajo pero no te preocupes aquí te compartimos unos tips.",
    image: cardImg1,
    link: "#",
  },
  {
    title: "¿QUÉ HAGO SI MIS INGRESOS BAJAN?",
    description:
      "Es el momento más temido por todos, en algún momento esta situación nos puede llegar a alcanzar, ya sea porque perdimos un cliente y tenemos un cambio de trabajo pero no te preocupes aquí te compartimos unos tips.",
    image: cardImg1,
    link: "#",
  },
  {
    title: "LAS 7 MEJORES APPS PARA CONTROLAR TUS GASTOS",
    description:
      "En el camino a la libertad financiera nunca está de más hacernos de herramientas que nos hagan este viaje más sencillo. A continuación te compartimos las Apps indispensables para llegar a buen puerto.",
    image: cardImg2,
    link: "#",
  },
  {
    title: "LA ECONOMÍA DE TIKTOK",
    description:
      "TikTok es la red social de videos cortos que arrasa entre los jóvenes y que ha cambiado los hábitos de consumo de entretenimiento. Descubre cómo es que Tik Tok gana dinero.",
    image: cardImg3,
    link: "#",
  },
  {
    title: "¿QUÉ HAGO SI MIS INGRESOS BAJAN?",
    description:
      "Es el momento más temido por todos, en algún momento esta situación nos puede llegar a alcanzar, ya sea porque perdimos un cliente y tenemos un cambio de trabajo pero no te preocupes aquí te compartimos unos tips.",
    image: cardImg1,
    link: "#",
  },

  {
    title: "LA ECONOMÍA DE TIKTOK",
    description:
      "TikTok es la red social de videos cortos que arrasa entre los jóvenes y que ha cambiado los hábitos de consumo de entretenimiento. Descubre cómo es que Tik Tok gana dinero.",
    image: cardImg3,
    link: "#",
  },
  {
    title: "LAS 7 MEJORES APPS PARA CONTROLAR TUS GASTOS",
    description:
      "En el camino a la libertad financiera nunca está de más hacernos de herramientas que nos hagan este viaje más sencillo. A continuación te compartimos las Apps indispensables para llegar a buen puerto.",
    image: cardImg2,
    link: "#",
  },
  {
    title: "LA ECONOMÍA DE TIKTOK",
    description:
      "TikTok es la red social de videos cortos que arrasa entre los jóvenes y que ha cambiado los hábitos de consumo de entretenimiento. Descubre cómo es que Tik Tok gana dinero.",
    image: cardImg3,
    link: "#",
  },
  {
    title: "¿QUÉ HAGO SI MIS INGRESOS BAJAN?",
    description:
      "Es el momento más temido por todos, en algún momento esta situación nos puede llegar a alcanzar, ya sea porque perdimos un cliente y tenemos un cambio de trabajo pero no te preocupes aquí te compartimos unos tips.",
    image: cardImg1,
    link: "#",
  },
  {
    title: "LAS 7 MEJORES APPS PARA CONTROLAR TUS GASTOS",
    description:
      "En el camino a la libertad financiera nunca está de más hacernos de herramientas que nos hagan este viaje más sencillo. A continuación te compartimos las Apps indispensables para llegar a buen puerto.",
    image: cardImg2,
    link: "#",
  },
  // ... Add more articles as needed
];

const articlesPerPage = 3; // Define how many articles you want to display per page

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const [maxVisiblePages, setMaxVisiblePages] = useState(5); // Default max visible pages

  const handleResize = () => {
    if (window.innerWidth < 480) {
      setMaxVisiblePages(1); // Show fewer pages on smaller screens
    } else if (window.innerWidth < 768) {
      setMaxVisiblePages(5); // Show a moderate number of pages on medium screens
    } else {
      setMaxVisiblePages(7); // Show more pages on larger screens
    }
  };

  useEffect(() => {
    handleResize(); // Call once to set the initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderPageNumbers = () => {
    const pages = [];
    const middleStart = Math.max(
      Math.min(
        currentPage - Math.floor(maxVisiblePages / 2),
        totalPages - maxVisiblePages + 1
      ),
      1
    );
    const middleEnd = Math.min(middleStart + maxVisiblePages - 1, totalPages);

    if (middleStart > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => setCurrentPage(1)}
          className={`py-[10px] px-[15.5px] border border-[#E3DDD8] ${
            currentPage === 1
              ? "bg-[#155E59] text-white"
              : "bg-white text-[#4F4844]"
          } rounded-l-[10px]`}
        >
          1
        </button>
      );
    }

    if (middleStart > 2) {
      pages.push(
        <span
          key="dots-start"
          className="sm:py-[10px] py-[10.7px] sm:px-[15.5px] px-[10px] border border-[#E3DDD8] bg-white text-[#4F4844]"
        >
          ...
        </span>
      );
    }

    for (let i = middleStart; i <= middleEnd; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`py-[10px] px-[15.5px] border border-[#E3DDD8] ${
            currentPage === i
              ? "bg-[#155E59] text-white"
              : "bg-white text-[#4F4844]"
          } ${i === middleStart && i === 1 ? "rounded-l-[10px]" : ""} ${
            i === middleEnd && i === totalPages ? "rounded-r-[10px]" : ""
          }`}
        >
          {i}
        </button>
      );
    }

    if (middleEnd < totalPages - 1) {
      pages.push(
        <span
          key="dots-end"
          className="sm:py-[10px] py-[10.7px] sm:px-[15.5px] px-[10px] border border-[#E3DDD8] bg-white text-[#4F4844]"
        >
          ...
        </span>
      );
    }

    if (middleEnd < totalPages) {
      pages.push(
        <button
          key={totalPages}
          onClick={() => setCurrentPage(totalPages)}
          className={`py-[10px] px-[15.5px] border border-[#E3DDD8] rounded-r-[10px] ${
            currentPage === totalPages
              ? "bg-[#155E59] text-white"
              : "bg-white text-[#4F4844]"
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex flex-wrap justify-between items-center mt-[30px] gap-1 border-t pt-[20px]">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-[#155E59] md:h-auto h-[45px] text-white sm:py-2 sm:px-4 px-3 rounded-lg flex items-center font-[600] text-[14px] leading-[21px] gap-[15px]"
      >
        <FiArrowLeft />
        <span className="md:flex hidden">Anterior</span>
      </button>
      <div className="rounded-[10px] overflow-hidden">
        {renderPageNumbers()}
      </div>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-[#155E59] md:h-auto h-[45px] text-white sm:py-2 sm:px-4 px-3 rounded-lg flex items-center gap-[15px] font-[600] text-[14px] leading-[21px]"
      >
        <span className="md:flex hidden">Siguiente</span>
        <FiArrowRight />
      </button>
    </div>
  );
};

const CardsWithPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  // Calculate the start and end index of the articles to be displayed
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = articles.slice(startIndex, endIndex);

  return (
    <div className="mt-[30px]">
      <section className="grid grid-cols-1 md:grid-cols-3 md:gap-[30px] gap-[40px]">
        {currentArticles.map((article, index) => (
          <div key={index} className="flex flex-col gap-[20px]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-[250px] object-cover rounded-[20px] mb-4"
            />
            <h2 className="lg:text-[22px] md:text-[20px] text-[18px] font-[700] lg:leading-[33px] md:leading-[30px] leading-[27px]">
              {article.title}
            </h2>
            <div>
              <p
                className="lg:text-[16px] md:text-[15px] text-[14px] font-[300] lg:leading-[24px] md:leading-[22px] leading-[21px] text-[#72778A] overflow-hidden text-ellipsis"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 7,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {article.description}
              </p>
              <a
                href={article.link}
                className="mt-[33px] text-[#061A23] font-[600] text-[16px] leading-[24px] flex items-center gap-[33px]"
              >
                Leer más{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </section>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default CardsWithPagination;
