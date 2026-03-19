import Image from "next/image";
import Link from "next/link";
import WaveHero from "@/components/WaveHero";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-navy overflow-hidden"
      style={{ minHeight: "600px" }}
    >
      {/* Background — WaveHero canvas */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <WaveHero
          src="/images/hero-bg.png"
          amplitudeScale={1.5}
          riseRate={0.06}
          fallRate={0.01}
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/60 pointer-events-none z-0" />

      {/* Content — pt-[72px] on mobile (header height), pt-[96px] on desktop */}
      <div className="relative z-10 max-w-[1341px] mx-auto px-[38px] sm:px-10 lg:px-12 pt-[96px] pb-16 lg:pt-[160px] lg:pb-[120px] flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
        {/* Left: text */}
        <div className="flex-1 flex flex-col gap-5 lg:gap-6 max-w-[580px]">
          <div className="flex flex-col gap-2">
            <h1 className="font-display font-bold text-white text-[36px] leading-[1.1] sm:text-5xl lg:text-[60px]">
              М_фабрика детского контента
            </h1>
            <p className="font-sans font-normal text-accent-grey text-base lg:text-[20px] leading-[1.4] lg:leading-7">
              Продюсерский центр
            </p>
          </div>

          <p className="font-sans text-accent-grey/90 text-[15px] leading-[1.5] lg:text-[20px] lg:leading-7 max-w-[580px]">
            М_фабрика детского контента — продюсерский центр на пересечении
            классического наследия и современного театра. Мы создаём масштабные
            шоу и культурные проекты на основе литературного наследия, сильных
            смыслов и современных форматов — шоу, которые одновременно понятны
            детям и значимы для взрослых.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
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
        <div className="hidden lg:flex shrink-0 ml-auto ml-auto">
          <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
            <Image
              src="/images/logo-main.png"
              alt="М_фабрика детского контента логотип"
              width={251}
              height={281}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
