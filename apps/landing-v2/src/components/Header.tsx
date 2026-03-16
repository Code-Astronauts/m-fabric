"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "О нас", href: "#about" },
  { label: "Проекты", href: "#projects" },
  { label: "Партнёрство", href: "#partnership" },
  { label: "Контакты", href: "#contacts" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      id="header"
      className="sticky top-0 z-50 bg-navy border-b border-white/10"
    >
      <div className="max-w-[1341px] mx-auto px-5 sm:px-10 lg:px-20 flex items-center justify-between h-[72px] lg:h-[112px]">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="М-фабрика детского контента"
            width={70}
            height={58}
            className="h-10 lg:h-[58px] w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-sans text-white/90 text-sm lg:text-[14px] px-3 py-2 rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="#partnership"
          className="hidden md:inline-flex items-center bg-brand-blue text-white font-sans font-medium text-sm lg:text-[14px] px-5 py-2.5 rounded-xl hover:bg-brand-blue/90 transition-colors"
        >
          Партнёрам
        </Link>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white p-2"
          aria-label="Меню"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy border-t border-white/10 px-5 pb-6 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-sans text-white/90 text-base py-3 border-b border-white/10 last:border-0"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#partnership"
            className="mt-2 inline-flex items-center justify-center bg-brand-blue text-white font-sans font-medium text-base px-5 py-3 rounded-xl"
            onClick={() => setMobileOpen(false)}
          >
            Партнёрам
          </Link>
        </div>
      )}
    </header>
  );
}
