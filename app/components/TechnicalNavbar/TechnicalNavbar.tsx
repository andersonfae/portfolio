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
    <>
      {/* DESKTOP NAVBAR (sticky on the left) */}
      <nav
        className="
          w-64 mr-8
          sticky top-[30px]
          self-start
          hidden lg:block
          pt-[30px]
        "
      >
        <ul className="space-y-[10px]">
          {navItems.map((item) => {
            const isActive = activeItem === item.href;
            return (
              <li key={item.label}>
                <button
                  onClick={() => handleClick(item.href)}
                  className={`
                    inline-block
                    cursor-pointer
                    text-sm font-medium
                    leading-none
                    border-b border-white
                    hover:underline
                    pb-[2px]
                    ${isActive ? "line-through opacity-40" : ""}
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

      {/* MOBILE NAVBAR (fixed at the bottom) */}
      <nav
        className="
          fixed
          bottom-0
          left-0
          w-full
          h-[60px]
          bg-neutral-900
          text-white
          border-t border-white
          z-50
          lg:hidden
          overflow-x-auto
          hide-scrollbar
        "
      >
        <div className="flex items-center px-[15px] h-full whitespace-nowrap">
          {navItems.map((item) => {
            const isActive = activeItem === item.href;
            return (
              <button
                key={item.label}
                onClick={() => handleClick(item.href)}
                className={`
                  text-[12px] font-medium
                  leading-none
                  hover:underline
                  px-4
                  ${isActive ? "line-through opacity-40" : ""}
                `}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Sombras nas laterais para indicar scroll */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-neutral-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-neutral-900 to-transparent" />
      </nav>
    </>
  );
}
