const paragraphs = [
  "Рынок детского контента быстро трансформируется. Классическое шоу без культурной основы теряет устойчивость. Побеждают проекты, которые одновременно интересны ребёнку, значимы для родителя и привлекательны для партнёра.",
  "М_фабрика детского контента работает именно в этой точке. Мы берём произведения, которые уже стали частью культурного кода — Сергей Михалков, русская классика — и переводим их на современный театральный язык.",
  "Результат — проекты с встроенной аудиторией, высоким доверием родителей и долгосрочным потенциалом масштабирования: гастроли, франшиза, лицензирование, кино.",
];

export function Approach() {
  return (
    <section id="approach" className="bg-navy py-16 lg:py-24">
      <div className="max-w-[1341px] mx-auto px-5 sm:px-10 lg:px-[208px]">
        <div className="max-w-[925px]">
          {/* Label */}
          <p className="font-sans text-label-dark text-[14px] leading-5 tracking-[1.4px] uppercase mb-5">
            Подход
          </p>

          {/* Heading */}
          <h2 className="font-display font-bold text-white text-3xl lg:text-[36px] leading-10 mb-4">
            Не адаптируем. Переосмысляем.
          </h2>

          {/* Tagline */}
          <div className="flex flex-col gap-1 mb-8 lg:mb-10">
            <p className="font-sans italic text-light-muted text-base lg:text-[18px] leading-7">
              Встроенная аудитория. Сильные смыслы. Масштабируемость.
            </p>
            <p className="font-sans italic text-light-muted text-base lg:text-[18px] leading-7">
              Для больших и маленьких.
            </p>
          </div>

          {/* Body paragraphs */}
          <div className="max-w-[768px] flex flex-col gap-6">
            {paragraphs.map((text, i) => (
              <p
                key={i}
                className="font-sans text-white-warm text-base lg:text-[18px] leading-7"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
