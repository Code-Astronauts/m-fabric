const footerLinks = [
  { label: "О нас", href: "#about" },
  { label: "Проекты", href: "#projects" },
  { label: "Партнёрство", href: "#partnership" },
  { label: "Команда", href: "#team" },
  { label: "Контакты", href: "#contacts" },
];

export function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 py-8 lg:py-[48px]">
      <div className="max-w-[1341px] mx-auto px-[38px] sm:px-10 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-sans text-light-muted text-[14px] leading-5 text-center sm:text-left">
          © 2026 М_фабрика детского контента. Все права защищены.
        </p>

        <nav className="flex items-center gap-6 flex-wrap justify-center">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-light-muted text-[14px] leading-5 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
