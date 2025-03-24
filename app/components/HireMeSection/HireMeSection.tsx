"use client";
import React from "react";
import {
  ChatCircleDots,
  PaperPlaneRight,
  LinkedinLogo,
  GithubLogo,
} from "phosphor-react";

export function HireMeSection() {
  return (
    <section
      id="hire-me"
      className="bg-neutral-900 text-white px-[30px] py-[60px] relative"
    >
      {/* Back to Top (posicionado absolutamente) */}
      <a
        href="#top"
        className="
          absolute
          -left-[270px]
          top-[250px]
          border-b border-white
          text-[14px]
          text-white
          inline-block
          hover:opacity-80
          transition
        "
      >
        Back to top!
      </a>

      {/* Conteúdo principal */}
      <div className="flex-1">
        {/* Linha com ícone e texto principal */}
        <div className="flex items-center gap-2">
          <ChatCircleDots size={16} color="#E9CA07" weight="duotone" />
          <h2 className="text-xl font-bold">
            Hire Me!{" "}
            <span className="text-white/50">I&apos;m a good Developer. :)</span>
          </h2>
        </div>

        {/* Espaçamento de 30px abaixo do texto */}
        <div className="h-[30px]" />

        {/* Faixa com fundo #FFFFFF1A, 60px top e bottom, ocupando toda a largura */}
        <div className="bg-[#FFFFFF1A] w-full py-[60px] flex items-center justify-center rounded">
          {/* Container dos links, com espaçamento entre si */}
          <div className="flex gap-4 flex-wrap justify-center">
            {/* E-mail */}
            <a
              href="mailto:andersonfae.owl@gmail.com"
              className="
                inline-flex items-center gap-2
                px-4 py-2
                rounded-full
                border border-white/30
                bg-[#FFFFFF1A]
                hover:bg-[#ffffff33]
                transition
              "
            >
              <PaperPlaneRight size={16} color="#E9CA07" weight="duotone" />
              <span>andersonfae.owl@gmail.com</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/seu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-4 py-2
                rounded-full
                border border-white/30
                bg-[#FFFFFF1A]
                hover:bg-[#ffffff33]
                transition
              "
            >
              <LinkedinLogo size={16} color="#E9CA07" weight="duotone" />
              <span>LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-4 py-2
                rounded-full
                border border-white/30
                bg-[#FFFFFF1A]
                hover:bg-[#ffffff33]
                transition
              "
            >
              <GithubLogo size={16} color="#E9CA07" weight="duotone" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
