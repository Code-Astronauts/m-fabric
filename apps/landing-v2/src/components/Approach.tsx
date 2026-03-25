import { Reveal } from "@/components/Reveal";

const paragraphs = [
  "Рынок детского контента быстро трансформируется. Классическое шоу без культурной основы теряет устойчивость. Побеждают проекты, которые одновременно интересны ребёнку, значимы для родителя и привлекательны для партнёра.",
  "М_фабрика детского контента работает именно в этой точке. Мы берём произведения, которые уже стали частью культурного кода — Сергей Михалков, русская классика — и переводим их на современный театральный язык.",
  "Результат — проекты с встроенной аудиторией, высоким доверием родителей и долгосрочным потенциалом масштабирования: гастроли, франшиза, лицензирование, кино.",
];

export function Approach() {
  return (
    <section id="approach" className="bg-navy py-14 lg:py-24">
      <div className="max-w-[1341px] mx-auto px-[38px] sm:px-10 lg:px-[120px]">
        <div className="max-w-[925px]">
          <Reveal>
            <p className="font-sans text-label-dark text-[13px] leading-[1.4] tracking-[1.4px] uppercase mb-4 lg:mb-5">
              Подход
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="font-display font-bold text-white text-[28px] leading-[1.15] lg:text-[36px] lg:leading-10 mb-3 lg:mb-4">
                Сильные смыслы. Масштабируемость. Для больших и маленьких.
            </h2>
          </Reveal>

          <div className="max-w-[768px] flex flex-col gap-4 lg:gap-6">
            {paragraphs.map((text, i) => (
              <Reveal key={i} delay={i * 100 + 300}>
                <p className="font-sans text-white-warm text-[15px] leading-[1.5] lg:text-[18px] lg:leading-7">
                  {text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
