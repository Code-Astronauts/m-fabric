import Image from "next/image";
import Link from "next/link";

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
    <section id="projects" className="bg-white py-16 lg:py-24">
      <div className="max-w-[1341px] mx-auto px-5 sm:px-10 lg:px-[208px]">
        <div className="max-w-[925px]">
          <h2 className="font-display font-bold text-dark text-3xl lg:text-[36px] leading-10 mb-10 lg:mb-14">
            Проекты
          </h2>

          <div className="flex flex-col gap-14 lg:gap-20">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`flex flex-col ${
                  project.imageFirst
                    ? "lg:flex-row-reverse"
                    : "lg:flex-row"
                } gap-6 lg:gap-12 items-start`}
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
                <div className="flex flex-col gap-4 lg:gap-5 pt-2 flex-1">
                  <p className="font-sans text-brand-blue text-[14px] leading-5 tracking-[1.4px] uppercase">
                    {project.tag}
                  </p>
                  <h3 className="font-display font-bold text-dark text-2xl lg:text-[30px] leading-9">
                    {project.title}
                  </h3>
                  <p className="font-sans text-muted text-sm lg:text-[16px] leading-6 max-w-[338px] lg:max-w-[385px]">
                    {project.description}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center bg-brand-blue text-white font-sans font-medium text-[14px] px-6 py-3 rounded-xl hover:bg-brand-blue/90 transition-colors self-start mt-2"
                  >
                    Подробнее →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
