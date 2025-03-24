"use client";
import { Heart } from "phosphor-react";
import React from "react";

export function Footer() {
  return (
    <footer
      className="
        mt-[90px]
        border border-white
        text-white
        p-[30px]
        relative
      "
    >
      {/* Linha superior: texto à esquerda + texto à direita */}
      <div className="flex justify-between items-start">
        {/* Texto esquerdo */}
        <p className="w-1/2 text-[14px] font-bold">
          Anderson Faé – Full-Stack Developer.
          {/* Parte com opacidade 60% */}
          <span className="font-normal text-white/60">
            {" "}
            Made with{" "}
            <span>
              <Heart
                size={16}
                color="#fff"
                weight="fill"
                className="inline-block align-text-bottom"
              />
            </span>{" "}
            in Dublin & Rio de Janeiro.
          </span>
        </p>

        {/* Texto direito */}
        <p className="w-1/2 text-right text-[14px]">
          {/* Sem opacidade */}
          <span>No Privacy Policy. No Terms of Use. </span>
          {/* 60% de opacidade */}
          <span className="text-white/60">
            It&apos;s just a personal website.
          </span>
        </p>
      </div>

      {/* 90px de distância até a linha inferior */}
      <p className="mt-[90px] text-[14px]">
        {/* "Designed by" em 60% de opacidade */}
        <span className="text-white/60">Designed by </span>
        {/* "Cosme Faé" sem opacidade, borda branca embaixo, link para LinkedIn */}
        <a
          href="https://hellofae.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-white text-white"
        >
          Cosme Faé
        </a>
      </p>
    </footer>
  );
}
