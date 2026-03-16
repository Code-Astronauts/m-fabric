import Image from "next/image";

export function Approach() {
  return (
    /*
      Внешняя обёртка без overflow:hidden — чтобы декоративные линии
      могли выходить за края синей карточки, как в Figma.
    */
    <div className="relative mx-6 lg:mx-10 my-8 lg:my-12">
      {/* Декоративные петли-штрихи — позиционированы относительно обёртки,
          выходят за края карточки */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: "-60px -40px -60px -40px",
          zIndex: 0,
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        <Image
          src="/images/approach-line.svg"
          alt=""
          width={1440}
          height={700}
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }}
          unoptimized
        />
      </div>

      {/* Синяя карточка */}
      <section
        id="approach"
        className="relative z-10 bg-blue-900 rounded-3xl lg:rounded-[32px] overflow-hidden px-6 lg:px-10 py-16 lg:py-20"
      >
        <div className="relative z-10 flex flex-col items-center gap-10 lg:gap-12">
          {/* Headings */}
          <div className="flex flex-col gap-6 text-white-300 text-center">
            <div className="flex flex-col gap-4 items-center">
              <p className="font-sans font-semibold text-[16.76px] tracking-[1.676px] uppercase leading-[25px]">
                Подход
              </p>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[48px] leading-[1.15] tracking-[-1.26px]">
                Не адаптируем. Переосмысляем.
              </h2>
            </div>
            <div className="font-display font-medium text-lg lg:text-2xl tracking-[-0.54px]">
              <p>Встроенная аудитория. Долгосрочный потенциал.</p>
              <p>Для больших и маленьких.</p>
            </div>
          </div>

          {/* Text content */}
          <div className="max-w-[700px] flex flex-col gap-6 lg:gap-8 text-light-blue-bg font-sans text-base sm:text-lg lg:text-2xl leading-8">
            <p>
              Рынок детского контента быстро трансформируется. Классическое шоу без
              культурной основы теряет устойчивость.
            </p>
            <p>
              М_фабрика детского контента работает именно в этой точке. Мы берём
              произведения, которые уже стали частью культурного кода — Сергей
              Михалков, русская классика — и переводим их на современный театральный
              язык.
            </p>
            <p>
              Результат — проекты с встроенной аудиторией, высоким доверием родителей
              и долгосрочным потенциалом масштабирования.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

