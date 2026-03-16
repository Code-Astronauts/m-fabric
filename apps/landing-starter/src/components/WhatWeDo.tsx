import Image from "next/image";

export function WhatWeDo() {
  const items = [
    {
      icon: "/images/icon-layers.svg",
      title: "Разработка проектов",
      description: "Создание оригинальных форматов\nи интеллектуальной собственности",
    },
    {
      icon: "/images/icon-film.svg",
      title: "Продюсирование шоу",
      description: "От идеи до полной реализации на ведущих площадках",
    },
    {
      icon: "/images/icon-globe.svg",
      title: "Масштабирование",
      description: "Гастроли, франшиза и лицензирование проектов",
    },
    {
      icon: "/images/icon-book.svg",
      title: "Работа с культурным кодом",
      description: "Адаптация классики под современного зрителя",
    },
  ];

  return (
    <section id="whatwedo" className="px-6 lg:px-10 py-16 lg:py-20">
      {/* Heading */}
      <div className="flex flex-col gap-4 mb-10 lg:mb-14 max-w-[674px]">
        <p className="font-sans font-semibold text-blue-900 text-[16px] tracking-[1.676px] uppercase leading-[25px] opacity-80">
          что мы делаем?
        </p>
        <h2 className="font-display font-extrabold text-black-800 text-3xl sm:text-4xl lg:text-[48px] leading-[1.15] tracking-[-1.26px]">
          Форматы и направления
        </h2>
      </div>

      {/* Cards 2x2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-black/2 border border-black/8 rounded-3xl p-10 lg:p-[51px] min-h-[260px] lg:min-h-[312px] flex flex-col gap-6"
          >
            {/* Icon */}
            <div className="w-[66px] h-[66px] rounded-2xl bg-[rgba(72,117,255,0.15)] flex items-center justify-center">
              <Image
                src={item.icon}
                alt=""
                width={33}
                height={33}
                aria-hidden="true"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-3">
              <h3 className="font-display font-bold text-black-800 text-xl lg:text-[28px] leading-[42px] tracking-[-0.28px]">
                {item.title}
              </h3>
              <p className="font-sans text-grey-700 text-base lg:text-[20px] leading-8 whitespace-pre-line">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
