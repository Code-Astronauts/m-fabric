"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "История", href: "#history" },
  { label: "О нас", href: "#about" },
  { label: "Проекты", href: "#projects" },
  { label: "Партнерство", href: "#partnership" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        id="header"
        className="bg-blue-900 sticky top-0 z-50 flex items-center px-6 lg:px-10 py-4 lg:py-5"
      >
        {/* Nav — left, desktop only */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 shrink-0">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-display font-medium text-white-300 text-base lg:text-lg px-3 lg:px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Logo — centered on md+ via auto margins, left on mobile */}
        <Link href="/" className="md:mx-auto shrink-0">
          <Image
            src="/images/logo.png"
            alt="М-фабрика"
            width={110}
            height={91}
            className="h-14 lg:h-[91px] w-auto"
            priority
          />
        </Link>

        {/* Right — contacts button + burger */}
        <div className="ml-auto md:ml-0 flex items-center gap-2 shrink-0">
          <Link
            href="#contacts"
            className="border border-white-300 text-white-300 font-display font-medium text-base lg:text-lg px-4 lg:px-5 py-2.5 lg:py-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            Контакты
          </Link>

          {/* Burger — mobile only */}
          <button
            className="md:hidden text-white-300 p-2"
            aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="md:hidden fixed inset-x-0 top-[66px] bottom-0 z-40 bg-blue-900/98 backdrop-blur-sm flex flex-col px-6 py-8 gap-2 overflow-y-auto"
          onClick={() => setMobileOpen(false)}
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-display font-semibold text-white-300 text-2xl py-4 border-b border-white/10 hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contacts"
            className="mt-6 font-display font-semibold text-white-300 text-2xl py-4"
            onClick={() => setMobileOpen(false)}
          >
            Контакты
          </Link>
        </nav>
      )}
    </>
  );
}
