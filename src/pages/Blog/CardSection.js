import React from "react";
import cardImg1 from "../../assets/card-img1.png";
import cardImg2 from "../../assets/card-img2.png";
import cardImg3 from "../../assets/card-img3.png";

const CardSection = () => {
  const blogs = [
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
  ];

  return (
    <section>
      <div className="relative max-w-[447px] mb-[30px]">
        <input
          className="flex-grow px-[26px] bg-white border border-[#DDDDDD] py-[10.5px] placeholder:text-[#72778A] rounded-[10px] w-full"
          type="text"
          placeholder="Buscar"
        />
        <svg
          className="absolute top-1/2 right-[16px] w-[18px] transform -translate-y-1/2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          color="#111827"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      <div className="md:flex hidden lg:flex-row flex-col gap-[30px]">
        <div className="flex flex-col gap-[20px]">
          <img
            src={cardImg1}
            alt={cardImg1}
            className="w-full h-[417px] object-cover rounded-[20px] mb-4"
          />
          <h2 className="lg:text-[22px] md:text-[20px] text-[18px] font-[700] lg:leading-[33px] md:leading-[30px] leading-[27px]">
            Maximiza los Beneficios de tu Tarjeta de Crédito
          </h2>
          <div>
            <p className="lg:text-[16px] md:text-[15px] text-[14px] font-[300] lg:leading-[24px] md:leading-[22px] leading-[21px] text-[#72778A]">
              Descubre estrategias efectivas para aprovechar al máximo las
              recompensas, beneficios y ofertas exclusivas de tu tarjeta de
              crédito, y cómo estas pueden mejorar tu economía personal.
            </p>
            <a
              href="#"
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
        <div className="grid grid-cols-1 gap-[41px]">
          {blogs.map((blog, index) => (
            <div key={index} className="flex gap-[20px]">
              <div className="flex flex-col gap-[20px]">
                <h2 className="lg:text-[22px] md:text-[20px] text-[18px] font-[700] lg:leading-[33px] md:leading-[30px] leading-[27px]">
                  {blog.title}
                </h2>
                <div>
                  <p
                    className="lg:text-[16px] md:text-[15px] text-[14px] font-[300] lg:leading-[24px] md:leading-[22px] leading-[21px] text-[#72778A] overflow-hidden text-ellipsis"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {blog.description}
                  </p>

                  <a
                    href={blog.link}
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
              <img
                src={blog.image}
                alt={blog.title}
                className="max-w-[221px] h-[193px] object-cover rounded-[20px] mb-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
