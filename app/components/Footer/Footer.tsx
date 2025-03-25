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
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Texto esquerdo */}
        <div className="w-full md:w-1/2 text-[14px] mb-[30px] md:mb-0">
          <p className="font-bold md:inline">
            Anderson Faé – Full-Stack Developer.
          </p>
          <p className="text-white/60 md:inline">
            {" "}
            Made with{" "}
            <Heart
              size={16}
              color="#fff"
              weight="fill"
              className="inline-block align-text-bottom"
            />{" "}
            in Dublin & Rio de Janeiro.
          </p>
        </div>

        {/* Texto direito */}
        <div className="w-full md:w-1/2 text-left md:text-right text-[14px] flex flex-col md:block">
          <span>No Privacy Policy. No Terms of Use.</span>
          <span className="text-white/60">
            It&apos;s just a personal website.
          </span>
        </div>
      </div>

      {/* 90px de distância até a linha inferior */}
      <p className="mt-[90px] text-[14px]">
        <span className="text-white/60">Designed by </span>
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
