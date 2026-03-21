import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const projects = [
  {
    id: "stepa",
    tag: "Флагманский проект",
    title: "Дядя Стёпа",
    description:
      "Флагманский проект М_фабрики детского контента — масштабное новогоднее шоу с героями произведений писателя Сергея Михалкова.",
    image: "/images/project-stepa.png",
    imageFirst: false,
  },
  {
    id: "piglets",
    tag: "Спектакль",
    title: "Три поросёнка Ой",
    description:
      "Знакомая с детства история о трёх поросятах, написанная Сергеем Михалковым, получила новое прочтение благодаря его внучкам — Анне и Надежде Михалковым.",
    image: "/images/project-piglets.png",
    imageFirst: true,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-white py-14 lg:py-24">
      <div className="max-w-[1341px] mx-auto px-[38px] sm:px-10 lg:px-[120px]">
        <div className="max-w-[925px]">
          <Reveal>
            <h2 className="font-display font-bold text-dark text-[28px] leading-[1.2] lg:text-[36px] lg:leading-10 mb-8 lg:mb-14">
              Проекты
            </h2>
          </Reveal>

          {/* Illustrations */}
          <div
            className="hidden lg:block absolute pointer-events-none z-0"
            style={{ left: 0, top: 0, width: "100%", height: "100%" }}
            aria-hidden="true"
          >
            {/* Cloud — floats */}
            <div style={{ position: "absolute", left: "18%", bottom: -975 }}>
              <div className="animate-illus-float">
                <Image
                  src="/images/illus-cloud.svg"
                  alt=""
                  width={201}
                  height={175}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Circle — pulses */}
            <div style={{ position: "absolute", right: "5%", top: 370 }}>
              <div className="animate-illus-pulse">
                <Image
                  src="/images/illus-circle.svg"
                  alt=""
                  width={220}
                  height={273}
                  style={{ transform: "rotate(35deg)" }}
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-12 lg:gap-20">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={i * 120}>
                <div
                  className={`flex flex-col ${
                    project.imageFirst
                      ? "lg:flex-row-reverse"
                      : "lg:flex-row"
                  } gap-5 lg:gap-12 items-start`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-[479px] shrink-0">
                    <div className="relative w-full aspect-[479/320] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-3 lg:gap-5 pt-1 flex-1">
                    <p className="font-sans text-brand-blue text-[13px] leading-[1.4] tracking-[1.4px] uppercase">
                      {project.tag}
                    </p>
                    <h3 className="font-display font-bold text-dark text-[22px] leading-[1.2] lg:text-[30px] lg:leading-9">
                      {project.title}
                    </h3>
                    <p className="font-sans text-muted text-[15px] leading-[1.5] lg:text-[16px] lg:leading-6 max-w-[385px]">
                      {project.description}
                    </p>
                    <Link
                      href="#"
                      style={{ zIndex: 9999 }}
                      className="inline-flex items-center bg-brand-blue text-white font-sans font-medium text-[14px] px-6 py-3 rounded-xl hover:bg-brand-blue/90 transition-colors self-start mt-1"
                    >
                      Подробнее →
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
