import Image from "next/image";
import Link from "next/link";
import WaveHero from "@/components/WaveHero";

export function About() {
  return (
    <section id="about" className="relative bg-navy py-14 lg:py-24">

        <div className="absolute inset-0 pointer-events-none z-0 bg-navy">
            <WaveHero
                src="/images/hero-bg-mirrored.jpg"
                amplitudeScale={0.3}
                riseRate={0.06}
                fallRate={0.01}
                className="opacity-30"
            />
        </div>

      <div className="max-w-[1341px] mx-auto px-[38px] sm:px-10 lg:px-[120px]">
        <div className="max-w-[925px]">
          {/* Label */}
          <p className="font-sans text-label-dark text-[13px] leading-[1.4] tracking-[1.4px] uppercase mb-4 lg:mb-5">
            О нас
          </p>

          {/* Heading */}
          <h2 className="font-display font-bold text-white text-[28px] leading-[1.15] lg:text-[36px] lg:leading-[1.1] mb-6 lg:mb-8">
            Мы создаём продукты детского контента{" "}
            <span className="block">для больших и маленьких</span>
          </h2>

          {/* Body */}
          <div className="max-w-[768px] flex flex-col gap-4 lg:gap-5 mb-8 lg:mb-10">
            <p className="font-sans text-light-muted text-[15px] leading-[1.5] lg:text-[18px] lg:leading-7">
              М_фабрика детского контента — компания, которая основана Анной и
              Надеждой Михалковыми. Мы работаем на пересечении театра,
              технологий и современного детского восприятия.
            </p>
            <p className="font-sans text-light-muted text-[15px] leading-[1.5] lg:text-[18px] lg:leading-7">
              Наша задача — переводить классические культурные произведения в
              современный язык: понятный детям и одновременно ценный для
              взрослых.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="#contacts"
            style={{ zIndex: 9999 }}
            className="inline-flex items-center bg-brand-blue text-white font-sans font-medium text-[14px] px-6 py-3 rounded-xl hover:bg-brand-blue/90 transition-colors"
          >
            Наша команда
          </Link>
        </div>
      </div>

      {/* Illustration: asterisk — left side, near cards */}
      <div
          className="hidden lg:block absolute pointer-events-none z-0"
        style={{ left: 0, top: 0, width: "100%", zIndex: 0, }}
        aria-hidden="true"
      >
          <Image
              src="/images/illus-drop.svg"
              alt=""
              width={121}
              height={145}
              style={{ position: "absolute", right: 50, bottom: -180, transform: "rotate(15deg)" }}
              unoptimized
          />

        <Image
          src="/images/illus-asterisk.svg"
          alt=""
          width={90}
          height={113}
          style={{ position: "absolute", left: "3%", top: 430 }}
          className="object-contain"
        />
      </div>
    </section>
  );
}
