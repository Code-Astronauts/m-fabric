import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  label: string;
  title: string;
  description: string;
  imageSrc: string;
  links: { label: string; href: string; variant: "primary" | "outline" }[];
}

function ProjectCard({ label, title, description, imageSrc, links }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-10 lg:gap-14">
      {/* Info */}
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Text */}
        <div className="flex flex-col gap-8 max-w-[670px]">
          <div className="flex flex-col gap-4">
            <p className="font-sans font-semibold text-blue-900 text-[16px] tracking-[1.676px] uppercase leading-[25px] opacity-80">
              {label}
            </p>
            <h3 className="font-display font-extrabold text-black-800 text-2xl sm:text-3xl lg:text-[48px] leading-[1.15] tracking-[-1.26px]">
              {title}
            </h3>
          </div>
          <p className="font-sans text-grey-700 text-base sm:text-lg lg:text-[22px] leading-[36px]">
            {description}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-row lg:flex-col gap-4 lg:gap-8 lg:items-end flex-wrap">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-sans font-medium text-base lg:text-[21px] px-8 lg:px-10 py-5 rounded-xl transition-colors text-center whitespace-nowrap ${
                link.variant === "primary"
                  ? "bg-blue-800 text-white-300 hover:bg-blue-900"
                  : "border border-blue-800 text-grey-700 hover:bg-blue-800/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="relative w-full aspect-[1360/600] rounded-3xl lg:rounded-[32px] overflow-hidden bg-grey-500/10">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1360px"
        />
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-6 lg:px-10 py-16 lg:py-20">
      {/* Project 1: Stepa */}
      <ProjectCard
        label="Проекты"
        title={`Новогоднее шоу Дядя Стёпа «Говорят: под Новый год»`}
        description="Флагманский проект М_фабрики детского контента — масштабное новогоднее шоу с героями произведений писателя Сергея Михалкова."
        imageSrc="/images/project-stepa.png"
        links={[
          { label: "Открыть сайт шоу", href: "#", variant: "primary" },
          { label: "Видео", href: "#", variant: "outline" },
          { label: "Открыть слайд-шоу", href: "#", variant: "outline" },
        ]}
      />

      {/* Illustration: cloud (2287-2) — between projects, rotated */}
      <div
        className="absolute pointer-events-none hidden lg:block"
        style={{ right: "30%", top: "60%", width: 201, height: 175, transform: "translateY(-50%) rotate(17.95deg)", zIndex: -99 }}
        aria-hidden="true"
      >
        <Image
          src="/images/illus-cloud.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Separator */}
      <hr className="my-12 lg:my-16 border-t border-black/8" />

      {/* Project 2: Theatre */}
      <ProjectCard
        label="Театральный проект"
        title={`«Три поросёнка Ой» — спектакль большой формы с использованием кукол`}
        description="Проект М_фабрики детского контента — знакомая с детства история о трёх поросятах, написанная Сергеем Михалковым, получила новое прочтение благодаря его внучкам — Ане и Наде Михалковым, выступившим создательницами и идейными вдохновительницами постановки. Их трепетное отношение к семейному наследию и любовь к детской литературе помогли превратить известную сказку в увлекательное и многослойное театральное приключение."
        imageSrc="/images/project-theatre.png"
        links={[
          { label: "Открыть сайт шоу", href: "#", variant: "primary" },
          { label: "Видео", href: "#", variant: "outline" },
          { label: "Открыть слайд-шоу", href: "#", variant: "outline" },
        ]}
      />
    </section>
  );
}
