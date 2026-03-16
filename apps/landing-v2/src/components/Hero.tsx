import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-navy overflow-hidden"
      style={{ minHeight: "560px" }}
    >
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          aria-hidden="true"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-navy/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1341px] mx-auto px-5 sm:px-10 lg:px-20 pt-24 pb-20 lg:pt-[200px] lg:pb-[140px] flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
        {/* Left: text */}
        <div className="flex-1 flex flex-col gap-6 max-w-[612px]">
          <div className="flex flex-col gap-3">
            <h1 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-[60px] leading-[1.1]">
              М_фабрика детского контента
            </h1>
            <p className="font-sans font-normal text-accent-grey text-lg lg:text-[20px] leading-7">
              Продюсерский центр
            </p>
          </div>

          <p className="font-sans text-accent-grey/90 text-base lg:text-[20px] leading-7 max-w-[600px]">
            М_фабрика детского контента — продюсерский центр на пересечении
            классического наследия и современного театра. Мы создаём масштабные
            шоу и культурные проекты на основе литературного наследия, сильных
            смыслов и современных форматов — шоу, которые одновременно понятны
            детям и значимы для взрослых.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href="#partnership"
              className="inline-flex items-center justify-center bg-brand-blue text-white font-sans font-medium text-sm px-6 py-3 rounded-xl hover:bg-brand-blue/90 transition-colors"
            >
              Партнёрам
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center justify-center border border-white/30 text-white font-sans font-medium text-sm px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              Наши проекты
            </Link>
          </div>
        </div>

        {/* Right: logo card */}
        <div className="hidden lg:flex shrink-0">
          <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-sm">
            <Image
              src="/images/logo-main.png"
              alt="М_фабрика детского контента логотип"
              width={281}
              height={232}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
