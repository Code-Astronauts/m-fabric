import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-blue-900 overflow-hidden px-6 lg:px-10 py-20 sm:py-28 lg:py-[140px]"
    >
      {/* Decorative vector — anchored top-right, natural aspect, no stretch */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/*
          В Figma вектор: 1061×900px, выровнен по правому краю и верху секции.
          Мы фиксируем высоту 100% секции, ширина авто — SVG не деформируется.
        */}
        <Image
          src="/images/hero-vector.svg"
          alt=""
          width={1061}
          height={900}
          className="absolute top-[280px] right-[-150px] h-full w-auto max-w-none"
          priority
          unoptimized
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[954px]">
        <div className="flex flex-col gap-8">
          {/* Heading + subtitle */}
          <div className="flex flex-col gap-3">
            <h1 className="font-display font-bold text-white-300 text-4xl sm:text-5xl lg:text-[76px] leading-[1.1]">
              М_фабрика
              <br />
              детского контента
            </h1>
            <p className="font-sans font-semibold text-white-300 text-xl sm:text-2xl lg:text-[32px]">
              Продюсерский центр
            </p>
          </div>

          {/* Description */}
          <p className="font-sans text-white-300/80 text-base sm:text-lg lg:text-2xl leading-8 max-w-[846px]">
            М_фабрика детского контента — продюсерский центр на пересечении
            классического наследия и современного театра. Мы создаём масштабные шоу
            и культурные проекты на основе литературного наследия, сильных смыслов и
            современных форматов — шоу, которые одновременно понятны детям и значимы
            для взрослых.
          </p>

          {/* CTA Buttons — без стрелочек */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link
              href="#projects"
              className="bg-white-300 text-black-800 font-sans font-semibold text-lg lg:text-[22px] px-8 lg:px-10 py-5 rounded-xl hover:bg-white transition-colors text-center"
            >
              Проекты
            </Link>
            <Link
              href="#partnership"
              className="bg-white/8 border border-white/20 text-white-300 font-sans font-medium text-lg lg:text-[21px] px-8 lg:px-10 py-5 rounded-xl hover:bg-white/15 transition-colors text-center"
            >
              Партнерам
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
