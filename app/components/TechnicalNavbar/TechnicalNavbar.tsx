"use client";
import React, { useState } from "react";

export function TechnicalNavbar() {
  const navItems = [
    { label: "Technical Expertise", href: "#technical-expertise" },
    { label: "Recent Works", href: "#recent-works" },
    { label: "Experience", href: "#experience" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#hire-me" },
  ];

  const [activeItem, setActiveItem] = useState(navItems[0].href);

  const handleClick = (href: string) => {
    setActiveItem(href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="
        w-64 mr-8
        sticky top-[30px]
        self-start
        hidden lg:block
        pt-[30px]
      "
    >
      {/* Espaçamento vertical de 10px entre os links */}
      <ul className="space-y-[10px]">
        {navItems.map((item) => {
          const isActive = activeItem === item.href;
          return (
            <li key={item.label}>
              <button
                onClick={() => handleClick(item.href)}
                className={`
                  inline-block           /* Para a borda ter o mesmo tamanho do texto */
                  cursor-pointer
                  text-sm font-medium
                  leading-none          /* Diminui a altura da linha, aproximando o texto da borda */
                  border-b border-white /* Borda embaixo do texto */
                  hover:underline
                  pb-[2px]             /* Pequeno espaço entre o texto e a borda */
                  ${
                    isActive
                      ? "line-through opacity-40" /* Ao clicar: risco + opacidade 40% */
                      : ""
                  }
                  text-white
                `}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
