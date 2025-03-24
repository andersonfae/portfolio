"use client";
import { useState } from "react";
import { MapPin } from "phosphor-react";

export function Header() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <header className="bg-neutral-900">
      {/* Container com 30px de padding no topo e nas laterais */}
      <div className="flex items-center py-[30px] px-[30px] text-white font-sans pt-10">
        {/* Texto: Based in Ireland */}
        <div className="flex items-center gap-2 text-[14px]">
          <MapPin size={14} weight="duotone" />
          <span>
            <span className="font-medium">Based in </span>
            <span className="font-extrabold">Ireland</span>
          </span>
        </div>

        {/* Linha divisória */}
        <div className="flex-1 h-px bg-white mx-[20px] mr-[220px]" />

        {/* Link para abrir email */}
        <a
          href="mailto:andersonfae.owl@gmail.com"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className={`
            fixed right-[30px] top-[30px]
            flex items-center justify-center gap-2
            w-[200px] h-[40px]
            rounded-full
            whitespace-nowrap
            transition-colors duration-300
            border
            z-10
            ${
              isHovering
                ? "border-white/20 bg-[#2CDF411A]"
                : "border-white bg-neutral-900"
            }
          `}
        >
          {/* Bolinha verde com efeito de ping */}
          <span className="relative flex h-4 w-4">
            <span
              className="
                absolute
                inline-flex
                h-full w-full
                rounded-full
                bg-[#1A9128]
                opacity-75
                animate-ping
              "
            />
            <span
              className="
                relative
                inline-flex
                h-4 w-4
                rounded-full
                bg-[#2CDF41]
              "
            />
          </span>

          {/* Texto que muda no hover */}
          <span>{isHovering ? "Hire me!" : "Available for work"}</span>
        </a>
      </div>
    </header>
  );
}
