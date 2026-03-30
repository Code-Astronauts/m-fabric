import WaveHero from "@/components/WaveHero";
import { Reveal } from "@/components/Reveal";

const partnerCards = [
  {
    title: "Инвесторы",
    text: "Портфель масштабируемых проектов с долгосрочным циклом жизни. Доказанный спрос и растущая аудитория из сезона в сезон.",
  },
  {
    title: "Государственные институции",
    text: "Развитие культурной среды и работа с национальным наследием. Проекты с высоким социальным и образовательным значением.",
  },
  {
    title: "Бренды",
    text: "Репутационный капитал и семейная аудитория.",
  },
  {
    title: "Площадки",
    text: "Сильный контент с прогнозируемым спросом.",
  },
];

export function Partnership({ heroBgMirroredSrc }: { heroBgMirroredSrc: string }) {
  return (
    <section id="partnership" className="relative bg-navy py-14 lg:py-24">
      <div className="absolute inset-0 pointer-events-none z-0 bg-navy">
        <WaveHero
          src={heroBgMirroredSrc}
          amplitudeScale={0.3}
          riseRate={0.06}
          fallRate={0.01}
          className="opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-[1341px] mx-auto px-[38px] sm:px-10 lg:px-[120px]">
        <div className="max-w-[925px]">
          <Reveal>
            <p className="font-sans text-label-dark text-[13px] leading-[1.4] tracking-[1.4px] uppercase mb-4 lg:mb-5">
              Партнёрство
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="font-display font-bold text-white text-[28px] leading-[1.2] lg:text-[36px] lg:leading-10 mb-4 lg:mb-5">
              Эффективное и долгосрочное сотрудничество с инвесторами, институциями и брендами
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="font-sans text-light-muted text-[15px] leading-[1.5] lg:text-[18px] lg:leading-7 max-w-[768px] mb-8 lg:mb-12">
              Мы работаем с партнёрами как с соавторами, находя нестандартные решения на стыке искусства, технологий и контента, превращая каждую коллаборацию в самостоятельный опыт и точку открытия.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {partnerCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 80 + 300}>
                <div className="bg-white/10 border border-white/10 rounded-xl p-6 lg:p-8 flex flex-col gap-3 lg:gap-4 h-full">
                  <h3 className="font-display font-bold text-white text-[18px] leading-[1.3] lg:text-[20px] lg:leading-7">
                    {card.title}
                  </h3>
                  <p className="font-sans text-light-muted text-[14px] leading-[1.5]">
                    {card.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
