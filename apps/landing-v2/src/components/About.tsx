import Link from "next/link";

export function About() {
  return (
    <section id="about" className="bg-navy py-16 lg:py-24">
      <div className="max-w-[1341px] mx-auto px-5 sm:px-10 lg:px-[208px]">
        <div className="max-w-[925px]">
          {/* Label */}
          <p className="font-sans text-label-dark text-[14px] leading-5 tracking-[1.4px] uppercase mb-5">
            О нас
          </p>

          {/* Heading */}
          <h2 className="font-display font-bold text-white text-3xl lg:text-[36px] leading-[1.1] mb-8">
            Мы создаём продукты детского контента{" "}
            <span className="block">для больших и маленьких</span>
          </h2>

          {/* Body */}
          <div className="max-w-[768px] flex flex-col gap-5 mb-10">
            <p className="font-sans text-light-muted text-base lg:text-[18px] leading-7">
              М_фабрика детского контента — компания, которая основана Анной и
              Надеждой Михалковыми. Мы работаем на пересечении театра,
              технологий и современного детского восприятия.
            </p>
            <p className="font-sans text-light-muted text-base lg:text-[18px] leading-7">
              Наша задача — переводить классические культурные произведения в
              современный язык: понятный детям и одновременно ценный для
              взрослых.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="#contacts"
            className="inline-flex items-center bg-brand-blue text-white font-sans font-medium text-[14px] px-6 py-3 rounded-xl hover:bg-brand-blue/90 transition-colors"
          >
            Наша команда
          </Link>
        </div>
      </div>
    </section>
  );
}
