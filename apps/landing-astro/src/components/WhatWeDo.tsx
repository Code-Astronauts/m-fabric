import { Reveal } from "@/components/Reveal";

const formats = [
  {
    icon: "/images/illus-ellipse1.svg",
    title: "Разработка проектов",
    subtitle: "Создание оригинальных форматов и интеллектуальной собственности",
  },
  {
    icon: "/images/illus-ellipse3.svg",
    title: "Продюсирование шоу",
    subtitle: "От идеи до полной реализации на ведущих площадках",
  },
  {
    icon: "/images/illus-ellipse2.svg",
    title: "Работа с культурным кодом",
    subtitle: "Адаптация классики под современного зрителя",
  },
  {
    icon: "/images/illus-fish.svg",
    title: "Масштабирование",
    subtitle: "Гастроли, франшиза и лицензирование проектов",
  },
];

export function WhatWeDo() {
  return (
    <section id="formats" className="bg-white py-14 lg:py-24 relative">
      <div className="max-w-[1341px] mx-auto px-[38px] sm:px-10 lg:px-[120px]">
        <div className="max-w-[925px]">
          <Reveal>
            <h2 className="font-display font-bold text-dark text-[28px] leading-[1.2] lg:text-[36px] lg:leading-10 mb-8 lg:mb-12">
              ФОРМАТЫ И НАПРАВЛЕНИЯ
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {formats.map((item, i) => (
              <Reveal key={item.title} delay={i * 90 + 100}>
                <div className="border border-accent-grey rounded-xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow h-full">
                  <div className="w-7 h-7">
                    <img src={item.icon} alt="" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-display font-normal text-dark text-[17px] leading-[1.3] lg:text-[20px] lg:leading-7">
                      {item.title}
                    </p>
                    <p className="font-sans text-muted text-[13px] leading-[1.4] lg:text-[14px] lg:leading-5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div style={{ position: "absolute", right: "6%", top: 300, width: 150, height: 100 }} className="sm:block hidden">
          <img
            src="/images/illus-cloud.svg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
}
